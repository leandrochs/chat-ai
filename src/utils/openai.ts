import { ChatMessage } from "@/types/ChatMessage";
import OpenAI from "openai";

const api = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const openai = {
  generate: async (messages: any[]) => {
    try {
      const response = await api.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.7, // vai de 0 até 2 (ele dá o que voce pede + contexto - pendendo para o aleatório)
        messages,
      });

      return response.choices[0]?.message?.content;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  },
  translateMessages: (messages: ChatMessage[]) => {
    const reqMessages: any[] = [];

    for (let i in messages) {
      reqMessages.push({
        role: messages[i].author === "me" ? "user" : "assistant",
        content: messages[i].body,
      });
    }

    return reqMessages;
  },
};
