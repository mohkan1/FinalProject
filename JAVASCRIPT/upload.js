//This function is used to increase the width of a div called mybar while downloading the file to the server. 
//It is just used to show how much is left till everything fully uploaded
//It increases the width with 1 px every 1 ms tills the width is 100 px
document.getElementById("put").addEventListener('click' , function (){

  
    function move() {
      var elem = document.getElementById("myBar");   
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          elem.style.width = 1 + '%'; 
        } else {
          width+=0.1; 
          elem.style.width = width + '%'; 
        }
      }
    }
    
    move();
    
    
    });