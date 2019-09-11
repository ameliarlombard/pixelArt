window.onload = function(){
    // Your Code Here
    let canvas = document.querySelector("#canvas");

    for(let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.border = '1px solid black';
        box.style.width = '8px';
        box.style.height = '8px';
        canvas.appendChild(box);
        box.addEventListener('click', function(event) {
            box.style.backgroundColor = '#c23d4b';
          })
      }
    
    document.body.appendChild(canvas);
  }