import React from "react";
import { MenuButton, MenuDiv } from "./styles";

interface Props {}

export default function MainMenu(props: Props): JSX.Element {
    return (
        <MenuDiv>
            <MenuButton>New Game</MenuButton>
        </MenuDiv>
    );
}
