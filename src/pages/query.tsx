import React from "react"
import HeaderNavegation from "../Components/HeaderNavegation/HeaderNavegation"
import Form from "../Components/Form/Form"

export default function QueryPage(){
    return (
        <>
            <HeaderNavegation page="Agendar Consulta" title="Agendar Consulta" description="Recupere seus pokémons em 5 segundos."/>
            <Form/>
        </>
    )
}