function caller(func) {
    return func
}

function show(txt) {
    document.write(txt + "<br>")
}

let obj = {
    text: "обьект obj", hi: function () {
        document.write(this.text + "<br>")
    },
    toString: function () {
        return this.text
    }
}

caller(show)("функция show()")
obj.hi()
caller(obj.hi)()

caller(obj.hi.bind(obj))()

let powerOfTwo = Math.pow.bind(Math, 2)
let n = 5
document.write("2 <sup>" + n + "</sup>=" + powerOfTwo(n) + "<br>")

function f(x) {
    return this + x
}

let one = f.bind(10)
let two = f.bind(obj)

document.write(one(5) + "<br>")
document.write(two(" -это он") + "<br>")

obj.text = "тот же обьект"
document.write(two("-новое значение") + "<br>")