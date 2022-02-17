import React from "react";
import Head from "next/head";
import MainMenu from "../components/MainMenu";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import darkTheme from "../styles/darkTheme";

interface Props {}

export default function Home(props: Props): JSX.Element {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <GlobalStyle />
                <Head>
                    <title>Secretle</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <MainMenu />
                </main>
            </div>
        </ThemeProvider>
    );
}
