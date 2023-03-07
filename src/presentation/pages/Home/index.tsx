import { Fragment, FunctionComponent } from 'react';

export interface HomePageProps { }

export const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <Fragment>
      <h1>Bienvenidos a la Web oficial de Kopatec SAC</h1>
    </Fragment>
  );
}
