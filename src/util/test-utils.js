import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AppContextProvider, DeviceContextProvider } from '../context';

const AllTheProviders = ({ children }) => {
  return (
    <AppContextProvider>
      <Router>
        <DeviceContextProvider>{children}</DeviceContextProvider>
      </Router>
    </AppContextProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
