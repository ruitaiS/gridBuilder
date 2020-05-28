## [Grid Builder](https://ruitais.github.io/gridBuilder/)

This is a grid-builder GUI to be used in conjunction with the AI simulator program. With it you can visually plan out the grid-world and generate a config file which can be fed to the AI simulator - no more manually typing out CSVs! Hooray!

### Useage:
Set the initial dimensions of the grid world, click generate, and then click each of the grid squares to put a different type of object there. There are four types of possible world entities, each with their own color:

Walls are gray, objects are blue,
bots are red, and floors are white.
Click each grid square until the world looks right :)

When you're satisfied, click export and it will generate a CSV file for you to download.

#### A Note about Symbols:
As-is, the builder uses commas for delimiters, a whitespace for floors, and "w", "o", and "b" for walls, objects, and bots respectively.

If your config reader expects different symbols than mine, you will unfortunately need to modify the writeState function in the /js/scripts.js file so that the output matches your formatting.
