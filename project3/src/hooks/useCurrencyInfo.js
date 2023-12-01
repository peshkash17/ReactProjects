import { useEffect, useState } from "react";

// custom hook start


function useCurrencyInfo(currency){
    const [Data,setData]=useState({})
useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then((res)=> res.json())
.then((res)=> setData(res[currency]))
console.log(Data);
},[currency,Data])
return Data;
}


export default useCurrencyInfo


// custom hook end