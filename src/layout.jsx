import React from 'react';
export const BasicLayout = ({ children }) => {
    return (<div className="min-h-screen bg-[#141212]">
    <div className="max-w-[1000px] mx-auto min-h-screen bg-[#242424] px-8">
      {children}
    </div>
    </div>);
};
