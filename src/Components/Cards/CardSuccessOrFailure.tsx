import React from "react"
import { CardContainer, Container } from "./StyleCardSuccessOrFailure"

interface IMessage  {
    title: string,
    message: string,
    img: string
    setIsAppointmentSuccessful:  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardSuccessOrFailure({title, message, img, setIsAppointmentSuccessful}: IMessage){
    return(
        <Container>
            <CardContainer>
                <h2>{title}</h2>
                <img src={img} alt="check" />
                <p>{message}</p>
                <button onClick={() => setIsAppointmentSuccessful((prev) => !prev)}>Fazer Novo Agendamento</button>
            </CardContainer>
        </Container>
        
    )
}