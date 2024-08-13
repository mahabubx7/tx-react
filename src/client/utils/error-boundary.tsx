// Error Boundary Component for React v18
// full custom error boundary component for React v18
// no need to use the ErrorBoundary component from react-error-boundary

import ErrorPage from '@client/layouts/error';
import { Component, ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true, error: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error });

    // ignore the error for production-mode
    if (
      !['production', 'prod'].includes(process.env.NODE_ENV! || 'developement')
    ) {
      console.error('Uncaught error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage>
          <h1>{this.state.error?.message || 'Something went wrong!'}</h1>
        </ErrorPage>
      );
    }

    return this.props.children;
  }
}
