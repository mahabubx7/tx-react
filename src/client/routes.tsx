// import and serialize the page components with lazy loading
// pages directory is: /src/client/pages

import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import { registry } from './registry';
import ErrorBoundary from './utils/error-boundary';

// Map router with suspense and lazy loading
export default function ClientRouter() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            {registry.map((Page, index) => (
              <Route
                key={index}
                path={Page.path}
                element={
                  Page.layout ? (
                    <Page.layout>
                      <Page.component />
                    </Page.layout>
                  ) : (
                    <DefaultLayout>
                      <Page.component />
                    </DefaultLayout>
                  )
                }
              />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
