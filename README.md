This is a grid-builder GUI to be used in conjunction with the AI simulator program.

It generates the world config file that the AI simulator uses as input to set the initial state of the grid world.

I decided to write it in HTML and JS, rather than Java (which the simulator is written in) becuase 
(a) I'm not the biggest fan of Java (the code is too verbose, and it needs recompiling after every change, whereas with HTML you just need to save and refresh)
(b) I wanted something that could be run on any machine
(c) I wanted to keep practicing JS

---
Useage should be pretty self-explanatory. Set the initial dimensions of the grid world, and then click each of the grid squares to put a different type of object there.

There are three types of possible world entities: wall, object, and robot (and floor, if nothing is there). Clicking each grid square will cycle between these options.

When you're satisfied, click export and it will generate a CSV file. If/when I figure out JSON, I will add an option to output that as well.
(If your code uses a different config format than mine - which is very likely, since we're all doing these independently - then you will need to modify the output function in the /js/scripts.js file so that the output matches your formatting)
