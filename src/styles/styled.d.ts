import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            background: string;
            text: string;
            textInverted: string;
            border: string;

            correct: string;
            present: string;
            absent: string;
        };
    }
}
