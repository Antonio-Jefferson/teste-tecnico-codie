import React from "react"
import {StyledHomeContainer, Title} from "./style"

export default function HomePage() {
    return (
      <StyledHomeContainer>
        <img src="/images/pokemon-hero.jpg" alt="image-pokemon-hero" />
        <Title>Cuidamos bem do seu pokémon, para ele cuidar bem de você</Title>
      </StyledHomeContainer>
    )
  }