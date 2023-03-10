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

const LogoImage = styled.img``;

export const Styled = {
  Column,
  TopRow,
  BottomRow,
  LogoImage
};
