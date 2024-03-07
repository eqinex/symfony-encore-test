import { createTheme } from "@mui/material/styles";

/**
 * Получение значения CSS переменной.
 *
 * @param variableName Имя CSS переменной.
 *
 * @returns Значение CSS переменной.
 */
const getCssVariableValue = (variableName: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

/**
 * Создание/Настройка темы. Используется для глобального переопределения MUI компонентов.
 */
const theme = createTheme({
    palette: {
        primary: {
            main: getCssVariableValue('--text-primary'),
        },
        secondary: {
            main: getCssVariableValue('--text-secondary'),
        },
        info: {
            main: getCssVariableValue('--text-tertiary'),
        },
        background: {
            default: getCssVariableValue('--background-primary'),
        },
    },
    typography: {
        fontFamily: getCssVariableValue('--desktop-caption-2'),
        fontSize: 18,
        h1: {
            fontSize: getCssVariableValue('--font-size-h1'),
            lineHeight: getCssVariableValue('--line-height-80'),
        },
        h2: {
            fontSize: getCssVariableValue('--font-size-h2'),
            lineHeight: getCssVariableValue('--line-height-80'),
        },
        h3: {
            fontSize: getCssVariableValue('--font-size-h3'),
            lineHeight: getCssVariableValue('--line-height-20'),
        },
        h4: {
            fontSize: getCssVariableValue('--font-size-h4'),
            lineHeight: getCssVariableValue('--line-height-24'),
        },
        h5: {
            fontSize: getCssVariableValue('--font-size-h5'),
            lineHeight: getCssVariableValue('--line-height-20'),
            fontFamily: getCssVariableValue('--desktop-caption-1'),
        },
        subtitle1: {
            fontFamily: getCssVariableValue('--desktop-caption-1'),
            fontSize: getCssVariableValue('--font-size-subtitle1'),
            lineHeight: getCssVariableValue('--line-height-20'),
        },
        subtitle2: {
            fontSize: getCssVariableValue('--font-size-subtitle2'),
            lineHeight: getCssVariableValue('--line-height-20'),
        },
        body1: {
            fontSize: getCssVariableValue('--font-size-body1'),
            lineHeight: getCssVariableValue('--line-height-24'),
        },
        body2: {
            fontSize: getCssVariableValue('--font-size-body2'),
            lineHeight: getCssVariableValue('--line-height-20'),
        },
        caption: {
            fontSize: getCssVariableValue('--font-size-caption'),
            fontFamily: getCssVariableValue('--font-europecondensedc'),
            lineHeight: getCssVariableValue('--line-height-16'),
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: '20px',
                    margin: 0,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    maxWidth: '100%',
                    backgroundColor: getCssVariableValue('--background-primary'),
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                },
                indicator: {
                    height: '1px',
                }
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: getCssVariableValue('--text-secondary'),
                    padding: '12px',
                    height: '32px',
                    minHeight: 0,
                },
            },
        }
    },
});

export default theme;
