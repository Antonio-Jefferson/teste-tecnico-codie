import React from "react"
import * as S from "./style"

export default function Header() {
    return(
       <S.Header>
            <S.LogoContainer>
                <S.ReducedLogo className="ExpandedLogo">
                    <img src="/images/white-pokeball.svg" alt="Logo" />
                </S.ReducedLogo> 
                <S.LogoText className="logo-text">Centro Pokémon</S.LogoText>
            </S.LogoContainer>
            <S.RightContainer>
                <p>Quem Somos</p>
                <div>Agendar Consulta</div>
            </S.RightContainer>
       </S.Header>
    )
}