document.write("<h4>Удаление свойст и методов</h4>")
const colors = {
    red: "красный",
    yellow: "желтый",
    green: "зеленый",
    show: function () {
        with (document) {
            write("Свойства и методы обьекта:<br>")
            for (const s in this) {
                write(s + "|")
            }
            write("<hr>")
        }
    }
}



colors.show()

delete colors.red

colors.show()

delete colors.yellow

colors.show()

delete colors.show

var tst='"show" in colors'
document.write(tst+" -> "+eval(tst)+"<br>")

tst='"green" in colors'
document.write(tst+" -> "+eval(tst))