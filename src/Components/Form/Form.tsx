import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, ContainerForm, Line, Total } from "./style";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup";
import { Region, City, Pokemon, FormData } from "../../@types/types";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import api from "../../services/consumer";
import calculateGenerationalRate from "../../utils/calculateGenerationalRate"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showErrorToast } from '../../utils/toastUtil';
import CardSuccessOrFailure from "../Cards/CardSuccessOrFailure";
import FormSessions from "../FormSessions/FormSessions"
import TeamRegistration from "../TeamRegistration/TeamRegistration"
import DateTimeSelection from "../DateTimeSelection/DateTimeSelection"
import PriceSummary from "../PriceSummary/PriceSummary"
import SubmitButton from "../SubmitButton/SubmitButton"


export default function Form(){
  const [region, setRegion] = useState<Region[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [hours, setHours] = useState<string[]>([]);
  const [team, setTeam] = useState([{ id: 1, pokemon: '' }]);
  const [generationRate, setGenerationRate] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [isAppointmentSuccessful, setIsAppointmentSuccessful] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  


    const schema = Yup.object().shape({
        firstName: Yup.string().required('Campo obrigatório'),
        lastName: Yup.string().required('Campo obrigatório'),
        region: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        pokemons: Yup.array().required('Campo obrigatório').min(1, 'Selecione pelo menos um Pokémon'),
        appointmentDate: Yup.string().required('Campo obrigatório'),
        appointmentTime: Yup.string().required('Campo obrigatório'),
    });

    const { handleSubmit, setValue, register, formState: { errors } } = useForm<FormData>({ 
      resolver: yupResolver(schema)
    });

      const fetchRegioes = async () => {
            try {
                const response = await api.getRegions();
                setRegion(response);
            } catch (error) {
                console.error('Erro ao buscar regiões:', error);
                showErrorToast('Erro ao buscar regiões')
            }
        };
    
      const fetchCities = async (regionUrl: string) => {
            try {
                const response = await api.getCities(regionUrl);
                setCities(response);
                fetchPokemons()
            
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
                showErrorToast('Erro ao buscar cidades')
            }
        };

      const fetchPokemons = async () => {
            try {
                const response = await api.getPokemons();
                setPokemons(response);
                fetchDates()
            } catch (error) {
                console.error('Erro ao buscar pokémons:', error);
                showErrorToast('Erro ao buscar pokémons');
            }
        };

      const handleAddPokemon = () => {
            if (team.length >= 6) {
              console.log('Você atingiu a capacidade máxima!');
              showErrorToast('Você atingiu a capacidade máxima!');
              return;
            }
        
            const newPokemon = {
              id: team.length + 1,
              pokemon: '',
            };
        
            setTeam([...team, newPokemon]);
            calculateGenerationalRate(team).then((res) => {
              setGenerationRate(res);
            });
        };

        const handlePokemonChange = (index: number, value: string) => {
            if (!value || index === undefined) return;
            setPrice((prevPrice) => (team.length + 1) * 70);
            setTeam((prevTeam) => {
              const updatedTeam = [...prevTeam];
              updatedTeam[index].pokemon = value;
              return updatedTeam;
            });
            
          };

      const fetchDates =async () => {
            try {
                const response = await api.getDates();
                setDates(response)
            } catch (error) {
                console.log('Erro ao buscar datas:', error)
                showErrorToast('Erro ao buscar datas')
            }
        };

      const fetchHours =async (dete: string) => {
            try {
                const response = await api.getTimes(dete);
                setHours(response)
            } catch (error) {
                console.log('Erro ao buscar horários:', error)
                showErrorToast('Erro ao buscar horários')
            }
        };

      const handleDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
            const selectedDate = event.target.value;
            fetchHours(selectedDate);
        };

     useEffect(() => {
        fetchRegioes();
      }, [isAppointmentSuccessful]);

      const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            await api.saveFormData(data).then((res) => {
            setIsAppointmentSuccessful((prev) => !prev);
            setMessage(`Seu agendamento para dia ${data.appointmentDate} às ${data.appointmentTime},
                        para ${data.pokemons.length} pokémons foi realizado com sucesso.`);
            setImg('../../check.svg');
            setTitle('Consulta Agendada');
            console.log("cheguei aqui...", res);
          });
    
        } catch (error) {
          console.log({error})
          setIsAppointmentSuccessful((prev) => !prev);
          setMessage("Houve um erro ao agendar. Tente novamente.");
          setImg('../../warning.svg');
          setTitle('Houve um problema no agendamento');
        }
      };

    return (
        <Container>
            {isAppointmentSuccessful ? (
                <ContainerForm>
                    <h1>Preencha o formulário abaixo para agendar sua consulta</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <FormSessions
                            register={register}
                            fetchCities={fetchCities}
                            errors={errors}
                            region={region}
                            cities={cities}
                        />
                        <TeamRegistration errors={errors}  register={register} team={team} handleAddPokemon={handleAddPokemon} handlePokemonChange={handlePokemonChange} pokemons={pokemons} />
                        <DateTimeSelection errors={errors} register={register} handleDateChange={handleDateChange} dates={dates} hours={hours} />
                        <Line/>
                        <PriceSummary teamLength={team.length} price={price} generationRate={generationRate} />
                        <SubmitButton  price={price} generationRate={generationRate} />
                    </form>
                </ContainerForm>  
            ): (
                <CardSuccessOrFailure message={message} img={img} title={title} setIsAppointmentSuccessful={setIsAppointmentSuccessful}/>
            )}
            <ToastContainer />
        </Container>
    )
}