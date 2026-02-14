
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types.ts";

// Inicialização segura - assume que a chave está em process.env injetado pelo ambiente
const getAI = () => {
    const apiKey = (typeof process !== 'undefined' && process.env.API_KEY) || '';
    return new GoogleGenAI({ apiKey });
};

export const getGeminiResponse = async (history: ChatMessage[], message: string) => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Você é um consultor especialista em relógios de luxo para a "Azure & Mint Horology". 
        Nossas cores de marca são Azul Marinho, Azul Claro e Verde Menta. 
        Você ajuda os clientes a encontrar o relógio perfeito. 
        Seja profissional, elegante e conciso. Responda sempre em Português do Brasil.`,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "Peço desculpas, mas não consegui processar sua resposta.";
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "Encontrei um erro ao processar sua solicitação.";
  }
};
