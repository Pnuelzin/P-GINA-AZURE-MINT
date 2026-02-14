
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (history: ChatMessage[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Você é um consultor especialista em relógios de luxo para a "Azure & Mint Horology". 
        Nossas cores de marca são Azul Marinho (Navy Blue), Azul Claro (Light Blue) e Verde Menta (Mint Green). 
        Você ajuda os clientes a encontrar o relógio perfeito. 
        Seja profissional, elegante e conciso. Responda sempre em Português do Brasil.
        Se perguntado sobre relógios específicos, refira-se a: 
        1. Midnight Aviator (Marinho, $1250)
        2. Ethereal Sky (Azul Claro, $890)
        3. Mint Meridian (Menta, $1100)
        4. Cobalt Classic (Marinho, $1450)
        5. Arctic Frost (Azul Claro, $950)
        6. Verdant Horizon (Menta, $1320)
        Use formatação como listas quando apropriado.`,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "Peço desculpas, mas estou com dificuldades para acessar meu banco de dados no momento.";
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "Encontrei um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.";
  }
};
