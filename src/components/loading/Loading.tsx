import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <img src="/img/logo.webp" alt="logo" className="w-16 h-16 animate-spin" />
      <p className="mt-4 text-lg font-semibold text-gray-600">Getting pokemon</p>
    </div>
  );
};

export default Loading;