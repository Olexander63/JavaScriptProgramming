function zero(txt) {
    document.write("<b>" + txt + "</b><hr>")
}

zero.toString = function () {
    let t = "Название функции -zero<br>"
    t += "Количество аргументов -" + this.length + "<br>"
    return t
}

function one(txt) {
    document.write("<b>" + txt + "</b><br>")
    for (let s in this) {
        document.write(this[s] + "<br>")
    }
    document.write("<hr>")
}

one.toString = function () {
    let t = "Метов one()<br>"
    t += "Количество аргументов -" + this.length + "<br>"
    return t
}

let A = []
A[0] = zero
A[1] = one

A[0]("Начальный элемент массива")
A[1]("Элемент с еддиничным индексом")