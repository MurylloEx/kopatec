import { Fragment } from 'react';
import { CompoundComponent } from 'src/core';
import { ButtonLanguage } from './Language';
import { ButtonLocation } from './Location';

export interface ButtonCompound {
  ButtonLanguage: typeof ButtonLanguage;
  ButtonLocation: typeof ButtonLocation;
}

export interface ButtonProps { }

export const Button: CompoundComponent<ButtonProps, ButtonCompound> = () => {
  return (
    <Fragment>

    </Fragment>
  );
}

Button.ButtonLanguage = ButtonLanguage;
Button.ButtonLocation = ButtonLocation;
