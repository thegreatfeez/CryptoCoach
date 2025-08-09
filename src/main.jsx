import React from "react";
import CryptoList from './components/CryptoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CryptoAdvice from "./components/CryptoAdvice";
import { getCryptoAdvice } from "./api/api";

export default function Main(){
    const [cryptoAsset, setCryptoAsset] = React.useState([])
    const [aiAdivice, setAiAdvice] = React.useState("")
    
    function addCrypto(formData){
        const symbol = formData.get("Cryptocurrency")
        const amount = formData.get("Amount")
        if (symbol && amount) {
            const newCryptoAsset = {
                symbol: symbol.toUpperCase(),
                amount: parseFloat(amount)
            }
            setCryptoAsset(previousCryptoAsset => {
               const alreadyExist =  previousCryptoAsset.some(item => item.symbol === symbol);
               if(alreadyExist){
                alert(`${symbol} already in the list`);
                return previousCryptoAsset;
               }
                return [...previousCryptoAsset, newCryptoAsset]})
        }
    }
    function deleteBtn(indexToRemove){
        setCryptoAsset(prevsAsset => 
            prevsAsset.filter((_,index) => index !== indexToRemove)
        )
    }

    async function getAIAdvice(){
        const adviceResult = await getCryptoAdvice(cryptoAsset)
        setAiAdvice(adviceResult)
    }
   

    return(
        <main className="p-6">
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Add Cryptocurrency
                </h2>
                <form action={addCrypto} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                            type="text"
                            placeholder="e.g. BTC, ETH, ADA"
                            aria-label="Add Crypto"
                            name="Cryptocurrency"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        />
                        <input
                            type="number"
                            step="0.000001"
                            placeholder="Amount"
                            aria-label="Amount"
                            name="Amount"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        />
                        <button 
                            type="submit"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Add
                        </button>
                    </div>
                </form>
            </div>
            {cryptoAsset.length > 0 &&  
            <CryptoList
            cryptoCurrencies = {cryptoAsset}
            delete = {deleteBtn}
            getAdvice = {getAIAdvice}
            />}

            {aiAdivice && 
            <CryptoAdvice
            advice ={aiAdivice}
            />
            }
           
        </main>
    )
}
