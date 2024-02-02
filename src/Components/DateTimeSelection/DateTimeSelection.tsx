import React, { ChangeEvent } from 'react';
import { Session } from './style';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FormData } from '../../@types/types';

interface DateTimeSelectionProps {
    register: UseFormRegister<FormData>; 
    handleDateChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    dates: string[]; 
    hours: string[];
    errors: FieldErrors<FormData> 
  }

export default function DateTimeSelection({ errors, register, handleDateChange, dates, hours }: DateTimeSelectionProps){
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
                    {errors.appointmentDate && (
                        <p>{errors.appointmentDate.message}</p>
                    )}
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
                    {errors.appointmentTime && (
                        <p>{errors.appointmentTime.message}</p>
                    )}
                </div>
            </div>
        </Session>
    )
}