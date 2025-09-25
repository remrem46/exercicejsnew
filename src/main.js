import './style.css'
import {apiKey} from './env.js'
// const meteo = fetch("https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=609ce76f324f69c7cf2a301bc08fb18c")
// .then(response=>{
//   console.log(response);
//   return response;
// })
// .then((data)=>{
//   console.log(data.json());
// });

// console.log(meteo);

const apiMeteo = async () =>{//deuxiemme façon de traiter une requete avec sa reponse
  return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
    .then(response => {
        return response.json();//avec console log on peut choisir 
    });
}

async function apiFunction() {
    return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apikey)
    .then(response => {
        return response.json();
    });

}

apiMeteo().then(json => {
  console.log(json);
})
