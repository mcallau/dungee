export default function handler(request, response){
    fetch('https://dungee-23819-default-rtdb.europe-west1.firebasedatabase.app/pins.json')
    .then (datos => datos.json())
    .then (datosjson => response.json(datosjson))
   
}
