import { Fragment, FunctionComponent, ReactNode } from 'react';

export interface IfThenProps {
  children: ReactNode;
}

export const IfThen: FunctionComponent<IfThenProps> = ({ children }) => {
  return ( <Fragment>{children}</Fragment> );
}
