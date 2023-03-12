import { FunctionComponent, HTMLAttributes } from 'react';
import { Styled } from './styles';

export interface ButtonLocationProps extends HTMLAttributes<HTMLDivElement> {
  city: string;
  country: string;
}

export const ButtonLocation: FunctionComponent<ButtonLocationProps> = (props) => {
  return (
    <Styled.Container {...props}>
      <Styled.IconContainer>
        <Styled.LocationIcon />
      </Styled.IconContainer>
      <Styled.TextContainer>
        <Styled.CityLabel>{props.city}</Styled.CityLabel>
        <Styled.CountryLabel>{props.country}</Styled.CountryLabel>
      </Styled.TextContainer>
    </Styled.Container>
  );
}
