import { Fragment, ReactElement, useCallback } from 'react';
import { CompoundComponent } from 'src/core';
import { IfElse } from './IfElse';
import { IfThen } from './IfThen';
import { IfElseIf } from './IfElseIf';

type IfThenType = typeof IfThen;
type IfElseType = typeof IfElse;
type IfElseIfType = typeof IfElseIf;

export type IfThenChildren = ReactElement<IfThenType>;
export type IfElseChildren = ReactElement<IfElseType>;
export type IfElseIfChildren = ReactElement<IfElseIfType>;
export type IfElseElseIfChildren = IfElseChildren | IfElseIfChildren;

export type IfThenElseChildren = [IfThenChildren, IfElseChildren];
export type IfThenElseElseIfChildren = [IfThenChildren, ...IfElseElseIfChildren[]];

export type IfChildren = 
  IfThenChildren | 
  IfElseChildren |
  IfThenElseChildren | 
  IfThenElseElseIfChildren;

export interface IfCompound {
  Then: IfThenType;
  Else: IfElseType;
  ElseIf: IfElseIfType;
}

export interface IfProps {
  value: boolean;
  children: IfChildren;
}

export const If: CompoundComponent<IfProps, IfCompound> = ({ children, value }) => {
  const hasMultipleFlows = Array.isArray(children);

  const getFlowResult = useCallback((desiredFlow: IfThenType | IfElseType | IfElseIfType) => {
    if (hasMultipleFlows) {
      const [thenFlow, ...elseFlows] = children;

      if ((desiredFlow === IfThen) && (thenFlow.type === IfThen)) {
        return thenFlow;
      }

      return elseFlows.reduce((accumulator: ReactElement | null, flow: IfElseElseIfChildren) => {
        if (accumulator) {
          return accumulator;
        }

        if (flow.type === desiredFlow) {
          return flow.type(flow.props);
        }
  
        return accumulator;
      }, null);
    }

    if ((desiredFlow === IfThen) && (children.type === IfThen)) {
      return children;
    }
    if ((desiredFlow === IfElse) && (children.type === IfElse)) {
      return children;
    }

    return <Fragment />;
  }, [hasMultipleFlows, children, value]);

  return value 
    ? getFlowResult(IfThen) 
    : getFlowResult(IfElseIf) 
    ?? getFlowResult(IfElse);
}

If.Then = IfThen;
If.Else = IfElse;
If.ElseIf = IfElseIf;

export * from './IfThen';
export * from './IfElse';
export * from './IfElseIf';
