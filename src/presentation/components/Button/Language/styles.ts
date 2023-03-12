import styled from 'styled-components';
import { VscGlobe } from 'react-icons/vsc';
import { MdArrowDropDown } from 'react-icons/md';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 48px;
  color: #9A9EA6;
`;

const GlobeIcon = styled(VscGlobe)`
  padding-right: 8px;
  font-size: 22px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`;

const ArrowDownIcon = styled(MdArrowDropDown)`
  padding-right: 8px;
  font-size: 22px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
`;


export const Styled = {
  Container,
  GlobeIcon,
  Label,
  ArrowDownIcon,
  LeftContainer,
  RightContainer
};
