import { FunctionComponent, HTMLAttributes } from 'react';
import { Styled } from './styles';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  
}

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Styled.Column>
      <Styled.TopRow>
        <Styled.TopLeftContainer>
          <Styled.LogoImage src="/images/kopatec-logo.svg" alt="Kopatec Logo"/>
        </Styled.TopLeftContainer>
        <Styled.TopRightContainer>
          Language Button | Location Button
        </Styled.TopRightContainer>
      </Styled.TopRow>
      <Styled.BottomRow>
        Menu Itens
      </Styled.BottomRow>
    </Styled.Column>
  );
}
