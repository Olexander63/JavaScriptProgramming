var txt,name,msg;
txt = "Давай познакомимся! Как Вас зовут?";
msg = "Жаль , но Вы не представилис!";
name  = prompt(txt);

if(name!==""){
 msg ="Приятно познакомиться, " + name+"!";
}
document.write(msg);