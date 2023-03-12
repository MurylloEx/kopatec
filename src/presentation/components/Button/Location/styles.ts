import styled from 'styled-components';
import { SlLocationPin } from 'react-icons/sl';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 120px;
  height: 48px;
  color: #9A9EA6;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #E9F6F1;
  cursor: pointer;
`;

const LocationIcon = styled(SlLocationPin)`
  font-size: 22px;
  color: #1EBE7E;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 16px;
  cursor: pointer;
`;

const CityLabel = styled.label`
  font-size: 14px;
  color: #9A9EA6;
  padding-bottom: 2px;
  cursor: pointer;
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

const CountryLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #1EBE7E;
  padding-top: 2px;
  cursor: pointer;
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;


export const Styled = {
  Container,
  IconContainer,
  TextContainer,
  LocationIcon,
  CityLabel,
  CountryLabel
};
