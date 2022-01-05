Array.prototype.toString = function () {
    let txt = "< " + this.join(" ; ") + " >";
    return txt
}

Array.prototype.valueOf = function () {
    return eval(this.join("+")) / this.length
}

let A = [1, [2, 3], 4, "текст", true]
document.write("Массив:<br>")

document.write(A)

let B = [3, 5, 1, 8, 2]
document.write(["<br>B=", B].join(""))

document.write("<br>Среднее значение значение:" + B + "<br>")
document.write("Массив" + [1, 2, 3, 4].toString() + "-среднее" + [1, 2, 3, 4].valueOf())