import { Fragment } from 'react';
import { CompoundComponent } from 'src/core';
import { ButtonLanguage } from './Language';
import { ButtonLocation } from './Location';

export interface ButtonCompound {
  Language: typeof ButtonLanguage;
  Location: typeof ButtonLocation;
}

export interface ButtonProps { }

export const Button: CompoundComponent<ButtonProps, ButtonCompound> = () => {
  return (
    <Fragment>

    </Fragment>
  );
}

Button.Language = ButtonLanguage;
Button.Location = ButtonLocation;
