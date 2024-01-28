import React from "react"
import * as S from "./style"
import Link from "next/link"

export default function Header() {
    return(
       <S.Header>
            <S.LogoContainer>
                <Link href={"/"}>
                    <S.ReducedLogo className="ExpandedLogo">
                        <img src="/images/white-pokeball.svg" alt="Logo" />
                    </S.ReducedLogo> 
                    <S.LogoText className="logo-text">Centro Pokémon</S.LogoText>
                </Link>
            </S.LogoContainer>
            <S.RightContainer>
                <Link href="/about">
                    <p>Quem Somos</p>
                </Link>
                <div>Agendar Consulta</div>
            </S.RightContainer>
       </S.Header>
    )
}