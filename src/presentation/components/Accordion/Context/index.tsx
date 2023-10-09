import { createContext, useState } from 'react';
import { ProviderComponent } from 'src/core';

export type AccordionState = {
  activeIndex: number;
};

export type AccordionSetter = (value: AccordionState) => void;
export type AccordionProviderValue = [AccordionState, AccordionSetter];

const AccordionDefaultState: AccordionState = {
  activeIndex: -1,
}

const ProviderDefaultState: AccordionProviderValue = [AccordionDefaultState, () => {}];

export const AccordionContext = createContext<AccordionProviderValue>(ProviderDefaultState);

export const AccordionProvider: ProviderComponent = ({ children }) => {
  const [accordion, setAccordion] = useState(AccordionDefaultState);
  
  return (
    <AccordionContext.Provider value={[accordion, setAccordion]}>
      {children}
    </AccordionContext.Provider>
  );
}
