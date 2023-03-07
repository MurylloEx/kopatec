import { Fragment, FunctionComponent, ReactNode } from 'react';

export interface IfElseIfProps {
  value: boolean;
  children: ReactNode;
}

export const IfElseIf: FunctionComponent<IfElseIfProps> = ({ value, children }) => {
  return value ? <Fragment>{children}</Fragment> : null;
}
