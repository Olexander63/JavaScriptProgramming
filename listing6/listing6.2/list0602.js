try {
    document.write("Начало выполения <code>try</code>-блока<br>");
    let txt = prompt("Введите выражение для вычисления");
    document.write("Результат вычисление выражения:" + eval(txt) + "<br>");
    document.write("Выполение  <code>try</code>-блока завершено<br>");
} catch (e) {
    let name = e.name;
    let message = e.message;
    let str;
    switch (name) {
        case "RefenceError":
            str = "Некорекная ссылка";
            break;
        case "SyntaxError":
            str = "Синтаксическа ошибка";
            break;

        default:
            str = "Ошибка" + name;
    }
    document.write("<b>Внимание! Произошла ошибка!</b><br>");
    document.write("<b>Тип ошибки:</b>" + str + "<br>");
    document.write("<b>Описание ошибки:</b>" + message + "<br>");
    if ("fileName" in e) {
        document.write("<b>Файли с ошибкой</b>" + e.fileName + "<br>");
    }
}