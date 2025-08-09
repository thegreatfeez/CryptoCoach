
export default function CryptoList(props){
const listOfCryptoAsset = props.cryptoCurrencies.map((cryptoCurrency, index) => 
 <li key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 mb-3">
        <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">₿</span>
            </div>
            <div>
                <div className="font-semibold text-gray-800 text-lg">{cryptoCurrency.symbol}</div>
                <div className="text-sm text-gray-600">{cryptoCurrency.amount.toLocaleString()} {cryptoCurrency.symbol}</div>
            </div>
        </div>
        <div className="text-right">
            <button onClick ={() => props.delete(index)} className="text-red-500 font-medium hover:text-red-700 cursor-pointer">Delete</button>
        </div>
    </li>
)
console.log(listOfCryptoAsset)
return (
    <section className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Cryptocurrencies</h2>
            <ul className="space-y-3" aria-live="polite">{listOfCryptoAsset}</ul>

            {listOfCryptoAsset.length > 3 &&
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl shadow-sm border border-blue-200">
  <div>
    <h3 className="text-lg font-semibold text-indigo-700">Ready for advice?</h3>
    <p className="text-sm text-gray-600">
      Generate portfolio advice for your selected cryptocurrencies.
    </p>
  </div>
  
  <button
    onClick={props.getAdvice}
    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
  >
    Get Advice
  </button>
</div>
    }
    </section>
    )
    
}