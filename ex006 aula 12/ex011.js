var idade = 22
console.log(`Voce tem ${idade} anos.`)
if ( idade < 16) {
    console.log(`Não vota `)
}else  if( idade  < 18 || idade > 65){
        console.log('voto opicional')
}else {
    console.log('Voto obrigatorio')
}