import { FunctionComponent, HTMLAttributes } from 'react';
import { Styled } from './styles';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <Styled.Column {...props}>
      <Styled.TopRow>
        <Styled.TopLeftContainer>
          <Styled.LogoImage src="/images/kopatec-logo.svg" alt="Kopatec Logo"/>
        </Styled.TopLeftContainer>
        <Styled.TopRightContainer>
          <Styled.Language />
          <Styled.Location 
            city="Lima"
            country="Perú"
          />
        </Styled.TopRightContainer>
      </Styled.TopRow>
      <Styled.BottomRow>
        Menu Itens
      </Styled.BottomRow>
    </Styled.Column>
  );
}
