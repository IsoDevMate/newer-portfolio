import React, { Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }
    static getDerivedStateFromError(_) {
        // Update state to render fallback UI
        return { hasError: true, error: null, errorInfo: null };
    }
    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service
        console.error("ErrorBoundary caught an error", error, errorInfo);
        this.setState({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            // Customize your fallback UI
            return (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h1 style={{ color: '#ff6f61' }}>Oops! Something went wrong.</h1>
                    <p style={{ fontSize: '18px', color: '#333' }}>We're sorry for the inconvenience. Please try again later.</p>
                    <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px', color: '#666' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>
            );
        }
        // Render children if no error
        return this.props.children;
    }
}
export default ErrorBoundary;
