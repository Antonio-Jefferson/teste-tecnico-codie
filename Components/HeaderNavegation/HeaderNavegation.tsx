import React from "react"
import { StyledHeaderNavegation, HeaderDetails } from "./style"

export default function HeaderNavegation(){
    return(
        <StyledHeaderNavegation>
            <HeaderDetails>
                <p>Home {'>'} Quem Somos</p>
                <h2>Quem Somos</h2>
                <p>A maior rede de tratamento pokémon.</p>
            </HeaderDetails>
        </StyledHeaderNavegation>
    )
}