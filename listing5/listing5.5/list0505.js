let n = 15

let fibs = new  Array(1,1)

while (fibs.length<n){
    fibs[fibs.length] = fibs[fibs.length-1]+fibs[fibs.length-2]
}

for(let k =0;k<fibs.length;k++){
    document.write(fibs[k]+"|")
}