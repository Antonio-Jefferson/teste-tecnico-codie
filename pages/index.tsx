import React from "react"
import { Title, StyledHomeContainer  } from "../styles/styleHome"

export default function Home() {
  return (
    <StyledHomeContainer>
        <img src="/images/pokemon-hero.jpg" alt="image-pokemon-hero" />
        <Title>Cuidamos bem do seu pokémon, para ele cuidar bem de você</Title>
    </StyledHomeContainer>
  )
}
