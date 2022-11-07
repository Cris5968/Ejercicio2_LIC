import "./Instrucciones.css";
import Imagenes from "./Imagenes"
 
function Instrucciones(){
    return(<>
    <div className="instrucciones">
        <h1>Manual de Uso</h1>
        <h2>Vista general de la aplicación</h2>
        <p>La aplicación desarrollada es un conversor de divisas bastante versatil, permite al usuario la
            conversión entre distintas divisas de manera eficaz haciendo uso de una API que facilita obtener el valor en tiempo real de la moneda en cuestión.

        </p>
        <br/>
        <img src={Imagenes.menu}></img>
        <br/>
        <br/>
        <h2>Input monto</h2>
        <p>
            Las conversiones se realizan a través de un input el cual solo recibe valores numericos en caso, de recibir un valor incorrecto
            , se lanza una alerta que informa al usuario que ha ingresado un valor no válido.

        </p>
        <img src = {Imagenes.Input}></img>
        <p>En caso de obtener un valor no númerico o menor o igual que "0" se lanza la siguiente excepción: </p>
        <br/>
        <img src = {Imagenes.Valor_no}></img>
        <br/>
        <br/>
 
        <h2>Divisas</h2>
        <p>Abajo del recuadro desde donde se ingresa el monto, se encuentran los controles de las divisas, que permiten seleccionar las diferentes monedas disponibles.</p>
        <br/>
        <img src={Imagenes.Divisas}></img>
        <br/>
        <p>A su vez, en medio de las divisas, si se selecciona el botón de cambio, es posible cambiar el orden de conversión.</p>
        <br/>
        <img src={Imagenes.Swap}></img>
        <br/>
        <br/>
        <p>Si usted selecciona la misma divisa, se lanzará la siguiente excepción para indicar que debe seleccionar  diferentes monedas para realizar una conversión</p>
        <br/>
        <img src={Imagenes.Misma_divisa}></img>
        <br/>
        <br/>
        <p>La lista de divisas disponibles es la siguiente: 
        <br/>
        <br/>
        <li>"AUD": "Australian Dollar"</li>
        <li>"BGN": "Bulgarian Lev"</li>
        <li>"BRL": "Brazilian Real"</li>
        <li>"CAD": "Canadian Dollar"</li>
        <li>"CHF": "Swiss Franc"</li>
        <li>"CNY": "Chinese Renminbi Yuan"</li>
        <li>"CZK": "Czech Koruna"</li>
        <li> "DKK": "Danish Krone"</li>
        <li>"EUR": "Euro"</li>
        <li>"GBP": "British Pound"</li>
        <li>"HKD": "Hong Kong Dollar"</li>
        <li>"HRK": "Croatian Kuna"</li>
        <li>"HUF": "Hungarian Forint"</li>
        <li>"IDR": "Indonesian Rupiah"</li>
        <li>"ILS": "Israeli New Sheqel"</li>
        <li>"INR": "Indian Rupee"</li>
        <li>"ISK": "Icelandic Króna"</li>
        <li>"JPY": "Japanese Yen"</li>
        <li>"KRW": "South Korean Won"</li>
        <li>"MXN": "Mexican Peso"</li>
        <li>"MYR": "Malaysian Ringgit"</li>
        <li>"NOK": "Norwegian Krone"</li>
        <li>"NZD": "New Zealand Dollar"</li>
        <li>"PHP": "Philippine Peso"</li>
        <li>"PLN": "Polish Złoty"</li>
        <li>"RON": "Romanian Leu"</li>
        <li>"SEK": "Swedish Krona"</li>
        <li>"SGD": "Singapore Dollar"</li>
        <li>"THB": "Thai Baht"</li>
        <li>"TRY": "Turkish Lira"</li>
        <li>"USD": "United States Dollar"</li>
        <li>"ZAR": "South African Rand"</li>

        </p>

        <br/>
        
        <h2>Conversión de divisas</h2>
        <p>Posterior al ingreso del monto y a la selección de las divisas deseadas, el usuario deberá oprimir el botón realizar conversión para llevar
            a cabo el cambio entre monedas.
        </p>
        <br/>
        
        <img src={Imagenes.Boton}></img>
        <br/>
        <p>Luego de presionar el boton, el resultado se mostrará en la parte de abajo del formulario, por encima del botón "Realizar conversión", a su vez, la transacción será registrada en un historial de conversiones disponible debajo del formulario.</p>
        <br/>
        <img src={Imagenes.Conversion}></img>
        <br/>
        <br/>
        <p>El historial de conversiones se visualizará en la parte baja de la pantalla de la siguiente manera, conforme se vayan realizando conversiones, se van añadiendo entradas al historial: </p>
        <br/>
        <img src={Imagenes.Historial}></img>

        
    </div>
    </>)
}

export default Instrucciones;