let worldState;

function say(msg, where){
    document.getElementById(where).innerHTML = msg;
};

function flip(){
    //get button coords somehow
    //update the worldState array
};

function generate(x, y){
    worldState = new Array(y);
    let res = "";
    for (let i = 0; i < y; i ++){
        res += '<div class="row">';
        worldState[i] = new Array(x);
        for (let j = 0; j < x; j++){
            worldState[i][j] = "";
            res += '<button type="gridButton" id="' + x + ',' + y + '" class ="floor" onclick="flip()"></button>';
        };
        res += '</div>';
    };
    
    document.getElementById("grid").innerHTML = res;


    
}

function getInput (){

//It's gonna round your decimals
let x = Number.parseInt(document.getElementById("xIn").value);
let y = Number.parseInt(document.getElementById("yIn").value);


if ((isNaN(x))||(isNaN(y))||(x == 0)||(y == 0)){
    say("Please enter non-zero integer values for width and height", "display");

}else{
    //do actual code
    say("Dimensions are " + x + " by " + y, "display");
    generate(x, y);

};




}

function makeRows(n){
//generate text that makes n number of rows, each with unique id
//call fillRow on each of them

    res = ""
    for (let i = 0; i < n; i ++){
        res += "<div id='row'" + i + "class='row'>";
        fillRow(5, i);
        res += "</div>";
    };

    document.getElementById("grid").innerHTML = res;

};

function fillRow(totalCols, rowNum){

    res = "";
    for (let i = 0; i < cols; i++){
        res += '<button onclick="fillRow(5, row1)" >yo</button>';

    };
    document.getElementById("row"+rowNum).innerHTML = res;

};

//doesn't work lol
//copied & pasted from https://codyhouse.co/ds/components/info/button-states
//Learn jQuery when you get the chance, I'm sure the code here works but it's just not formatted properly in some dumb tiny way that's making it break..

$('.gameButton').on('click', function(event){
    if($(this).hasClass("floor")){ $(this).removeClass("floor").addClass("wall"); return;}
    else if($(this).hasClass("wall")){ $(this).removeClass("wall").addClass("obj"); return;}
    else if($(this).hasClass("obj")){ $(this).removeClass("obj").addClass("bot"); return;}
    else { $(this).removeClass("bot").addClass("floor"); return;}
});
