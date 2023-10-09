import { ReactComponentElement } from 'react';
import { CompoundComponent } from 'src/core';
import { AccordionProvider } from './Context';
import { AccordionItem } from './Item';
import { Styled } from './styles';

type AccordionItemType = typeof AccordionItem;
type AccordionItemChildren = ReactComponentElement<AccordionItemType>;

export interface AccordionCompound {
  Item: AccordionItemType;
}

export interface AccordionProps {
  children: AccordionItemChildren | AccordionItemChildren[];
}

export const Accordion: CompoundComponent<AccordionProps, AccordionCompound> = ({ children }) => {
  return (
    <AccordionProvider>
      <Styled.Container>
        {children}
      </Styled.Container>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
