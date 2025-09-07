// src/components/ErrorBoundary/ErrorBoundary.jsx
import React, { Component } from 'react';
import './ErrorBoundary.css';
import Button from '../Button/Button';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
          <Button 
            variant="primary"
            onClick={this.handleReload}
          >
            Reload Page
          </Button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;