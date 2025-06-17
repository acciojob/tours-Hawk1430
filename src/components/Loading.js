import React from 'react';

const Loading = () => {
  const loaderStyle = {
    width: '60px',
    height: '60px',
    border: '6px solid #e0e0e0',
    borderTop: '6px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: 'auto'
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={loaderStyle}></div>
    </>
  );
};

export default Loading;
