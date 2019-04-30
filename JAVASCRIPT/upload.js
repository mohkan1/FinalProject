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