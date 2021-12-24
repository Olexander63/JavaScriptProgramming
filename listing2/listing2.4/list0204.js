let n = 100;
let k = 1;
let s = 0;
let txt = "1<sup>2</sup> + 2<sup>2</sup> +...+";
txt += n + "<sup>2</sup>="
while (k < n) {
    s += k * k;
    k++;
}
document.write(txt + s);