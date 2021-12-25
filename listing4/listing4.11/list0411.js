let X = {
    color:"красный",
    number:123,
    show:function (arg) {
        document.write("<b>"+arg+"</b>:")
        for(let s in this){
            if(s!=="show"){
                document.write(s+"->"+this[s]+"|")
            }
        }
        document.write("<br>")
    }
}

const A = Object.create(X);

const B = Object.create(X);

showAll()
A.color = "желтый"
A.number=321
B.color="зеленый"
showAll()
X.name = "прототип"
A.state = true
showAll()
delete  X.number

delete A.color
showAll()

function showAll() {
    X.show("X")
    A.show("A")
    B.show("B")
    document.write("<hr>")
}