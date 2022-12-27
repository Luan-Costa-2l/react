import styled from "styled-components";

type Props = {
    active: boolean;
}

export const LinkArea = styled.div<Props>`
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background-color: ${Props => Props.active ? '#0B4D0B' : 'transparent'};
        border-radius: 10px;
    
    }
`;

export const LinkIcon = styled.img`
    width: 34px;
    height: auto;
`;