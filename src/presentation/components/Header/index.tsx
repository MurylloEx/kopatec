import { FunctionComponent } from 'react';
import { Styled } from './styles';

export interface HeaderProps {
  
}

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Styled.Column>
      <Styled.TopRow>
        <Styled.LogoImage src="/images/kopatec-logo.svg"/>
      </Styled.TopRow>
    </Styled.Column>
  );
}
