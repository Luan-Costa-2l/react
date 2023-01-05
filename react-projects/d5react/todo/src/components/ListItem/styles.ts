import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps) => (
    `
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgba(255, 255, 255, .1); /* #20212C */
    border-radius: 10px;
    margin-bottom: 10px;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
        flex: 1;
    }

    .deleteIcon {
        cursor: pointer;
    }
`
));
