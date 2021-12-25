let A = {number:100}

let descriptor=Object.getOwnPropertyDescriptor(A,"number")

show(A)

show(descriptor)

function show(obj) {
    document.write("{|")
    for(let s in obj){
        document.write("<b>"+s+"</b>:"+obj[s]+"|")
    }
    document.write("}<br>")
}