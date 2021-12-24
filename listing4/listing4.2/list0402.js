let obj = {
  name: "Иван Петров",
  age: 38
};
show(obj);
obj.name = "Петров Иванов";
obj.age++;

show(obj);

function show(a) {
  document.write("<b>Имя</b>:" + a.name + "<br>");
  document.write("<b>Возраст</b>:" + a.age + "<br>");
}