setInterval(function(){
var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
// var year = d.getFullYear();
var period = 'AM';
if (hour >= 12){
    hour = '0' + (hour-12);
    period = "PM";
}
if (second < 10) {
second = "0" + second;
}
if (minute < 10) {
    minute = "0" + minute;
}

var t = hour + ':'+ minute +':'+second +' '+period ;//+ '/' +year; 

document.getElementById('clock').innerHTML = t;


});