module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "styled-components",
            {
                ssr: true,
                displayName: true,
            },
            "babel-plugin-inline-react-svg",
        ],
    ],
};
