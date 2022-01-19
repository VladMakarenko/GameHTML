
alert('Загадайте число, которое компьютер попытается угадать')
alert('Укажите ">" если указаное число больше загаданого;')
alert('Укажите "<" если указаное число меньше загаданого;')
alert('Укажите "=" если компьютер угадал число.')

let min = 0
let max = 101
let random = Math.floor((min + max) / 2)
let answer = null
while (answer !== "="){
    
    let bar = prompt(random)
    
    answer = bar
    if (answer === "=") {
        alert("ПОБЕДА");
        break
    } else if (answer === ">") {
        min = random
        alert("ты загадал число больше");
    } else if (answer === "<") {
        max = random
        alert("ты загадал число меньше");
    } else {
        alert('Повторите ввод (>, <, =)!')
        continue
    } random = Math.floor((min + max) / 2)
}