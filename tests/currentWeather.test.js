// teste currentWeather
require('dotenv').config({path: "../.env"})


const getCurrentWeather = require("../src/services/currentWeather")

const cidade = "sao paulo"




async function testar(){
    try{
        console.log(`Buscando clima de ${cidade}`)

        const resultado = await getCurrentWeather(cidade)


        console.log(resultado.data.main.temp)

        
        

    }catch(error){
    console.log(`choraaa Erro: ${error}`)
    }

}

testar()