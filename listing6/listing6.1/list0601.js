try {
  document.write("Начало выполения <code>try</code>-блока<br>");
  let txt;
  txt = prompt("Ввидите выражения для вычисления:");
  document.write("Результат вычисления выражения:" + eval(txt) + "<br>");
} catch (e) {
  document.write("<b>Произошла ошибка</br><br>");
}

document.write("Выполнение сценария завершено");