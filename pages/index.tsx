import React from "react";
import Head from "next/head";

interface Props {
    test: string;
}

export default function Home(props: Props): JSX.Element {
    return (
        <div>
            <Head>
                <title>Secretle</title>
            </Head>

            <main>
                <h1>Secretle</h1>
            </main>
        </div>
    );
}
