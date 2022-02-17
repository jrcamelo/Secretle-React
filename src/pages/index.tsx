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
                <div className="title-div">
                    <h1 className="title-text">Secretle</h1>
                </div>
            </main>
        </div>
    );
}
