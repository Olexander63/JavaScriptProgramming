function show(name, array) {
    document.write(name + " = " + array.join(" | ") + "<br>")
}

function makeCopy(array) {
    let tmp = new Array(array.length)
    for (let k = 0; k < tmp.length; k++) {
        if (Array.isArray(array[k])) {
            tmp[k] = makeCopy(array[k])
        } else {
            tmp[k] = array[k]
        }
    }
    return tmp
}

let A = [1, 2, 3, 4, 5]
show("A", A)

let B = makeCopy(A)

document.write("После  присваивания <code>A[0]=100</code>:<br>")
show("A", A)
show("B", B)

document.write("Массив содержит среди элементов другой массив:<br>")
let C = [1, [2, 3], 4, 5]
show("C", C)
let D = makeCopy(C)
document.write("После присваивание <code>D = makeCioy(C)</code>:<br>")
show("D", D)

C[1][0] = 200
C[3] = 500

document.write("После выполнения команды <code>C[1][0]=200</code> и <code>C[3]=500</code>:<br>")

show("C", C)
show("D", D)