"use client";

import React from "react";
import { motion } from "framer-motion";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 text-6xl">⚠️</div>
      <h2 className="text-2xl font-bold text-white mb-4">
        Something went wrong
      </h2>
      <p className="text-slate-300 mb-6 max-w-md">
        We encountered an unexpected error. Don&apos;t worry, this has been
        logged and we&apos;re working on a fix.
      </p>

      {process.env.NODE_ENV === "development" && (
        <details className="mb-6 p-4 bg-slate-800 rounded-lg text-left max-w-2xl">
          <summary className="cursor-pointer text-red-400 font-medium mb-2">
            Error Details (Development Only)
          </summary>
          <pre className="text-xs text-slate-300 whitespace-pre-wrap overflow-auto">
            {error.message}
            {error.stack && `\n\n${error.stack}`}
          </pre>
        </details>
      )}

      <div className="flex gap-4">
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-400 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 border border-slate-600 text-slate-300 rounded-full font-medium hover:bg-slate-800 transition-colors"
        >
          Go Home
        </button>
      </div>
    </motion.div>
  );
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);

    // In production, you would send this to an error reporting service
    if (process.env.NODE_ENV === "production") {
      // Example: Sentry, LogRocket, etc.
      // captureException(error, { extra: errorInfo });
    }
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetErrorBoundary={this.resetErrorBoundary}
        />
      );
    }

    return this.props.children;
  }
}

// Hook version for function components
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>
) {
  function WrappedComponent(props: P) {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  }

  WrappedComponent.displayName = `withErrorBoundary(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
}
