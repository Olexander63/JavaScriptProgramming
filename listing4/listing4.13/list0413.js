let A = Object.create(Math)

let B = Object.create(A)

let C = Object.create(B)

let D =  Object.create(C)
Object.getPrototypeOf(A).f=function (x) {
    return 2*x+1
}

let t =2

document.write("Функция f("+t+")="+Math.f(t)+"<br>")

t=3

document.write("Функция  f("+t+") = "+D.f(t)+"<br>")

let obj  = Object.getPrototypeOf(Object.getPrototypeOf(D))

document.write("obj== B ->"+ (obj===B)+"<br>")