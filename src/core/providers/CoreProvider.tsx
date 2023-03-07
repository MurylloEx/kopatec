import { ProviderComponent } from 'src/core/domain';
import { ApplicationProvider } from 'src/core/application';

export const CoreProvider: ProviderComponent = ({ children }) => {
  return (
    <ApplicationProvider>
      {children}
    </ApplicationProvider>
  );
}
