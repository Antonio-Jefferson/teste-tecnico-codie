import React, { useEffect } from "react"
import { Title, StyledHomeContainer  } from "../styles/styleHome"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  useEffect(() => {
    toast.success('Bem-vindo à nossa página!');
  }, []);

  return (
    <StyledHomeContainer>
        <img src="/images/pokemon-hero.jpg" alt="image-pokemon-hero" />
        <Title>Cuidamos bem do seu pokémon, para ele cuidar bem de você</Title>
        <ToastContainer />
    </StyledHomeContainer>
  )
}
