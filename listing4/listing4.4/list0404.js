let objA = {
  name: "Иван Петров",
  age: 38,
  show: function () {
    document.write("<u>Имя</u>:" + this.name + "<br>");
    document.write("<u>Возраст</u>:" + this.age + "<br>");
  }
};

document.write("<b>Обьект ObjA:</b><br>");
objA.show();
let objB = objA;

document.write("<b>Обьект ObjB:</b><br>");
objB.show();

objA.name = "Петр Иванов";
objA.age++;
document.write("<b>Обьект ObjA:</b><br>");
objA.show();

document.write("<b>Обьект ObjB:</b><br>");
objB.show();