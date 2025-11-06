// normally file ka name .js hi rkho jb jsx return hora tbhi .jsx kro wrna .js hi shi hai
// jb bbhi hook use kro ya bna re ho to uske aage use lga do

import { useEffect, useState } from "react";

function UseCurrencyInfo(currency){
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())  //convert kr re string se json me
    .then((res) => setData(res[currency]))
    console.log(data);
  }, [currency])
  console.log(data);
  return data;
}

export default UseCurrencyInfo;