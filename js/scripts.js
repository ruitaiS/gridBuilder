function say(msg, where){
    document.getElementById(where).innerHTML = msg;
};

function flip(){
};

function genGrid (x, y){


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
