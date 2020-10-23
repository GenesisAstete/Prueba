import React from 'react'
import { Space, Card, Input } from 'antd';
import '../style/weather.css'
//import Save from './Save';
//import {auth,db} from '../firebase'

const Weather = () => {

    const [temperature, setTemperature] = React.useState(undefined)
    const [tempmin, setTempmin] = React.useState(undefined)
    const [city, setCity] = React.useState(undefined)
    const [country, setCountry] = React.useState(undefined)
    const [humidity, setHumedity] = React.useState(undefined)
    const [description, setDescription] = React.useState(undefined)
    const [icon, setIcon] = React.useState({})
    const [check, setCheck] = React.useState(false)

    //función para obtener fecha actual
     const dateBuilder = () => {
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
      } 

      /* const user = auth.currentUser;
      const [id, setId] = React.useState(user.uid)
      const [citys, setCitys] = React.useState(user.uid)
     console.log('user uid',id)
      const edit = async (e) => {
          try {
              const newCity = {
                  uid: id,
                  city: city
              }
              const data = await db.collection('locacion').add({
                  uid: id,
                  city: city,
              })
              setCitys([
                  ...citys,
                  {id: data.id, ...newCity }
              ])
              setId('')
              setCity('')
          } catch (error) {
              console.log(error)
          }
      } */

/*       const [lat, setLat] = React.useState(undefined)
      const [lon, setLon] = React.useState(undefined)
      const [part, setPart] = React.useState(undefined) */


      //función para obtener el pronostico del tiempo
        const getWeather = async (event) => {
            event.preventDefault();
            const Api_Key = '59b86cbf85f89cdb95a459f856df4424'
            const city = event.target.elements.city.value;

            //consumo de api 
            const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${Api_Key}`)
            const response = await api_call.json();
            console.log('response',response);
/*            
            const api_call2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${Api_Key}`)
            const res = await api_call2.json();
            console.log('res',res) */

            //actualización de estados 
            setCheck(true)
            setTemperature (Math.round(response.main.temp))
            setTempmin(response.main.temp_min)
            setCountry(response.sys.country)
            setHumedity(response.main.humidity)
            setDescription(response.weather[0].description)
            setCity(response.name)
            setIcon(response.weather[0].icon)
/*             setLat(response.coord.lat)
            setLon(response.coord.lon)
            setPart('') */
      }
       
    return (
    <div className="container mt-4">
        <form onSubmit={getWeather} className="form">
           <Input className="inputFind" type="text" name="city" placeholder="Find your location"/>
           <button className="btn">FIND</button> 
        </form>
        {
            check? 
            <>   
            <Space bordered="false">
            <Card >
                    <h3>{city},{country}</h3>
                    <h5>{dateBuilder()}</h5>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/> 
                    <h2>{temperature}°C</h2> 
                    <h4>{tempmin}°C</h4>
                    <h5>Humedity: {humidity}%</h5>
                    <h5>Condition: {description}</h5> 
            </Card>
            </Space>
            {/* <Save city={city}/> */}
            </>
            : <div></div> 
        }
    </div>  
)}

export default Weather
