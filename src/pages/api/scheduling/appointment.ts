import type { NextApiRequest, NextApiResponse } from 'next'
import {FormData} from "../../../@types/types"

const availableTimes: string[] = [
    "10:00:00", "10:30:00", "11:00:00", "11:30:00", "13:00:00",
    "16:00:00", "16:30:00", "17:00:00", "17:30:00", "18:00:00"
  ];
  
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    if (req.method !== 'POST') {
      res.status(405).end();
      return;
    }
  
    try {
      const formData: FormData = req.body;
  
      const requiredFields = ['firstName', 'lastName', 'region', 'city', 'pokemons', 'appointmentDate', 'appointmentTime'];
      if (!requiredFields.every(field => field in formData)) {
        res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
        return;
      }
  
      if (!availableTimes.includes(formData.appointmentTime)) {
        res.status(400).json({ success: false, message: 'O horário solicitado não está disponível.' });
        return;
      }
  
      res.status(200).json({ success: true, message: 'Dados salvos com sucesso.' });
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      res.status(500).json({ success: false, message: 'Erro ao processar a requisição.' });
    }
  }