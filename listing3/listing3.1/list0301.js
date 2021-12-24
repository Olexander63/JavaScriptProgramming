makeHeader("Знакомимся с фунциями");
function getRandtext(n) {
    let txt = "Случайные целые числа(от 1 до 10:<br>"
    for(let k =1;k<=n;k++){
        txt+=myRand()+"*"
    }
    txt+="<br>"
    return txt
}
document.write(getRandtext(20))
function myRand(){
    return 1 + Math.floor(10*Math.random())
}
function makeHeader(t) {
    document.write("<h4>"+t+"</h4>")
}