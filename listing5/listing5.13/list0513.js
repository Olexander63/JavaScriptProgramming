Array.prototype.toString = function () {
    return this.join("") + "<br>"
}

let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
document.write("<b>Массив</b>:<br>")
document.write(A)
let i, j, m = 3, n = 4
let B = new Array(m)
for (i = 0; i < B.length; i++) {
    B[i] = new Array(n)
    for (j = 0; j < B[i].length; j++) {
        B[i][j] = "b<sub>" + (i + 1) + (j + 1 + "</sub>")
    }
}
document.write("<b>Массив B</b>:<br>")
document.write(B)