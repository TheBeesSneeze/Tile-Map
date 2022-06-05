setActiveCanvas("canvas1");
setStrokeColor(rgb(0,0,0,0));


//initialize list
var map = []; //map[x][y]

for(var x=0;x<columns;x++){
  var temp = [];
  for(var y=0; y<rows; y++){
    appendItem(temp,{
      id:"empty",
  
      lef:undefined,
      rig:undefined,
      up:undefined,
      down:undefined,
        
      corner1:undefined,
      corne2:undefined,
      corner3:undefined,
      corner4:undefined,
      
      background:"red",
      code:"",
    });
  }
  appendItem(map,temp);
}


generate();
displayMap();

function generate(){

  map[0][0]=possibilities[randomNumber(0,possibilities.length-1)];
  //find random spot, fill in spots by it in like, a cross
  for(var a=0;a<columns; a++){
    var a1 = a;
    for(var b = 0; b<rows; b++){
      if(map[a][b].id=="empty"){//if not filled
        checkSurroundings(a1,b);
      }
      
    }
  }
    //cross(x,y);
}

function cross(x,y){
  //go x to left
  for(var l=x-1; l>=0; l--){
    if(validObj(l,y)){//checking to see if its already filled
      checkSurroundings(l,y);
    }
  }
  
  // x to right
  for(var r=x+1; r<columns; r++){
    if(validObj(r,y)){//checking to see if its already filled
      checkSurroundings(r,y);
    }
  }
  
  // y to yp
  for(var u=y-1; u>=0; u--){
    if(validObj(x,u)){//checking to see if its already filled
      checkSurroundings(x,u);
    }
  }
  //y to down
  for(var d=y+1; d<rows; d++){
    if(validObj(x,d)){//checking to see if its already filled
      checkSurroundings(x,d);
    }
  }
  
  //console.log(map);
  displayMap();
} 

//returns true if theres an object at x and y
function validObj(x,y){
  if(x>=0 && x<columns && y>=0 && y<rows){
    if(typeof(map[x][y])=="object"){
      if(map[x][y].id != "empty"){
        return true;
      }
    }
  }
  return false;
}

//given coordinates of an undefined tile, checks surroundings for filled tiles and updates possibilites at one cell
function checkSurroundings(x,y){
  var poss = [];
  var criteria = {};
  //left obj
  if(validObj(x-1,y)){
    criteria["lef"] = map[x-1][y].rig;
    //criteria.lef = map[x-1][y].rig;
  }
  //right obj
  if(validObj(x+1,y)){
    criteria["rig"] = map[x+1][y].lef;
  }
  //up obj
  if(validObj(x,y-1)){
    criteria["up"] = map[x][y-1].down;
  }
  //down obj
  if(validObj(x,y+1)){
    criteria["down"] = map[x][y+1].up;
  }
  
  //top right(1)
  if(validObj(x+1,y-1) && validObj(x+1,y) && validObj(x,y-1)){
    if(map[x][y-1]["corner4"] == map[x+1][y]["corner2"] && map[x+1][y-1]["corner3"] == map[x+1][y]["corner2"]){//up right (3) and up (4) and right (2)
      criteria["corner1"]=map[x+1][y-1].corner3;
    }
    
  }
  //top left
  if(validObj(x-1,y-1)){
    criteria["corner2"]=map[x-1][y-1].corner4;
  }
  //bot left
  if(validObj(x-1,y+1)){
    criteria["corner3"]=map[x-1][y+1].corner1;
  }
  //bot right
  if(validObj(x+1,y+1)){
    criteria["corner4"]=map[x+1][y+1].corner2;
  }
  console.log(criteria);
  for(var i=0; i<possibilities.length; i++){
    
    var valid=true;
    var p = possibilities[i];
    
    console.log(i);
    console.log(p);
    console.log(p["up"]);
    console.log("\n");

    if(p.up != criteria.up && criteria.up!=undefined){
      valid=false;
    }
    if(p.down != criteria.down && criteria.down!=undefined){
      valid=false;
    }
    if(p.rig != criteria.rig && criteria.rig!=undefined){
      valid=false;
    }
    if(p.lef != criteria.lef && criteria.lef!=undefined){
      valid=false;
    }
    if((p["corner1"] != criteria["corner1"] && criteria["corner1"]!=undefined)
    ||(p["corner2"] != criteria["corner2"] && criteria["corner2"]!=undefined)
    ||(p["corner3"] != criteria["corner3"] && criteria["corner3"]!=undefined)
    ||(p["corner4"] != criteria["corner4"] && criteria["corner4"]!=undefined)){
      valid=false;
    }
    if(valid){
      //console.log(p);
      //console.log(criteria);
      //console.log("");
      appendItem(poss,p);
    }
  }
  var item = poss[randomNumber(0,poss.length-1)];
  console.log(item);
  map[x][y]=item;
}

//returns true if map[x][y] is an object. returns false if x or y are out or bounds, or if map[x][y] isnt an object
function obj(x,y){
  if(x<0 || y<0 || x>=columns || y>= rows){
    return false;
  }
  if(map[x][y].length != undefined){
    return false;
  }
  return true;
}

//given two lists, returns a list of only the shared values. uses id specific for this code. dont uh, dont use this with other programs
function returnMatchingValues(list1,list2){
  var matching = [];
  for(var a = 0; a<list1.length; a++){
    for(var b = 0; b<list2.length; b++){
      if(list1[a].id==list2[b].id){
        appendItem(matching, list1[a]);
      }
    }
  }
  return(matching);
}

//returns true / false if item is in list. list and item should be objects, compares ids
function includes(list,item){
  for(var i=0; i<list.length;i++){
    if(list[i].id == item.id){
      return true;
    }
  }
  return false;
}

var count=0;
//draws entire map
function displayMap(){
  for(var x=0;x<map.length;x++){
    for(var y=0;y<map[x].length;y++){
      if(map[x][y] != undefined){
        if(map[x][y].length == undefined)
        {
          if(map[x][y]["img"]==undefined){
              //setStrokeColor("black");
            setFillColor(map[x][y].background);
            rectangle(x*cellSize,y*cellSize,cellSize,cellSize);
            setFillColor(rgb(0,0,0,0));
            eval(map[x][y].code);
          }
          //cereate imgage
          else{
            count++;
            var cell = new Image();
            cell.src= map[x][y]['img'];
            cell.style.width=cellSize+"px";
            cell.style.height=cellSize+"px";
            cell.style.position='absolute';
            cell.style.left=cellSize*x+"px";
            cell.style.top=cellSize*y+"px";
            console.log(cell);
            //get real
            document.body.appendChild(cell);          
          }
        }
      }
    }
  }
  //console.log(map);
}