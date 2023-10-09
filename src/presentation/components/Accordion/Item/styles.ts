import { MdKeyboardArrowUp, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #EBEBEB;
`;

const ActiveMark = styled.div`
  display: flex;
  height: 100%;
  width: 2px;
  background-color: #1EBE7E;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
  padding: 0 16px 0 0;
  user-select: none;
  cursor: pointer;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  height: 24px;
  width: 24px;
  background-color: #ffffff;
  border: 1px solid #D3D3D3;
  -webkit-box-shadow: 10px 15px 15px -13px rgba(0,0,0,0.1);
  -moz-box-shadow: 10px 15px 15px -13px rgba(0,0,0,0.1);
  box-shadow: 10px 15px 15px -13px rgba(0,0,0,0.1);
  cursor: pointer;
`;

const Title = styled.label`
  display: flex;
  padding: 0 0 0 16px;
  font-weight: bold;
  color: #252B42;
  margin-right: auto;
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 16px 16px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  text-align: justify;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  color: #737373;
`;

const ArrowUp = styled(MdKeyboardArrowUp)`

`;

export const Styled = {
  Container,
  ActiveMark,
  Header,
  Body,
  ArrowContainer,
  Title,
  Description,
  ArrowRight,
  ArrowUp
};
