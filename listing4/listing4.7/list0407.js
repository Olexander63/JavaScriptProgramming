with(document){
    write("<h4>Знакомимся с песиком</h4>")
    let dog= {name:"Рекс",breed:"Овчарка",age:3}
    with(dog){
        write("Кличка:"+ name+"<br>")
        write("Порода:"+breed+"<br>")
        write("Возраст:"+ age+"<br>")
    }
}