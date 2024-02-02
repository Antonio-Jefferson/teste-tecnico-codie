import React, { ChangeEvent } from 'react';
import { Session } from "./style";
import { City, FormData, Region } from '../../@types/types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FormSessionsProps {
    register: UseFormRegister<FormData>,
    fetchCities: (regionUrl: string) => void,
    region: Region[],
    cities: City[],
    errors: FieldErrors<FormData>
  };

export default function FormSessions({ register, fetchCities, region, cities, errors}: FormSessionsProps){
 return(
    <>
        <Session>
            <div>
                <label>Nome</label>
                <input id="Nome"  {...register("firstName")} placeholder="Digite seu nome" />
                {errors.firstName && (
                    <p>{errors.firstName.message}</p>
                )}
            </div>
            <div>
                <label>Sobrenome</label>
                <input id='Sobrenome' {...register("lastName")} placeholder="Digite seu Sobrenome" />
                {errors.lastName && (
                    <p>{errors.lastName.message}</p>
                )}
            </div>
        </Session>
        <Session>
            <div>
                <label>Região</label>
                <select
                    id="region"
                    {...register("region", {
                        onChange: (e: ChangeEvent<HTMLSelectElement>) => {
                            fetchCities(e.target.value);
                        }
                    })}
                    >   
                    <option value="">Selecione uma região</option>
                    {region.map((region) => (
                        <option key={region.url} value={region.url}>
                            {region.name}
                        </option>
                    ))}
                </select>
                {errors.region && (
                    <p>{errors.region.message}</p>
                )}
            </div>
            <div>
                <label>Cidade</label>
                <select id="city" {...register("city")}>
                    <option value="">Selecione uma cidade</option>
                    {cities.map((city) => (
                    <option key={city.url} value={city.name}>
                        {city.name}
                    </option>
                    ))}
                </select>
                {errors.city && (
                    <span>{errors.city.message}</span>
                )}
            </div>
        </Session>
    </>
 )
}