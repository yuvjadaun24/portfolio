import React from 'react';

type CRTContainerProps = {
  children: React.ReactNode;
  osd?: React.ReactNode;
  className?: string;
};

export default function CRTContainer({ children }: CRTContainerProps) {
  return <>{children}</>;
}
