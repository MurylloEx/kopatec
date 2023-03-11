import { RouterProvider } from './RouterProvider';
import { ProviderComponent } from 'src/core';
import { InfrastructureProvider } from 'src/infrastructure';
import { HashRoutes } from 'src/presentation/routes';

export const PresentationProvider: ProviderComponent = () => {
  return (
    <InfrastructureProvider>
      <RouterProvider>
        <HashRoutes />
      </RouterProvider>
    </InfrastructureProvider>
  );
}
