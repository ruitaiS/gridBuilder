## [Grid Builder](https://ruitais.github.io/gridBuilder/)

This is a grid-builder GUI to be used in conjunction with the AI simulator program. With it you can visually plan out the grid-world and generate a config file which can be fed to the AI simulator - no more manually typing out CSVs! Hooray!

### Useage:
Set the initial dimensions of the grid world, click generate, and then click each of the grid squares to put a different type of object there. There are four types of possible world entities, each with their own color:

Walls are gray, objects are blue,
bots are red, and floors are white.
Click each grid square until the world looks right :)

When you're satisfied, click export and it will generate a CSV file for you to download.

#### Alternate Symbol Encodings:
By default, the builder uses commas for delimiters, a whitespace to represent floors, and "w", "o", and "b" to represent walls, objects, and bots respectively.

If your config reader expects different symbols, you can click the "Customize Config Symbols" button, which will ask you for what character or string you want to use for the various elements.

#### Bugs / Unexpected Behavior / User Beware:
* If you enter a decimal into the grid builder, it will round to the nearest integer without alerting you.
* The config download code has some strange behavior; I know it work as expected with the default encodings, but I have not extensively tested alternate ones. I do know that "_" and " " both seem to be encoded to " ", and there may be other weirdness. Use caution.
