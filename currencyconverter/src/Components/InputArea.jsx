import React, { useEffect, useRef, useState } from 'react'
import { countryList } from '../codes.js';
import Exchange from './Exchange.jsx';

const InputArea = () => {
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const[amount, setamount] = useState('');
  // const[toAmount, setToAmount] = useState(0);
  const [rate, setRate] = useState({});
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleFromChange = (event) => {
    setFromCurrency(event.target.value);
  };
  const handleToChange = (event) => {
    setToCurrency(event.target.value);
  };

  useEffect(()=>{
    const conveter = async () => {
      let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
      let data = await response.json();
      setRate(data[fromCurrency][toCurrency]);
    }
    conveter();
  }, [fromCurrency,toCurrency]);

  useEffect(() => {
    if(amount > 0){
      setConvertedAmount(rate*amount);
    }
    else{
      setConvertedAmount(0);
    }
  }, [amount, toCurrency, rate]);

  return (
    <div className='w-full max-w-[450px] mx-auto my-10 px-5'>
      <h1 className='text-2xl mb-2'>Enter Amount to convert</h1>
      <div className='bg-[#e6e9f3] text-black flex justify-evenly items-center py-2 px-4 rounded-xl shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] my-10'>
        <label htmlFor="fromAmout" className='w-full'>
          <p>From</p>
          <input type="number" placeholder='Enter Amount' id="fromAmout" className='w-full h-10 bg-transparent outline-none' onChange={(e) => setamount(e.target.value)} value={amount}/>
        </label>
        <select id='fromSelect' className='h-10 mt-6 bg-transparent outline-none' value={fromCurrency} onChange={handleFromChange}>
           {Object.entries(countryList).map(([currencyCode]) => (
                    <option key={currencyCode} value={currencyCode.toLowerCase()}>
                        {`${currencyCode.toUpperCase()}`}
                    </option>
                ))}
        </select>
      </div>

      <div className='bg-[#e6e9f3] text-black flex justify-evenly items-center py-2 px-4 rounded-xl shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] mb-10'>
        <label htmlFor="toAmount" className='w-full'>
          <p>To</p>
          <input type="text" placeholder='Amount' id="toAmount" className='w-full h-10 bg-transparent outline-none' disabled value={convertedAmount ? `${convertedAmount}` : '0'}/>
        </label>
        <select id='toSelect' className='h-10 mt-6 bg-transparent outline-none' value={toCurrency} onChange={handleToChange}>
           {Object.entries(countryList).map(([currencyCode]) => (
                    <option key={currencyCode} value={currencyCode.toLowerCase()}>
                        {`${currencyCode.toUpperCase()}`}
                    </option>
                ))}
        </select>
      </div>
      
      <Exchange rate={rate} fromCurrency={fromCurrency.toUpperCase()} toCurrency={toCurrency.toUpperCase()}/>
    </div>
  )
}

export default InputArea
