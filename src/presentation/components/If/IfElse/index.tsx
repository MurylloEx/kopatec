import { Fragment, FunctionComponent, ReactNode } from 'react';

export interface IfElseProps {
  children: ReactNode;
}

export const IfElse: FunctionComponent<IfElseProps> = ({ children }) => {
  return ( <Fragment>{children}</Fragment> );
}
