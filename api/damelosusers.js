export default function handler(request, response){
    let pin = request.query.pin;

    fetch(`https://dungee-23819-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}.json`)
    .then (datos => datos.json())
    .then (datosjson => response.json(datosjson))
   
}
