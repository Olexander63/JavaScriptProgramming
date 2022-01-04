document.write("<h4>Создание массива</h4>")
var nums=[10,true,30,"текст",75]

document.write(nums+"<br>")

for(let k in nums){
    document.write(nums[k]+"|")
}