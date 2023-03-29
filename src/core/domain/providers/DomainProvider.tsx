import { Fragment } from 'react';
import { ProviderComponent } from 'src/core/domain/types';

export const DomainProvider: ProviderComponent = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
