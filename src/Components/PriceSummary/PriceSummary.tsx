import React from 'react';
import { FullPriceSession, Prices } from './style';

interface PriceSummaryProps {
    teamLength: number,
    price: number,
    generationRate: number
  }

export default function PriceSummary ({ teamLength, price, generationRate }: PriceSummaryProps) {
    return (
        <FullPriceSession>
            <Prices>
                <div>
                    <p>Número de pokémons a serem atendidos:</p>
                    <p>0{teamLength}</p>
                </div>
                <div>
                    <p>Atendimento unitário por pokémon: </p>
                    <p>R$ {price.toFixed(2)}</p>
                </div>
                <div>
                    <p>Subtotal:</p>
                    <p>R$ {price.toFixed(2)}</p>
                </div>
                <div>
                    <p>Taxa geracional*: </p>
                    <p>R$ {generationRate}</p>
                </div>
            </Prices>
        </FullPriceSession>
    );
  };