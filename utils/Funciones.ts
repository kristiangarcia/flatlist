type ResultadoConversion = {
    valor:number
    exito:boolean
}

function toEnteroPositivo(cadenaTexto: string):ResultadoConversion {
    const expresionRegular = /^\d+$/
    const valor = parseInt(cadenaTexto)
    const exito = expresionRegular.test(cadenaTexto)
    return { valor, exito }
}
async function calcularDivisores(numero: number):Promise<Array<number>> {
    const lista = []
    for(let i=1;i<=numero;i++){
        if(numero%i===0){
            lista.push(i)
        }
    }
    return lista
}
export { toEnteroPositivo, calcularDivisores }