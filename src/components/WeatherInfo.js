import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Tempbutton from './Tempbutton';
import {withRouter} from 'react-router-dom';

function WeatherInfo(props) {
    const { cityName,showInfo} =props;
    
    const apiKey = '375e5eb955b65131baa0137af4930919';
    const [weatherData, setWeatherData] = useState({});
    const [showButton,setShowButton] = useState(false);
    const [symbol,setSymbol] = useState('K');
    const [temp,setTemp] = useState(''); //setting current temperature in kelvin
    const [celTemp,setCelTemp] =useState(''); ///setting current temperature in celcius
    const [farTemp,setFarTemp] = useState('');///setting current temperature in farenheit
    const [climateType,setClimateType] = useState('');
    const [humid,setHumid] = useState('');
    const [icon,setIcon] = useState('');
   
    
    const [showData,setShowData] = useState(showInfo);
    // state for setting minimum temperature
    const [minTemp,setMinTemp] = useState('');
    const [minCelTemp,setMinCelTemp] =useState('');
   const [minFarTemp,setMinFarTemp] =useState('');

   //state for setting max temperature
   const [maxTemp,setMaxTemp] = useState('');
    const [maxCelTemp,setMaxCelTemp] =useState('');
   const [maxFarTemp,setMaxFarTemp] =useState('');

   

   // const weatherArr =[];
    useEffect(() => {
       if(cityName !==''){
            Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then(
                   res => {
                       console.log(res) ;
                       setWeatherData(res.data);
                       setShowButton(true);
                       setShowData(true);
                       setTemp(res.data.main.temp);
                       setSymbol('K');
                       setClimateType(res.data.weather[0].main);
                       setHumid("Humidity:"+res.data.main.humidity+"%");
                       setIcon('http://openweathermap.org/img/wn/'+res.data.weather[0].icon+'@2x.png');
                       setMinTemp(res.data.main.temp_min);
                       setMaxTemp(res.data.main.temp_max);
 
                   }
                 )
            .catch(err => console.log(err))
       } 
    }, [cityName]);

    const handleClick = (e)=>{
        e.preventDefault();
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        
        if(window.confirm("Are you sure you want to add the city?")){
                 
                Axios.post('https://react-firebaseaxiosdemo.firebaseio.com/myCities.json',{
                    name:weatherData.name,
                    temp:temp,
                    date:date
                })
                .catch(err=> console.log("error :" +err));
                // below line redirects you to My cities page
                props.history.push('/MyCities');
        
        }
    }
   
    return (
        <div className='weatherCard' id='weatherCard'>
           { showData? <>
           
            <h3> {weatherData.name} </h3>
            <h4>
                    {
                    symbol==='K'?temp:(symbol==='°C'?celTemp:farTemp)
                        
                    }{showButton?symbol:<div></div>}
            </h4><br/>
            <div id='showClimate'>
                  {climateType}
                <span>{showButton?<img src={icon} alt='weaterIcon'></img>:<div></div>}</span>
            </div>
            <br/>
            <div id="showHumidity">{humid}   </div>     
           
            <div> 
                    {showButton?<h6>Min Temp/Max Temp</h6>:<div></div>}
                
                    {/* for min temperature */}
                    {
                        symbol==='K'?minTemp:(symbol==='°C'?minCelTemp:minFarTemp)
                    
                    }{showButton?(symbol+"/"):<div></div>}   
                    
                    {/* For max temperature */}
                    {
                        symbol==='K'?maxTemp:(symbol==='°C'?maxCelTemp:maxFarTemp)
                    }{showButton?symbol:<div></div>}
            </div>
            <div>{showButton?<Tempbutton temp={temp}   setSymbol={setSymbol} setTemp={setTemp}
                    setCelTemp={setCelTemp} setFarTemp={setFarTemp} minTemp={minTemp} setMinTemp={setMinTemp} setMinCelTemp={setMinCelTemp}
                    setMinFarTemp={setMinFarTemp} maxTemp={maxTemp} setMaxTemp={setMaxTemp} setMaxCelTemp={setMaxCelTemp}
                    setMaxFarTemp={setMaxFarTemp}/>:<div></div>}
             </div>
                <button className='btn btn-danger' onClick={handleClick}>Add {weatherData.name} to My Cities</button></>
                  : <><div><strong> Get started by selecting a City</strong></div></>
          }  
        </div>
    )
}

export default withRouter(WeatherInfo);
