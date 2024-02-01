import React from 'react';
import { Total } from "./style"
import { FieldErrors, FieldValues, UseFormSetValue } from 'react-hook-form';

interface TotaLProps {
    price: number,
    generationRate: number,
}

export default function SubmitButton({price, generationRate}: TotaLProps) {
    return (
        <Total>
            <div>Valor Total: R$ {(price + generationRate).toFixed(2)}</div>
            <button type='submit'>Concluir Agendamento</button>
        </Total>
    );
};