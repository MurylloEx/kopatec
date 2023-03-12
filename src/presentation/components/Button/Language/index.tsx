import { FunctionComponent, HTMLAttributes } from 'react';
import { Styled } from './styles';


export interface ButtonLanguageProps extends HTMLAttributes<HTMLDivElement> {
  onClick?(): void;
}

export const ButtonLanguage: FunctionComponent<ButtonLanguageProps> = (props) => {
  return (
    <Styled.Container {...props}>

      <Styled.LeftContainer>
        <Styled.GlobeIcon />
      </Styled.LeftContainer>

      <Styled.RightContainer>
        <Styled.Label>
          Idioma
        </Styled.Label>
        <Styled.ArrowDownIcon />
      </Styled.RightContainer>

    </Styled.Container>
  );
}
