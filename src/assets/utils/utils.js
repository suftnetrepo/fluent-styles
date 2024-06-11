import { Platform } from "react-native"
import { theme } from "../theme"

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

export { shadow }