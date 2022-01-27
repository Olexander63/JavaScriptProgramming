let today = new  Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate()+1)

let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate()-1)

let monthAfter = new Date(Date.now())
monthAfter.setMonth(monthAfter.getMonth()+1)

let yearAfter = new Date(Date.now())
yearAfter.setFullYear(yearAfter.getFullYear()+1)

document.write("<b>Сегодня</b>"+today+"<br>")
document.write("<u>Год: </u>" +today.getFullYear()+"<br>")
document.write("<u>Дата: </u>" +today.toLocaleDateString()+"<br>")
document.write("<u>Время: </u>" +today.toLocaleTimeString()+"<br>")
document.write("<b>Завтра:</b>"+tomorrow+"<br>")
document.write("<b>Вчера:</b>"+yesterday+"<br>")
document.write("<b>Через месяц:</b>" + monthAfter+"<br>")
document.write("<b>Через год:</b>" + yearAfter+"<br>")

let meeting = new Date(2022,2,30,8,0,0)

document.write("<b>Сегодня:</b>" + today.toLocaleString()+"<br>")
document.write("<b>Время и дата встречи:</b>" + meeting.toLocaleString()+"<br>")

meeting.setDate(meeting.getDate()+1)

document.write("<b>Новое время  и дата встречи</b>" + meeting.toLocaleString()+"<br>")

document.write("<u> До встречи:</u>"+(meeting-today)+" миллисекнд <br>")

document.write("<u> До встречи:</u>"+Math.round((meeting - today)/1000/60/60/24)+" дней <br>")
