import React from 'react'

const Exchange = ({ rate, fromCurrency, toCurrency }) => {

  const fromCurrencyStr = String(fromCurrency);
  const rateStr = Number(rate).toFixed(2);
  const toCurrencyStr = String(toCurrency);
  return (
    <div className="p-10 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] rounded-lg flex flex-wrap justify-center gap-5 [&>*]:w-[8rem] [&>*]:h-[8rem] [&>*]:rounded-md [&>*]:bg-purple-7 [&>*:hover]:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]" style={{ padding: '25px' }}>

      1 {fromCurrencyStr} = {rateStr} {toCurrencyStr}

    </div>

  )
}

export default Exchange