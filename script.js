let time = document.querySelector(".time"),
 message = document.querySelector(".message"),
 goal = document.querySelector(".goal"),
 name,
 m,
 container = document.querySelector(".container"),
 day = document.querySelector(".day"),
 moment = require("moment"),
 animate = document.querySelector(".animate")


const display = ()=>{

    name = prompt("Enter Name")
    m = prompt("Enter your goal for today")
    let greet
    setInterval(()=>{
     let date = new Date();
     let info = moment(date).format("LL");
     let hour = date.getHours()
     let min = date.getMinutes()
     
     min<10? min = `0${min}`:min 
     hour<10 ? hour = `0${hour}`:hour
     
     
     if(hour >= 12 && hour<19){
       time.innerHTML = `${hour}:${min} PM` 
       container.style.backgroundImage = "url(images/david-marcu-78A265wPiO4-unsplash.jpg)"
      greet = `Good Afternoon, `
  
      
     }else if(hour>=19 || hour<6){
       time.innerHTML = `${hour}:${min} PM`
       container.style.backgroundImage = "url(images/eberhard-grossgasteiger-g5487il35P0-unsplash.jpg)"
      greet = `Good Evening, `
     }else if(hour>=6 && hour<12){
      time.innerHTML = `${hour}:${min} AM`
       container.style.backgroundImage = "url(images/janko-ferlic-h9Iq22JJlGk-unsplash.jpg)"
      greet = `Good Morning, `
     }
     
      goal.innerHTML = m
     message.innerHTML = `${greet}${name}`
     day.innerHTML = info
     

},500)
  animate.classList.add("active")
}

display()

