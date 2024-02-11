let hour=document.querySelector("#hour")
let minut=document.querySelector("#minut")
let second=document.querySelector("#second")
let start=document.querySelector("#start")
let stopp=document.querySelector("#stopp")
let interval=document.querySelector("#interval")
let clear=document.querySelector("#clear")
let countdown=document.querySelector("#countdown")
let time=document.querySelector("#interval_times")
let hour_add=document.querySelector("#hour_add")
let hour_minus=document.querySelector("#hour_minus")
let minut_add=document.querySelector("#minut_add")
let minut_minus=document.querySelector("#minut_minus")
let second_add=document.querySelector("#second_add")
let second_minus=document.querySelector("#second_minus")
let finish=document.querySelector("#finish")
let h=0
let m=0
let s=0
second.innerHTML=s
    hour.innerHTML=h
minut.innerHTML=m


let pause=null
let pause_two=null
hour_add.addEventListener("click",()=>{
    if (h<60) {     
        h++
     }   
    hour.innerHTML=h
    countdown.disabled=false
})
hour_minus.addEventListener("click",()=>{
    if (h>0) {     
        h--
     }   
    hour.innerHTML=h
})
minut_add.addEventListener("click",()=>{
    if (m<60) {     
       m++
    }   
    minut.innerHTML=m
    countdown.disabled=false
})
minut_minus.addEventListener("click",()=>{
    if (m>0) {
        m--
        minut.innerHTML=m
    }
    
})
second_add.addEventListener("click",()=>{
 if (s<60) {
    s++
    second.innerHTML=s}
    countdown.disabled=false
})
second_minus.addEventListener("click",()=>{
 if (s>0) {
   s--
    second.innerHTML=s}
})
start.addEventListener("click",()=>{
    start.disabled=true
pause = setInterval(()=>{
if (s<59) {
    s++;
    second.innerHTML=s
}else if (m<59){
    s=0
    m++;
    second.innerHTML=s   
minut.innerHTML=m
}else{
    m=0
    h++
    second.innerHTML=s
    hour.innerHTML=h
minut.innerHTML=m
}
    
},100)});

stopp.addEventListener("click",()=>{
clearInterval(pause)
clearInterval(pause_two)  
start.disabled=false
countdown.disabled=false

})
interval.addEventListener("click",()=>{
    interval_times.innerHTML +=`<span>${h}:${m}:${s}</span> <br>`
})

countdown.addEventListener("click",()=>{
    countdown.disabled=true
pause_two=setInterval(()=>{
if(s>0||m>0||h>0){s--
second.innerHTML=s

if (s<0&&m!=0) {
    m--
    s=60
    second.innerHTML=s
     minut.innerHTML=m
    }

if (m==0&&h!=0) {
    h--
    m=60
    second.innerHTML=s
     minut.innerHTML=m
 hour.innerHTML=h
}
}
if (s==0&&m==0&&h==0) {
    finish.innerHTML="vaqt tugadi"
    clearInterval(pause_two)  
    setInterval(()=>{
        finish.innerHTML=""
    },5000)
    countdown.disabled=true
}
},100) 
})
clear.addEventListener("click",()=>{
    clearInterval(pause)
    clearInterval(pause_two)  
 h=0
 m=0
 s=0
 hour.innerHTML=h
minut.innerHTML=m
second.innerHTML=s
interval_times.innerHTML =""
finish.innerHTML=""
})
