import React from "react"
import { StyledHeaderNavegation, HeaderDetails } from "./style"

interface HeaderNavegationProps {
    page: string;
    title: string;
    description: string;
}

export default function HeaderNavegation ({ page, title, description }: HeaderNavegationProps){
    return(
        <StyledHeaderNavegation>
            <HeaderDetails>
                <p>Home {'>'} {page}</p>
                <h2>{title}</h2>
                <p>{description}</p>
            </HeaderDetails>
        </StyledHeaderNavegation>
    )
}