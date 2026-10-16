//debe devolver la cantidad de bits y bytes
//debe lanzar la palabra en binario
function conversor(palabra){

    const bytes =new TextEncoder().encode(palabra)
    let binario=""

    for (i = 0; i <bytes.length;i++){
        binario += bytes
        [i].toString(2).padStart(8 , "0")+" "

    }
    return binario

}
console.log(conversor("agus"))