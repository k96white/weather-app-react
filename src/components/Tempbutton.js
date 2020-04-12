import React from 'react'

function Tempbutton(props) {
    const {temp,setCelTemp,setFarTemp,setTemp,setSymbol,
           minTemp,setMinTemp,setMinCelTemp,setMinFarTemp,
           maxTemp,setMaxTemp,setMaxCelTemp,setMaxFarTemp} = props;

    function kelToCelConverter(temperature){
            return (temperature-273.15);
    }
    
    function kelToFarConverter(temperature){
            return((temperature - 273.15) * (9/5) + 32)
    }


    const setCelcius = () =>{
        
        const cel = kelToCelConverter(temp);
        setCelTemp(cel);
        setSymbol('°C');

        //to set min temperature in celcius
        const minCel = kelToCelConverter(minTemp);
        setMinCelTemp(minCel);

        //to set max temperature in celcius
        const maxCel = kelToCelConverter(maxTemp);
        setMaxCelTemp(maxCel);
        
    }
    const setFarenheit = () =>{
        const far = kelToFarConverter(temp);
        setFarTemp(far);
        setSymbol('°F');

        // to set min temperature in farenheit
        const minFar = kelToFarConverter(minTemp);
        setMinFarTemp(minFar);

          //to set max temperature in farenheit
        const maxFar = kelToFarConverter(maxTemp);
        setMaxFarTemp(maxFar);
        
        
    }   

    const setKelvin =() =>{
        setTemp(temp);
        setSymbol('K');

        // to set min temp in kelvin
        setMinTemp(minTemp);

        //to set max temp in kelvin
        setMaxTemp(maxTemp);
    }
    
   
    return (
        <div className='temp-button'>
            <strong>Temperature Type:</strong>
            
                <button id='btn' className='btn btn-primary' value='celcius' onClick={setCelcius}>Celcius</button>
                <button id='btn' className='btn btn-primary' value='kelvin' onClick={setKelvin}>Kelvin</button>
                <button id='btn' className='btn btn-primary' value='farenheit' onClick={setFarenheit}>Farenheit</button>
            
        </div>
    )
}

export default Tempbutton
