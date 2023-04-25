export default function handler(request,response){
    const questions=[
        ["CUANTO ES DOS MAS DOS?",1,2,3,4,   4],   // el ultimo numero indica la posicion de la respuesta correcta
        ["cuanto es raiz cuadrada 9?",3, 4,5,2,   1],
        ["cuanto es 3-2?",4,2,3,1,   4]
    ];






    response.json(questions);
}