let obj = {
  name: "обьект",
  code: 123
};
obj["text"] = "текст";

for (let k = 1; k <= 5; k++) {
  obj["symbol_" + k] = String.fromCharCode("A".charCodeAt(0) + k - 1);
}
for (let s in obj) {
  document.write("Свойство <b>" + s + "</b>:" + obj[s] + "<br>");
}

let list = Object.keys(obj);

document.write("[" + list.join("|") + "]");