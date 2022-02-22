import React, { useEffect } from 'react';

const SupportPage = () => {
  useEffect(() => {
    window.location.href = 'mailto:coderhyun476@gmail.com';
  }, []);

  return (
    <div>
      <h1>고객지원</h1>
      <a href="mailto:coderhyun476@gmail.com">coderhyun476@gmail.com</a>
    </div>
  );
};

export default SupportPage;
