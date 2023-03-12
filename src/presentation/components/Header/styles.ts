import styled from 'styled-components';
import { Button } from 'src/presentation/components/Button';

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

const Language = styled(Button.Language)`
  margin-right: 6px;
`;

const Location = styled(Button.Location)`
  margin-left: 6px;
`;

export const Styled = {
  Column,
  TopRow,
  BottomRow,
  TopLeftContainer,
  TopRightContainer,
  LogoImage,
  Language,
  Location,
};
