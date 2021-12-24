let n = 100, k = 1, s = 0;
let txt = "1<sup>2</sup>+ 2<sup>2</sup>+...+";
txt+=n+"<sup>2</sup>=";
do {
    s+=k*k;
    k++;
}while(k<=n){
    document.write(txt+s);
}