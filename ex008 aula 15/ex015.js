let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem  ${num.length} posições`)
console.log(`O primeiro valo do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`Este valor não existe`)
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}

