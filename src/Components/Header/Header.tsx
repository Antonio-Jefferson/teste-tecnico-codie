import React, { useEffect, useState } from "react"
import * as S from "./style"
import Link from "next/link"

export default function Header() {
    const [aniamtion, setAnimation] = useState<string>("ReducerdLogo")

    useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation("ExpandedLogo");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    return(
       <S.Header>
            <S.LogoContainer>
                <Link href={"/"}>
                    <S.ReducedLogo className={aniamtion}>
                        <img src="/images/white-pokeball.svg" alt="Logo" />
                    </S.ReducedLogo> 
                    <S.LogoText className="logo-text">Centro Pokémon</S.LogoText>
                </Link>
            </S.LogoContainer>
            <S.RightContainer>
                <Link href="/about">
                    <p>Quem Somos</p>
                </Link>
                <Link href={"/query"}>
                    <div>Agendar Consulta</div>
                </Link>
            </S.RightContainer>
       </S.Header>
    )
}