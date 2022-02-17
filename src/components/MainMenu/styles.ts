import styled from "styled-components";

export const MenuDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 600px;
    border-radius: 20%;
    border: 1px solid black;
    background-color: ${(props) => props.theme.colors.tertiary};
`;

export const MenuButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 60px;
    border-radius: 10%;
    border: 1px solid black;
    border-radius: 20%;
    padding: 10px;
    margin: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
`;
