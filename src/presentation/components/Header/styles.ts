import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 92px;
  border-bottom: 1px solid #DFDFE0;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 92px;
`;

const LogoImage = styled.img`
  width: 182px;
  height: 40px;
`;

const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const TopRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: right;
  align-items: center;
`;

export const Styled = {
  Column,
  TopRow,
  BottomRow,
  TopLeftContainer,
  TopRightContainer,
  LogoImage,
};
