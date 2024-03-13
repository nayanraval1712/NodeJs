function currentDate() {
    // creat local object 
    let today = new Date() // date java script nu inbult function che 
    let currentDate = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear()
    return currentDate;
}
function currentTime() {
    let next = new Date()
    let currentTime = next.getHours() + ':' + next.getMinutes() + ':' + next.getSeconds()
    return currentTime;
}
// we use upper function in 3rds function  
function currentDateTime() {
    let currentDateTime = currentDate() + '  '+ currentTime()
    return currentDateTime;
}

// now call the function  :
let call = currentDateTime();
console.log(call)
