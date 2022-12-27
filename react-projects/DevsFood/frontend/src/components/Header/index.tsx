import React, { useState } from "react"
import { Container, Logo, SearchInput } from "./styled"

type Props = {
    search: string;
    onSearch: (Search: string) => void;
}
export default ({search, onSearch}: Props) => {
    const [inputActive, setInputActive] = useState<boolean>(search == '' ? false : true);

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setInputActive(true);
    }

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setInputActive(false);
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value)
    }

    return(
        <Container>
            <Logo src="/src/assets/logo.png" />
            <SearchInput 
                type="text" 
                placeholder="Digite um produto" 
                active={inputActive}
                value={search}
                onChange={handleChange}
                onFocus={handleInputFocus} 
                onBlur={handleInputBlur} 
            />
        </Container>
    )
}