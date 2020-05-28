let worldState;

function flip(id, type){
    let x = id.split(",")[0];
    let y = id.split(",")[1];
    switch (type){
        case "floor":
            worldState[x][y] = "wall";
            document.getElementById(id).className = "wall";
            break;
        case "wall":
            worldState[x][y] = "obj";
            document.getElementById(id).className = "obj";
            break;
        case "obj":
            worldState[x][y] = "bot";
            document.getElementById(id).className = "bot";
            break;
        case "bot":
            worldState[x][y] = "floor";
            document.getElementById(id).className = "floor";
            break;
    }
}

function generate(x, y){
    document.getElementById("exportBtn").style.visibility = "visible";
    worldState = new Array(y);
    let res = "";
    for (let i = 0; i < y; i ++){
        res += '<div class="row">';
        worldState[i] = new Array(x);
        for (let j = 0; j < x; j++){
            worldState[i][j] = "";
            res += '<button type="gridButton" id="'+j+','+i+'" class="floor"\
            onclick="flip(this.id, this.className)"></button>';
        };
        res += '</div>';
    }
    document.getElementById("grid").innerHTML = res;
}

//!!!Modify this if your config reader expects different symbols!!!
function writeState(){
    let res = "data:application/octet-stream,"
    for (let y = 0; y < worldState[1].length; y++){
        for (let x = 0; x < worldState.length; x++){
            switch (worldState[x][y]){
                //World Entity Symbols (first case is for floor):
                case "": res += encodeURIComponent(" "); break;
                case "wall": res += encodeURIComponent("w"); break;
                case "obj": res += encodeURIComponent("o"); break;
                case "bot": res += encodeURIComponent("b"); break;
            }
            //Delimiter Symbol:
            if (x != worldState.length -1 ){res += encodeURIComponent(",")};
        }
        res += "\n"; //not sure why this line works without encoding to URI, but it does lol
    };
    dl = window.open(res);
}

function getInput (){
    //It's gonna round decimals fyi
    let x = Number.parseInt(document.getElementById("xIn").value);
    let y = Number.parseInt(document.getElementById("yIn").value);
    if ((isNaN(x))||(isNaN(y))||(x == 0)||(y == 0)){
        alert("Please enter non-zero integer values for width and height", "display");
    }else{
        generate(x, y);
    };
}
