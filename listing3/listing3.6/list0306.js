let myText = "Глобальная переменная"
document.write(myText +"<br>")
function show() {
    let  myText="Локальаня переменная"
    window.myText="Переменная с намеком на глобальность"
    document.write(myText+"<br>")
    document.write(window.myText+"<br>")
}
show()
document.write(myText+"<br>")