import { Fragment, FunctionComponent } from 'react';
import { Button, For, Header, If } from 'src/presentation/components';

export interface HomePageProps { }

export const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <Fragment>
      <Header />
      <h1>Bienvenidos a la Web oficial de Kopatec SAC</h1>

    </Fragment>
  );
}
