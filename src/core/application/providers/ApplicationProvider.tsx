import { DomainProvider, ProviderComponent } from 'src/core/domain';

export const ApplicationProvider: ProviderComponent = ({ children }) => {
  return (
    <DomainProvider>
      {children}
    </DomainProvider>
  );
}
