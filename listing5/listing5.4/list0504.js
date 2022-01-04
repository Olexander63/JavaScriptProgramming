document.write("<h4>Числа Фибоначчи</h4>")

let n = 15,k

let fibs= new Array(1,1)

for(k=2;k<n;k++){
    fibs[k]=fibs[k-1]+fibs[k-2]
}

for(k=0;k<fibs.length;k++){
    document.write(fibs[k]+"|")
}