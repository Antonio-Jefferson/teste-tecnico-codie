import React from 'react';
import { SessionRegisterTeam } from './style';
import { FormData, Pokemon } from '../../@types/types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface TeamRegistrationProps {
    register: UseFormRegister<FormData>,
    team: { id: number; pokemon: string }[],
    handleAddPokemon: () => void,
    handlePokemonChange: (index: number, value: string) => void,
    pokemons: Pokemon[]
    errors: FieldErrors<FormData>
  }

export default function TeamRegistration({errors, register, team, handleAddPokemon, handlePokemonChange, pokemons }: TeamRegistrationProps) {
    return(
        <SessionRegisterTeam>
            <h2>Cadastre seu time</h2>
            <p>Atendemos até 06 pokémons por vez</p>
            {team.map((pokemon, index) => (
                <div key={pokemon.id}>
                    <div>
                        <span>{`Pokémon ${index + 1}`}</span>
                        <select
                        value={pokemon.pokemon}
                        {...register(`pokemons[${index}].pokemon`)}
                        onChange={(e) => handlePokemonChange(index, e.target.value)}
                        >
                        <option value=""></option>
                        {pokemons.map((pokemon) => (
                            <option key={pokemon.url} value={pokemon.name}>
                            {pokemon.name}
                            </option>
                        ))}
                        </select>
                        {errors.pokemons && (
                            <p>{errors.pokemons.message}</p>
                        )}
                    </div>
                </div>
            ))}
            <button onClick={handleAddPokemon}>Adicionar novo pokémon ao time... +</button>
        </SessionRegisterTeam>
    )
}