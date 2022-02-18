import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, View} from 'react-native';
import languageTo from '../util/languageTo';
import {Language} from '../constants/types';
import {TranslatedData} from '../context/TranslateContext';

const LOADING_MESSSAGE = '@L@O@A@D@I@N@G@';

const INJECTED_JAVASCRIPTS = {
  kakao: `setInterval(() => {
        var doc = document.querySelector('#result')
        if(doc){
            var kakao = ''
            $('#result').each(function (i, elem) {
                kakao += $(elem).text()
            })
            window.ReactNativeWebView.postMessage(kakao)
        }
        else window.ReactNativeWebView.postMessage('${LOADING_MESSSAGE}')
    }, 200)`,
  google: `setInterval(() => {
        var selector = 'body > c-wiz > div > div:nth-child(2) > c-wiz > div:nth-child(2) > c-wiz > div > div:nth-child(2) > div:nth-child(3) > c-wiz:nth-child(2) > div:nth-child(7) > div > div > span > span > span'
        var doc = document.querySelector(selector)
        if(doc) window.ReactNativeWebView.postMessage(doc.innerText)
        else window.ReactNativeWebView.postMessage('${LOADING_MESSSAGE}')
    }, 200)`,
  naver: `setInterval(() => {
    var doc = document.querySelector('#txtTarget > span')
    if(doc) window.ReactNativeWebView.postMessage(doc.innerHTML)
    else window.ReactNativeWebView.postMessage('${LOADING_MESSSAGE}')
}, 200)`,
};

const USER_AGENT =
  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/4.0';

interface TranslatorCrawlerProps {
  loading: boolean;
  fromLanguage: Language;
  toLanguage: Language;
  text: string;
  onTranslated: (data: TranslatedData) => void;
}

const TranslatorCrawler: React.FC<TranslatorCrawlerProps> = props => {
  const {fromLanguage, loading, text, toLanguage, onTranslated} = props;

  const [isTimeouted, setIsTimeouted] = useState(false);
  const [translated, setTranslated] = useState<TranslatedData>({
    google: new Error(),
    kakao: new Error(),
    naver: new Error(),
  });

  useEffect(() => {
    if (loading) {
      // 초기화
      setTranslated({
        google: new Error(),
        kakao: new Error(),
        naver: new Error(),
      });
      setIsTimeouted(false);
      // 타임아웃 7초
      setTimeout(() => setIsTimeouted(true), 5000);
    }
  }, [loading]);

  useEffect(() => {
    // 시간 초과
    if (!loading) return;
    if (!isTimeouted) return;
    onTranslated(translated);
  }, [isTimeouted]);

  useEffect(() => {
    // 정상 작동
    if (!loading) return;
    if (!Object.values(translated).every(v => typeof v === 'string')) return;
    onTranslated(translated);
  }, [translated]);

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        injectedJavaScript={INJECTED_JAVASCRIPTS.naver}
        userAgent={USER_AGENT}
        source={{
          uri: `https://papago.naver.com/?sk=${languageTo.naverLanguage(
            fromLanguage,
          )}&tk=${languageTo.naverLanguage(toLanguage)}&hn=0&st=${text}`,
        }}
        cacheEnabled={false}
        onMessage={event => {
          if (!loading) return;
          const result = event.nativeEvent.data;
          if (result === LOADING_MESSSAGE) return;
          setTranslated(prev => ({...prev, naver: result}));
        }}
      />
      <WebView
        style={styles.webview}
        injectedJavaScript={INJECTED_JAVASCRIPTS.kakao}
        userAgent={USER_AGENT}
        source={{
          uri: `https://translate.kakao.com/?lang=${fromLanguage}${toLanguage}&q=${text}`,
        }}
        cacheEnabled={false}
        onMessage={event => {
          if (!loading) return;
          const result = event.nativeEvent.data;
          if (result === LOADING_MESSSAGE) return;
          setTranslated(prev => ({...prev, kakao: result}));
        }}
      />
      <WebView
        style={styles.webview}
        injectedJavaScript={INJECTED_JAVASCRIPTS.google}
        userAgent={USER_AGENT}
        source={{
          uri: `https://translate.google.com/?sl=${languageTo.googleLanguage(
            fromLanguage,
          )}&tl=${languageTo.googleLanguage(toLanguage)}&text=${text}`,
        }}
        cacheEnabled={true}
        onMessage={event => {
          if (!loading) return;
          const result = event.nativeEvent.data;
          if (result === LOADING_MESSSAGE) return;
          setTranslated(prev => ({...prev, google: result}));
        }}
      />
    </View>
  );
};

export default TranslatorCrawler;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
  },
});
