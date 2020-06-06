let worldState = new Array(1);
worldState[0] = new Array ();

let symbArr = ["-", "w", "o", "b", ","];
let writeDims = true;
let dims = "";
let mouseDown = false;

function mouseUpdate(bool){
    mouseDown = bool;
}

function customize(){
    let ar = ["floors", "walls", "objects", "bots", "delimiters"];
    for (let i = 0; i < ar.length; i ++){
        let val = prompt("Please enter new symbol/string for " + ar[i], symbArr[i]);
        if (val === null){
            symbArr = ["-", "w", "o", "b", ","];
            return;
        }else{
            symbArr[i] = val;
        };
    }
}

function toggleDims(){
    if (writeDims){
        writeDims = false;
        document.getElementById("dimTgl").innerHTML = "Include Dimensions"; 
    }else{
        writeDims = true;
        document.getElementById("dimTgl").innerHTML = "Do Not Include Dimensions"; 
    }
}

function drag(id, type){
    if (mouseDown){
        flip(id, type);
    }
}

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
    dims = x+symbArr[4]+y;
    worldState = new Array(x);
    let res = "";
    for (let i = 0; i < x; i ++){
        res += '<div class="col">';
        worldState[i] = new Array(y);
        for (let j = 0; j < y; j++){
            worldState[i][j] = "";
            res += '<button type="gridButton" id="'+i+','+j+'" class="floor"\
            onmousedown="flip(this.id, this.className)" onmouseover="drag(this.id, this.className)"></button>';
        };
        res += '</div>';
    }
    document.getElementById("grid").innerHTML = res;
}

function writeState(){
    let res = "data:application/octet-stream,"
    if (writeDims){res += encodeURIComponent(dims) + "\n"};
    for (let y = 0; y < worldState[1].length; y++){
        for (let x = 0; x < worldState.length; x++){
            switch (worldState[x][y]){
                case "": res += encodeURIComponent(symbArr[0]); break;
                case "wall": res += encodeURIComponent(symbArr[1]); break;
                case "obj": res += encodeURIComponent(symbArr[2]); break;
                case "bot": res += encodeURIComponent(symbArr[3]); break;
            }
            if (x != worldState.length -1 ){res += encodeURIComponent(symbArr[4])};
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
