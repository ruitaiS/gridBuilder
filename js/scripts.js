function say(msg, where){
    document.getElementById(where).innerHTML = msg;
};

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
