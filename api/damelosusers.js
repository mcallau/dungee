export default function handler(request, reponse){
    fetch('https://dungee-23819-default-rtdb.europe-west1.firebasedatabase.app/pins.json')
    .then (datos => datos.json())
    .then (datosjson => response.json(datosjson))
   
}
