import React, { ChangeEvent } from 'react';
import { Session } from "./style";
import { City, Region } from '../../@types/types';
import { UseFormRegister } from 'react-hook-form';

interface FormSessionsProps {
    register: any,
    fetchCities: (regionUrl: string) => void,
    region: Region[],
    cities: City[],
  };

export default function FormSessions({ register, fetchCities, region, cities}: FormSessionsProps){
 return(
    <>
        <Session>
            <div>
                <label>Nome</label>
                <input id="Nome"  {...register("firstName")} placeholder="Digite seu nome" />
            </div>
            <div>
                <label>Sobrenome</label>
                <input id='Sobrenome' {...register("lastName")} placeholder="Digite seu Sobrenome" />
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
            </div>
        </Session>
    </>
 )
}