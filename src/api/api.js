const SYSTEM_PROMPT = `
You are an AI crypto portfolio advisor.
You receive a list of cryptocurrencies from the user and provide investment advice based on current market trends.
Recommend allocations, potential risks, and any notable news.
Keep your response concise, clear, and beginner-friendly.
`

import { HfInference } from '@huggingface/inference'

const API_KEY = import.meta.env.VITE_API_KEY
const hf = new HfInference(API_KEY)

export async function getCryptoAdvice(cryptoArr) {
    const cryptoList = cryptoArr.map(crypto => `${crypto.symbol}: ${crypto.amount}`).join(", ")
    
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `My portfolio contains ${cryptoList}. Please give me portfolio advice and risk assessment.` }
            ],
            max_tokens: 1024,
            temperature: 0.7
        })

        return response.choices[0].message.content
    } catch (err) {
        console.error("Error fetching crypto advice:", err.message)
        return "Sorry, I couldn't fetch advice at the moment. Please try again later."
    }
}
