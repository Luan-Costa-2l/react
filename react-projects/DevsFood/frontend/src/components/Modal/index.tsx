import React from "react";
import { Container, ModalBody } from "./styled";

type Props = {
    status: boolean;
    children: React.ReactNode;
    setStatus: (parameter: boolean) => void
}

export default ({ status, children, setStatus }: Props) => {
    const handleModalClick = (event: React.MouseEvent<HTMLElement>) => {
        if ((event.target as HTMLElement).classList.contains('modalBg')) {
            setStatus(false);
        }
    }

    return (
        <Container 
            className="modalBg"
            status={status} 
            onClick={handleModalClick}
        >
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}