

import React, {FC,ReactNode} from 'react';

type BasicLayoutProps = {
    children:ReactNode 
}

export const BasicLayout: FC<BasicLayoutProps> = ({children}) => {
  return (
    <div className="min-h-screen bg-[#1f1b1b]">
    <div className="max-w-[1000px] mx-auto min-h-screen bg-[#242424] px-8">
      {children}
    </div>
    </div>
  );
};


