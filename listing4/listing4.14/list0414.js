let A = {}

let B = Object.create(null)

let C = Object.create(B);

B.number = 100

Object.prototype.name = "Обьект А"

show(A)
show(B)
show(C)



function show(obj){
    for(let s in obj){
        document.write(s+"->"+obj[s])
    }
    document.write("<br>")
}