const ratio = 10;

const cellSize = 100;

var columns = Math.ceil( screen.availWidth / cellSize)*2;
var rows = Math.ceil( screen.availHeight / cellSize)*2;

var can = document.getElementById("canvas1");

can.style.width=(columns*cellSize)+"px";
can.style.height=(rows*cellSize)+"px";

var cell1= cellSize * (1/3);
var cell2 = cellSize * (2/3);

{//grass
grass={
  id:'grass',
  
  up:"grass",
  rig:"grass",
  down:"grass",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles/tile map_grass.jpg",
};
rock={
  id:'rock',
  
  up:"grass",
  rig:"grass",
  down:"grass",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles/tile map_rock.jpg",
};
var flowers1={
  id:'flowers1',

  up:"grass",
  rig:"grass",
  down:"grass",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",

  img:"tiles/tile map_flowers1.jpg",
};
var flowers2={
  id:'flowers2',

  up:"grass",
  rig:"grass",
  down:"grass",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles/tile map_flowers2.jpg",
};
}

{//rivers
var river = {
  id:'river',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_river.jpg",
}
var lilypad1 = {
  id:'lilypad1',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_lilypad1.jpg",
};
var lilypad2 = {
  id:'lilypad2',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_lilypad2.jpg",
};
cattails = {
  id:'cattails',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_cattails.jpg",
}
turt = {
  id:'turt',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_Artboard 1.jpg",
}
}

{//river sides
//river is on the right sidde
riverRight={
  id:'riverRight',
  
  up:"grassriver",
  rig:"river",
  down:"grassriver",
  lef:"grass",
  
  corner1:"river",
  corner2:"grass",
  corner3:"grass",
  corner4:"river",
  
  img:"tiles/tile map_riverRight.jpg",
};
riverLeft={
  id:'riverLeft',
  
  up:"rivergrass",
  rig:"grass",
  down:"rivergrass",
  lef:"river",
  
  corner1:"grass",
  corner2:"river",
  corner3:"river",
  corner4:"grass",
  
  img:"tiles/tile map_riverLeft.jpg",
};
riverDown={
  id:'riverDown',
  
  up:"grass",
  rig:"grassriver",
  down:"river",
  lef:"grassriver",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_riverDown.jpg",
};
riverUp={
  id:'riverUp',
  
  up:"river",
  rig:"rivergrass",
  down:"grass",
  lef:"rivergrass",
  
  corner1:"river",
  corner2:"river",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles/tile map_riverUp.jpg",
};
}
{//river corners
riverCorner1={//top right
  id:'riverCorner1',
  
  up:"grassriver",
  rig:"rivergrass",
  down:"grass",
  lef:"grass",
  
  corner1:"river",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles/tile map_riverCorner1.jpg",
};
riverCorner2={//top left
  id:'riverCorner2',
  
  up:"rivergrass",
  rig:"grass",
  down:"grass",
  lef:"rivergrass",
  
  corner1:"grass",
  corner2:"river",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles/tile map_riverCorner2.jpg",
};
riverCorner3={//bottom left
  id:'riverCorner3',
  
  up:"grass",
  rig:"grass",
  down:"rivergrass",
  lef:"grassriver",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"river",
  corner4:"grass",
  
  img:"tiles/tile map_riverCorner3.jpg",
};
riverCorner4={//bottom right
  id:'riverCorner4',
  
  up:"grass",
  rig:"grassriver",
  down:"grassriver",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"river",
  
  img:"tiles/tile map_riverCorner4.jpg",
};
}
//for reference, river edges are like reverse river corners
// WHAT WAS I THINKING WITH THIS DOCUMENTATION
// OKAY RIVER EDGES ARE MAJORITY WATER WITH 1/4 LAND
{//river edges
riverEdge1={
  id:'riverEdge1',
  
  up:"rivergrass",
  rig:"grassriver",
  down:"river",
  lef:"river",
  
  corner1:"grass",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_riverEdge1-10.jpg",
};
riverEdge2={
  id:'riverEdge2',
  
  up:"grassriver",
  rig:"river",
  down:"river",
  lef:"grassriver",
  
  corner1:"river",
  corner2:"grass",
  corner3:"river",
  corner4:"river",
  
  img:"tiles/tile map_riverEdge1-08.jpg",
};
riverEdge3={
  id:'riverEdge3',
  
  up:"river",
  rig:"river",
  down:"grassriver",
  lef:"rivergrass",
  
  corner1:"river",
  corner2:"river",
  corner3:"grass",
  corner4:"river",
  
  img:"tiles/tile map_riverEdge3.jpg",
};
riverEdge4={
  id:'riverEdge4',
  
  up:"river",
  rig:"rivergrass",
  down:"rivergrass",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"grass",
  
  img:"tiles/tile map_riverEdge4.jpg",
};
}

{//mountain
mountain={//top right
  id:'mountain',
  
  up:"mountain",
  rig:"mountain",
  down:"mountain",
  lef:"mountain",
  
  corner1:"mountain",
  corner2:"mountain",
  corner3:"mountain",
  corner4:"mountain",
  
  img:"tiles/tile map_mountain.jpg",
};

}

{//mountain sides (A is on top, B is below)
  mountainUpA={
    id:'mountainUpA',
  
    up:"mountain",
    rig:"mountainedge",
    down:"mountainUp",
    lef:"mountainedge",
  
    corner1:"mountain",
    corner2:"mountain",
    corner3:"edge",
    corner4:"edge",
  
    img:"tiles/tile map_mountainUpA.jpg",
  }
  mountainUpB={
    id:'mountainUpB',
  
    up:"mountainUp",
    rig:"edgegrass",
    down:"grass",
    lef:"edgegrass",
  
    corner1:"edge",
    corner2:"edge",
    corner3:"grass",
    corner4:"grass",
  
    img:"tiles/tile map_mountainUpB.jpg",
  }

  mountainLeft={
    id:'mountainLeft',
  
    up:"mountaingrass",
    rig:"grass",
    down:"mountaingrass",
    lef:"mountain",
  
    corner1:"grass",
    corner2:"mountain",
    corner3:"mountain",
    corner4:"grass",
  
    img:"tiles/tile map_mountainLeft.jpg",
  }
  mountainRight={
    id:'mountainRight',
  
    up:"grassmountain",
    rig:"mountain",
    down:"grassmountain",
    lef:"grass",
  
    corner1:"mountain",
    corner2:"grass",
    corner3:"grass",
    corner4:"mountain",
  
    img:"tiles/tile map_mountainRight.jpg",
  }
  mountainDown={
    id:'mountainDown',
  
    up:"grass",
    rig:"grassmountain",
    down:"mountain",
    lef:"grassmountain",
  
    corner1:"grass",
    corner2:"grass",
    corner3:"mountain",
    corner4:"mountain",
  
    img:"tiles/tile map_mountainRight.jpg",
  }
}
{//mountain corners (majority grass with bit of mountain)
mountainCorner1A={
  id:"mountainCorner1A",
  
  up:"grassmountain",
  rig:"mountainedge",
  down:"grassedge",
  lef:"grass",
  
  corner1:"mountain",
  corner2:"grass",
  corner3:"grass",
  corner4:"edge",

  img:"tiles/tile map_mountainCorner1A.jpg",
}
mountainCorner1B={
  id:"mountainCorner1B",
  
  up:"grassedge",
  rig:"edgegrass",
  down:"grass",
  lef:"grass",
  
  corner1:"edge",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",

  img:"tiles/tile map_mountainCorner1B.jpg",
}
mountainCorner2A={
  id:"mountainCorner2A",
  
  up:"mountaingrass",
  rig:"grass",
  down:"edgegrass",
  lef:"mountainedge",
  
  corner1:"grass",
  corner2:"mountain",
  corner3:"edge",
  corner4:"grass",

  img:"tiles/tile map_mountainCorner2A.jpg",
}
mountainCorner2B={
  id:"mountainCorner2B",
  
  up:"edgegrass",
  rig:"grass",
  down:"grass",
  lef:"edgegrass",
  
  corner1:"grass",
  corner2:"edge",
  corner3:"grass",
  corner4:"grass",

  img:"tiles/tile map_mountainCorner2B.jpg",
}
mountainCorner3={
  id:"mountainCorner3",
  
  up:"grass",
  rig:"grass",
  down:"mountaingrass",
  lef:"grassmountain",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"mountain",
  corner4:"grass",

  img:"tiles/tile map_mountainCorner3.jpg",
}
mountainCorner4={
  id:"mountainCorner4",
  
  up:"grass",
  rig:"grassmountain",
  down:"grassmountain",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"mountain",

  img:"tiles/tile map_mountainCorner4.jpg",
}
}
{//mountain edges (majority mountain with hints of grass)
  mountainEdge1={
    id:"mountainEdge1",
    
    up:"mountaingrass",
    rig:"grassmountain",
    down:"mountain",
    lef:"mountain",
    
    corner1:"grass",
    corner2:"mountain",
    corner3:"mountain",
    corner4:"mountain",
  
    img:"tiles/tile map_mountainEdge1.jpg",
  }
  mountainEdge2={
    id:"mountainEdge2",
    
    up:"grassmountain",
    rig:"mountain",
    down:"mountain",
    lef:"grassmountain",
    
    corner1:"mountain",
    corner2:"grass",
    corner3:"mountain",
    corner4:"mountain",
  
    img:"tiles/tile map_mountainEdge2.jpg",
  }
  mountainEdge3A={
    id:"mountainEdge3A",
    
    up:"mountain",
    rig:"mountain",
    down:"edgemountain",
    lef:"edge",
    
    corner1:"mountain",
    corner2:"mountain",
    corner3:"edge",
    corner4:"mountain",
  
    img:"tiles/tile map_mountainEdge3A.jpg",
  }
  mountainEdge3B={
    id:"mountainEdge3B",
    
    up:"edgemountain",
    rig:"edgegrass",
    down:"grassmountain",
    lef:"edgegrass",
    
    corner1:"mountain",
    corner2:"edge",
    corner3:"grass",
    corner4:"mountain",
  
    img:"tiles/tile map_mountainEdge3B.jpg",
  }
  mountainEdge4A={
    id:"mountainEdge4A",
    
    up:"mountain",
    rig:"mountainedge",
    down:"mountainedge",
    lef:"mountain",
    
    corner1:"mountain",
    corner2:"mountain",
    corner3:"mountain",
    corner4:"edge",
  
    img:"tiles/tile map_mountainEdge4A.jpg",
  }
  mountainEdge4B={
    id:"mountainEdge4B",
    
    up:"mountainedge",
    rig:"edgegrass",
    down:"mountaingrass",
    lef:"mountain",
    
    corner1:"edge",
    corner2:"mountain",
    corner3:"mountain",
    corner4:"grass",
  
    img:"tiles/tile map_mountainEdge4B.jpg",
  }
}
{// "bow ties"
mountainCorner1BmountainCorner3 = {//these names are getting out of hand
  id:"mountainCorner1BmountainCorner3",
    
  up:"grassedge",
  rig:"edgegrass",
  down:"mountaingrass",
  lef:"grassmountain",
  
  corner1:"edge",
  corner2:"grass",
  corner3:"mountain",
  corner4:"grass",

  img:"tiles/mountainCorner1BmountainCorner3.png",
}
mountainCorner2BmountainCorner4 = {
  id:"mountainCorner2BmountainCorner4",
    
  up:"edgegrass",
  rig:"grassmountain",
  down:"grassmountain",
  lef:"edgegrass",
  
  corner1:"grass",
  corner2:"edge",
  corner3:"grass",
  corner4:"mountain",

  img:"tiles/mountainCorner2BmountainCorner4.png",
}
}

var possibilities = [
    grass, rock, flowers1,flowers2, //4
    river, lilypad1, lilypad2, cattails, turt, //5
    mountain,mountain, //1

    riverRight,riverUp,riverDown,riverLeft, //4
    riverCorner1,riverCorner2,riverCorner3,riverCorner4, //4
    riverEdge1,riverEdge2,riverEdge3,riverEdge4, //4

    mountainUpA,mountainUpB,mountainLeft,mountainRight, //4
    mountainCorner1A,mountainCorner1B, mountainCorner2A,mountainCorner2B, mountainCorner3,mountainCorner4, //6
    mountainEdge1,mountainEdge2,mountainEdge3A,mountainEdge3B,mountainEdge4A,mountainEdge4B, //6

    mountainCorner1BmountainCorner3, mountainCorner2BmountainCorner4,//2

    altrock, altgrass, //2
    altlilypad2, altcattails, altturt, //3
    altriverUp, altriverRight, altriverDown, altriverLeft, //4
    altriverCorner1,altriverCorner2,altriverCorner3,altriverCorner4, //4
    altriverEdge1,altriverEdge2,altriverEdge3,altriverEdge4, //4

    altmountainUpB,altmountainLeft,altmountainRight,altmountainDown, //4
    altmountainCorner1A,altmountainCorner1B, altmountainCorner2A,altmountainCorner2B, altmountainCorner3,altmountainCorner4, //6
    altmountainEdge1,altmountainEdge2,altmountainEdge3B,altmountainEdge4B, //4

    riverCorner1mountainCorner3,mountainCorner2BriverRight,mountainCorner2BriverLeft,
    riverUpmountainCorner1A,riverUpmountainCorner1B,
    riverDownmountainCorner1A,riverDownmountainCorner1B,
];