// import React ,{useId} from 'react'


// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   OnCurrencyChange,
//   currencyOptions = [],
//   selectCurrency = "",
//   amountDisable = false,
//   currencyDisable = false,
//   className = "",
// }) {
 
// const amountInputId = useId()
//   return (
//       <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
//           <div className="w-1/2">
//               <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//                  {label}
//               </label>
//               <input
//                   id={amountInputId}
//                   className="outline-none w-full bg-transparent py-1.5"
//                   type="number"
//                   placeholder="Amount"
//                   disabled={amountDisable}
//                   value={amount}
//                   onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//               />
//           </div>
//           <div className="w-1/2 flex flex-wrap justify-end text-right">
//               <p className="text-black/40 mb-2 w-full">Currency Type</p>
//               <select
//                   className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                   value={selectCurrency}
//                   onChange={(e)=> OnCurrencyChange && OnCurrencyChange(e.target.value)}
//                   disabled={currencyDisable}
//               >
//                    {currencyOptions.map((currency) => (
//                             <option key={currency} value={currency}>
//                             {currency}
//                             </option>
//                         ))}
              
//               </select>
//           </div>
//       </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { useId } from 'react'; // Assuming you're using react-use for useId

function InputBox({
  label,
  amount,
  onAmountChange,
  OnCurrencyChange,
  currencyOptions = [],
  amountDisable = false,  
  currencyDisable = false,
  className = "",
  selectCurrency: initialCurrency = "", // Use initialCurrency as default parameter
}) {
  const [selectCurrency, setSelectCurrency] = useState(initialCurrency); // Initialize selectCurrency state
  const amountInputId = useId();

  // Update selectCurrency when initialCurrency changes
  useEffect(() => {
    setSelectCurrency(initialCurrency);
  }, [initialCurrency]);

  // Function to handle currency change
  const handleCurrencyChange = (currency) => {
    setSelectCurrency(currency);
    OnCurrencyChange && OnCurrencyChange(currency);

    // Add additional logic here if you need to update currencyOptions dynamically
  };

  return (
    <div className={`bg-white p-6 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          min={"0"}
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => handleCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;


