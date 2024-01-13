const canvas = document.querySelector("canvas"); 
 const ctx = canvas.getContext("2d"); ctx.beginPath(); 
 ctx.arc(100, 75, 50, 0, 2 * Math.PI); ctx.stroke();

// Draw an oval
            ctx.beginPath();
            ctx.ellipse(300, 250, 50, 80, 0, 0, 2 * Math.PI);
            ctx.fillStyle = 'orange';
            ctx.fill();
            ctx.stroke();
 
  // Draw a square
            ctx.fillStyle = 'green';
            ctx.fillRect(200, 50, 100, 100);

            // Draw a rectangle
            ctx.fillStyle = 'blue';
            ctx.fillRect(50, 200, 150, 80); 
            
            ctx.fillStyle='red' ;     
            
            
            // Draw a stroked circle
ctx.beginPath();
ctx.arc(350, 150, 30, 0, 2 * Math.PI);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 2;
ctx.stroke();