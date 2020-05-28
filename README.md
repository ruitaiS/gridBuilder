https://ruitais.github.io/gridBuilder/

This is a grid-builder GUI to be used in conjunction with the AI simulator program.

It generates the world config file that the AI simulator uses as input to set the initial state of the grid world.

Useage should be pretty self-explanatory. Set the initial dimensions of the grid world, click generate, and then click each of the grid squares to put a different type of object there.

There are four types of possible world entities, each with their own color.

Walls are gray, objects are blue, bots are red, and floors are white. Click each grid square until the world is right :)

When you're satisfied, click export and it will generate a CSV file for you to download.

Note: If your config reader expects different symbols than mine (which is very likely, since we're all doing these independently) then you will need to modify the writeState function in the /js/scripts.js file so that the output matches your formatting. 

By default the builder uses commas for the delimiters, a whitespace for floor, and "w", "o", and "b" for walls, objects, and bots respectively.
