if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(function(){
        console.log("Service Worker is registered")
    })
}

//let teste = setInterval(function(){
  //  myTimer()
//}, 1000)

//let secondlimit = 30

//function myTimer(){
    //if(secondlimit == 0){
      //  stop()
   // }

  //  document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
//secondlimit = secondlimit  - 1;

//}

//function stop(){
//    clearInterval(teste)
//}

//function zeroPad(num, places) {
   // var zero = places - num.toString().length + 1;
 //   return Array(+(zero > 0 && zero)).join("0") + num;
  //}//

  let timer1;
  let sec = 4
  let i = 0
  function timer(){
    
     timer1 = setInterval(function(){
         
        document.getElementById('safeTimerDisplay').innerHTML= sec;
        sec--;
        
        if (sec < 0) {
            document.getElementById("titulo").innerHTML = "Tempo de descanço"
            i++
            clearInterval(timer1)
            
            if(i>3){
                clearInterval(timer1)
                alert("acabou")
                return
            }
            sec = 4
             
            timer();
           
        }
    }, 1000);

    }
   
function stop(){
    clearInterval(timer1)
    sec = document.getElementById("safeTimerDisplay").innerHTML
    console.log(sec)
}