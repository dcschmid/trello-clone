import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnnProps {
    text: string;
}

const Column = ({text, children}: React.PropsWithChildren<ColumnnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}

export default Column;