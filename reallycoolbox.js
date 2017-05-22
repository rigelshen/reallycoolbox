var x = 0;
var y = 350;
//var bool = false;
var inc = 5;
function setup()
{
createCanvas(500,400);
    background(0);
}
function draw()
{
    background(0);
    rect(x, y,  50, 50);
    
    rect(200, 350,  50, 50);
    rect(400, 350,  50, 50);
      

    
    if (keyIsPressed == true)
        {
            if (keyCode == 32)
                {
                    y-= inc;
                }
            if (keyCode == LEFT_ARROW)
                {
                    x--;
                }
            if (keyCode == RIGHT_ARROW)
                {
                    x++;
                }
            
            
        }
    if (y > 400)
                {
                    y++;
                }
                                
    
    /*
    if (x == 0 && y == 0)
        {
           inc = 5; 
        }
    if (x == 300 && y == 300)
        {
            inc = -5;
        }
    x+=inc;
    y+=inc;
*/
    
//    if (y >= 300  && !bool)
//        {
//            y-=5;
//            if (y == 300)
//                bool = true;
//        }
//    else if (y <= 300)
//        {
//            y+=5;
//            
//        }
}