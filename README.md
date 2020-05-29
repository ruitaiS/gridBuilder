## [Grid Builder](https://ruitais.github.io/gridBuilder/)

This is a grid-builder GUI to be used in conjunction with the AI simulator program. With it you can visually plan out the grid-world and generate a config file which can be fed to the AI simulator - no more manually typing out CSVs! Hooray!

### Usage:
Set the initial dimensions of the grid world, click generate, and then click each of the grid squares to put a different type of object there. There are four types of possible world entities, each with their own color:

Walls are gray, objects are blue,
bots are red, and floors are white.
Click each grid square until the world looks right :)

When you're satisfied, click export and it will generate a CSV file for you to download.

#### Encoding Grid Dimensions (Or Not):
Note that the dimensions of the grid will also be encoded as the first line of the CSV, using the selected delimiter. This is so that the simulator config reader will know what array size it needs to allocate before reading in the values - if for whatever reason you don't want this behavior, you can click the "Do Not Include Dimensions" button.

#### Alternate Symbol Encodings:
By default, the builder uses commas for delimiters, a dash to represent floors, and "w", "o", and "b" to represent walls, objects, and bots respectively. If your config reader expects different symbols, you can click the "Customize Config Symbols" button, which will ask you for what character or string you want to use for the various elements.

#### Known Bugs / Unexpected Behavior / User Beware:
* If you enter a decimal into the grid builder, it will round to the nearest integer without alerting you.
* Config encoding works as expected with the default symbols, but I have not extensively tested alternate ones. I did notice that "_" and " " both seem to be encoded to " ", and there may be other weirdness too. Use caution.
* If you click cancel on the prompts for the custom encodings, it will register a null character, and things will break. This is on my to-do list to fix, but for now just don't click cancel :)
* It doesn't seem to want to export single row/column grids for whatever reason
