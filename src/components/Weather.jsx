import React from 'react'
import { Space, Card, Input } from 'antd';
import '../style/weather.css'


const Weather = () => {

    const [temperature, setTemperature] = React.useState(undefined)
    const [tempmin, setTempmin] = React.useState(undefined)
    const [city, setCity] = React.useState(undefined)
    const [country, setCountry] = React.useState(undefined)
    const [humidity, setHumedity] = React.useState(undefined)
    const [description, setDescription] = React.useState(undefined)
    const [icon, setIcon] = React.useState({})
    const [check, setCheck] = React.useState(false)

 /*    const dateBuilder = () => {
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
      } */
     const getWeather = async (event) => {
        event.preventDefault();
        const Api_Key = '59b86cbf85f89cdb95a459f856df4424'
        const city = event.target.elements.city.value;

        //const country = event.target.elements.country.value;
        //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
      /*  const api_call= await fetch(`${url_base}weather?q=${query}&units=metric&APPID=${Api_Key}`)
        const response = await api_call.json(); */

        const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${Api_Key}`)
        const response = await api_call.json();
         
        console.log(response);

        setCheck(true)
       // setTemperature(response.main.temp)
       setTemperature (Math.round(response.main.temp))
        setTempmin(response.main.temp_min)
        setCountry(response.sys.country)
        setHumedity(response.main.humidity)
        setDescription(response.weather[0].description)
        setCity(response.name)
        setIcon(response.weather[0].icon)
      }

      
    return (
    <div className="container mt-4">
        <form onSubmit={getWeather} className="form">
            <Input className="inputFind" type="text" name="city" placeholder="Find your location"  />
 {/*            <input type="text" name="country" placeholder="Pais..." /> */}
           <button className="btn">FIND</button> 
        </form>
        {
            check? 
            <>
{/*           <div style={{backgroundColor:'white'}}>  
              <h3>El Tiempo en {city},{country}</h3>
              <h2>Temperatura: {temperature}°C</h2> 
              <h3>Temperatura mínima: {tempmin}°C</h3>
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/> 
              <p>Humedad: {humidity}%</p>
              <p>Condición: {description}</p>
          </div>  */}
         
    <Space bordered="false">
      <Card >
              <h3>{city},{country}</h3>
              {/* <div class="date">{{ dateBuilder }}</div> */}
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/> 
              <h2>{temperature}°C</h2> 
              <h4>{tempmin}°C</h4>
              <h5>Humedity: {humidity}%</h5>
              <h5>Condition: {description}</h5> 
      </Card>
    </Space>
    </>
          : <div></div> 
        }
        
    </div>  

)}

export default Weather
