import { FunctionComponent } from 'react';
import { If } from 'src/presentation/components/If';
import { Styled } from './styles';

export interface AccordionItemProps {
  title: string;
  description: string;
  active: boolean;
}

export const AccordionItem: FunctionComponent<AccordionItemProps> = (props) => {
  const isActive = props.active;

  return (
    <Styled.Container>

      <Styled.Header>
        <If value={isActive}>
          <If.Then>
            <Styled.ActiveMark>
            </Styled.ActiveMark>
          </If.Then>
        </If>

        <Styled.Title>
          {props.title}
        </Styled.Title>

        <Styled.ArrowContainer>
          <If value={isActive}>
            <If.Then>
              <Styled.ArrowUp />
            </If.Then>
            <If.Else>
              <Styled.ArrowRight />
            </If.Else>
          </If>
        </Styled.ArrowContainer>
      </Styled.Header>
    
      <If value={isActive}>
        <If.Then>
          <Styled.Body>
            <Styled.Description>
              {props.description}
            </Styled.Description>
          </Styled.Body>
        </If.Then>
      </If>

    </Styled.Container>
  );
}
