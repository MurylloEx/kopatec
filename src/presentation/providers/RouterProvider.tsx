import { HashRouter } from 'react-router-dom';
import { ProviderComponent } from 'src/core';

export const RouterProvider: ProviderComponent = ({ children }) => {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  );
}
