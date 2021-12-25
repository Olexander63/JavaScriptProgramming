document.write("<h4>Цвета</h4>")
let colors = {red:"красный",yellow:"желтый",green:"зеленый"}
for(const s in colors){
    document.write(s+"-"+colors[s]+"<br>")
}