import React, {useEffect, useState} from 'react';
import './Conversor.css';

import DataTable from 'react-data-table-component';
let contador = 0;
const BASE_URL = 'api.frankfurter.app'
 function Conversor() {
  const [monedas, setMonedas] = useState([])
  let [moneda1, setMoneda1] = useState();
  let [moneda2, setMoneda2] = useState();
  const [mensaje,setMensaje] = useState()
  const [conversiones, setConversiones] = useState([]);


  const [monto, setMonto] = useState()
  
  const [resultado, setResultado] = useState()
  let country_code = {
    "AUD": "AU",
    "BGN": "BG",
    "BRL": "BR",
    "CAD": "CA",
    "CHF": "CH",
    "CNY": "CN",
    "CZK": "HR",
    "DKK": "DK",
    "EUR": "EU",
    "GBP": "UK",
    "HKD": "HK",
    "HRK": "HR",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "INR": "IN",
    "ISK": "IS",
    "JPY": "JP",
    "KRW": "KR",
    "MXN": "MX",
    "MYR": "MY",
    "NOK": "NO",
    "NZD": "NZ",
    "PHP": "PH",
    "PLN": "PL",
    "RON": "RO",
    "SEK": "SE",
    "SGD": "SG",
    "THB": "TH",
    "TRY": "TR",
    "USD": "US",
    "ZAR": "ZA"
   

}

const columnas = [{
  name: '#',
  selector: 'id'
},
{
  name: 'Conversion',
  selector: 'conversion'
}
]

let cadena1 = "https://countryflagsapi.com/png/"+country_code[moneda1]
let cadena2 = "https://countryflagsapi.com/png/"+country_code[moneda2]

  
  useEffect(() =>{
    fetch(`https://${BASE_URL}/currencies`)
    .then((res) => res.json())
    .then((data) => {
      const primeraMoneda = Object.keys(data)[8]
      const segundaMoneda = Object.keys(data)[30]
      setMonedas([...Object.keys(data)])
      setMoneda1(segundaMoneda)
      setMoneda2(primeraMoneda)
     
     
       

     

    
    })
   

  },
  
 
  
  [])

  const handleSwap = (e) => {
    const base = moneda1
    const convertir = moneda2
    e.preventDefault();
    setMoneda1(convertir)
    setMoneda2(base)


  }
  
  const handleConvert = () =>{
    if(monto > 0){
  if(moneda1 !== moneda2){
    
     
    contador = parseFloat(contador) + 1;
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${monto}&from=${moneda1}&to=${moneda2}`)
  .then(resp => resp.json())
  .then((data) => {
    setResultado(data.rates[moneda2])
    const mensaje1 = `${moneda1} ${monto} = ${moneda2} ${data.rates[moneda2]}`
  setMensaje(mensaje1)
  const nConversion = {
    id: contador,
    conversion: mensaje1

  }
  setConversiones([...conversiones,nConversion])
   

  
 
   
    
  });
 
  }
  else{
    alert("Seleccione dos diferentes divisas para realizar una conversión")
    
  }}
  else{
    alert("Ingrese un monto válido")
  }

}


  

  return (
    <>
     <div className='App' >
     
    <div class = "wrapper">
    
    <header>Convertidor de divisas</header>
    <form action = "#">
      <div class = "amount">
        <p>Ingresar monto</p>
         <input type="text" placeholder= "0.00" value={monto} onChange={((e) => setMonto (e.target.value))} />
         


      </div>
      <div class = "drop-list">
        <div class = "from">
          <p>De</p>
          <div class = "select-box">
            <img src= {cadena1} alt="flag"/>
            <select value = {moneda1} onChange = {(e) => setMoneda1(e.target.value)}>
    {monedas.map(moneda => (<option key = {moneda} value = {moneda} >{moneda}</option>) )}
    </select>
          </div>
        </div>
        <div class ="icon"><i class = "fas fa-exchange-alt" onClick={handleSwap }></i></div>
 
        <div class = "to">
          <p>A</p>
          <div class = "select-box">
            <img src= {cadena2} alt="flag"/>
            <select value = {moneda2} onChange = {(e) => setMoneda2(e.target.value)}  >
    {monedas.map(moneda => (<option key = {moneda} value = {moneda} >{moneda}</option>) )}
    </select>
          </div>
        </div>

      </div>

      <div class = "exchange-rate"><p id='Parrafo'>{mensaje}</p></div>
      <button onClick={handleConvert}>Realizar conversión</button>
  


    </form>
   
    

   


  </div>
  <div class = "historial">
    
    <DataTable
    columns={columnas}
    data = {conversiones}
    title = "Historial de conversiones"
    
    
    
    />
        </div>
        </div>
  
  </>
  
  );
}

export default Conversor;

