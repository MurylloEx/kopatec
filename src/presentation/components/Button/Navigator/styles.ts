import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`

`;

const Icon = styled(MdKeyboardArrowDown)`

`;


export const Styled = {
  Container,
  Label,
  Icon
};
