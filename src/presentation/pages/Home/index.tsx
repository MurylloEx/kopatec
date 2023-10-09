import { Fragment, FunctionComponent } from 'react';
import { Button, For, Header, If } from 'src/presentation/components';
import { Accordion } from 'src/presentation/components/Accordion';

export interface HomePageProps { }

export const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <Fragment>
      <Header />

      <Accordion>
        <Accordion.Item 
          active={true}
          title={'1) Titulo'}
          description={'Teste de contenido '.repeat(200)}
        />
        <Accordion.Item 
          active={false}
          title={'2) Titulo'}
          description={'Teste de contenido '.repeat(200)}
        />
        <Accordion.Item 
          active={false}
          title={'3) Titulo'}
          description={'Teste de contenido '.repeat(200)}
        />
        <Accordion.Item 
          active={false}
          title={'4) Titulo'}
          description={'Teste de contenido '.repeat(200)}
        />
      </Accordion>

    </Fragment>
  );
}
