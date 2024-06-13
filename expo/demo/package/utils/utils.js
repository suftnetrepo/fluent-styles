import { Platform } from "react-native"
import { theme } from "../theme"
import React from "react";

const shadow = {
    light: Platform.select({
        ios: {
            shadowColor: theme.colors.gray[900],
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        },
        android: {
            elevation : 1
        },
    }),
    lightMedium: Platform.select({
        ios: {
            shadowColor: theme.colors.gray[900],
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.24,
            shadowRadius: 2.84,
        },
        android: {
            elevation: 3,
        },
    }),
    medium: Platform.select({
        ios: {
            shadowColor: theme.colors.gray[900],
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
        },
        android: {
            elevation: 7,
        },
    }),
    mediumDark: Platform.select({
        ios: {
            shadowColor: theme.colors.gray[900],
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
        },
        android: {
            elevation: 10,
        },
    }),
    dark: Platform.select({
        ios: {
            shadowColor: theme.colors.gray[900],
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
        },
        android: {
            elevation: 14,
        },
    }),
    veryDark: Platform.select({
        ios: {
            shadowColor: theme.colors.gray[900],
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.5,
            shadowRadius: 13.34,
        },
        android: {
            elevation: 20,
        },
    }),
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export { shadow, ErrorBoundary }