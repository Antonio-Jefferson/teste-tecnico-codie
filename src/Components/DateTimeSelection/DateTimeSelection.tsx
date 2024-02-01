import React, { ChangeEvent } from 'react';
import { Session } from './style';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface DateTimeSelectionProps {
    register: any; 
    handleDateChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    dates: string[]; 
    hours: string[]; 
  }

export default function DateTimeSelection({ register, handleDateChange, dates, hours }: DateTimeSelectionProps){
    return(
        <Session>
            <div>
                <div>
                    <label>Data para Atendimento</label>
                    <select id="date" {...register("appointmentDate")} onChange={handleDateChange}>
                    <option value="">Escolha uma data</option>
                    {dates.map((date, i: number) => (
                            <option key={i} value={date}>
                            {date }
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <label>Horário de Atendimento</label>
                    <select id="hour" {...register("appointmentTime")}>
                        <option value="">Escolha um horário</option>
                        {hours.map((hour, i) => (
                        <option key={i} value={hour}>
                            {hour}
                        </option>
                        ))}
                    </select> 
                </div>
            </div>
        </Session>
    )
}