{//grass
altgrass={
  id:'grass',
  
  up:"grass",
  rig:"grass",
  down:"grass",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_grass.jpg",
};
altrock={
  id:'altrock',
  
  up:"grass",
  rig:"grass",
  down:"grass",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_rock.jpg",
};
}

{//rivers
altlilypad2 = {
  id:'lilypad2',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles alt/tile map alt_lilypad2.jpg",
};
altcattails = {
  id:'cattails',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles alt/tile map alt_cattails.jpg",
}
altturt = {
  id:'turt',
  
  up:"river",
  rig:"river",
  down:"river",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles alt/tile map alt_turt.jpg",
}
}

{//river sides
//river is on the right sidde
altriverRight={
  id:'riverRight',
  
  up:"grassriver",
  rig:"river",
  down:"grassriver",
  lef:"grass",
  
  corner1:"river",
  corner2:"grass",
  corner3:"grass",
  corner4:"river",
  
  img:"tiles alt/tile map alt_riverRight.jpg",
};
altriverLeft={
  id:'riverLeft',
  
  up:"rivergrass",
  rig:"grass",
  down:"rivergrass",
  lef:"river",
  
  corner1:"grass",
  corner2:"river",
  corner3:"river",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_riverLeft.jpg",
};
altriverDown={
  id:'riverDown',
  
  up:"grass",
  rig:"grassriver",
  down:"river",
  lef:"grassriver",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"river",
  corner4:"river",
  
  img:"tiles alt/tile map alt_riverDown.jpg",
};
altriverUp={
  id:'riverUp',
  
  up:"river",
  rig:"rivergrass",
  down:"grass",
  lef:"rivergrass",
  
  corner1:"river",
  corner2:"river",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_riverUp.jpg",
};
}
{//river corners (majority grass)
altriverCorner1={//top right
  id:'riverCorner1',
  
  up:"grassriver",
  rig:"rivergrass",
  down:"grass",
  lef:"grass",
  
  corner1:"river",
  corner2:"grass",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_riverCorner1.jpg",
};
altriverCorner2={//top left
  id:'riverCorner2',
  
  up:"rivergrass",
  rig:"grass",
  down:"grass",
  lef:"rivergrass",
  
  corner1:"grass",
  corner2:"river",
  corner3:"grass",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_riverCorner2.jpg",
};
altriverCorner3={//bottom left
  id:'riverCorner3',
  
  up:"grass",
  rig:"grass",
  down:"rivergrass",
  lef:"grassriver",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"river",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_riverCorner3.jpg",
};
altriverCorner4={//bottom right
  id:'riverCorner4',
  
  up:"grass",
  rig:"grassriver",
  down:"grassriver",
  lef:"grass",
  
  corner1:"grass",
  corner2:"grass",
  corner3:"grass",
  corner4:"river",
  
  img:"tiles alt/tile map alt_riverCorner4.jpg",
};
}
//for reference, river edges are like reverse river corners
// WHAT WAS I THINKING WITH THIS DOCUMENTATION
// OKAY RIVER EDGES ARE MAJORITY WATER WITH 1/4 LAND
{//river edges
altriverEdge1={
  id:'riverEdge1',
  
  up:"rivergrass",
  rig:"grassriver",
  down:"river",
  lef:"river",
  
  corner1:"grass",
  corner2:"river",
  corner3:"river",
  corner4:"river",
  
  img:"tiles alt/tile map alt_riverEdge1-08.jpg",
};
altriverEdge2={
  id:'riverEdge2',
  
  up:"grassriver",
  rig:"river",
  down:"river",
  lef:"grassriver",
  
  corner1:"river",
  corner2:"grass",
  corner3:"river",
  corner4:"river",
  
  img:"tiles alt/tile map alt_riverEdge1-06.jpg",
};
altriverEdge3={
  id:'riverEdge3',
  
  up:"river",
  rig:"river",
  down:"grassriver",
  lef:"rivergrass",
  
  corner1:"river",
  corner2:"river",
  corner3:"grass",
  corner4:"river",
  
  img:"tiles alt/tile map alt_riverEdge3.jpg",
};
altriverEdge4={
  id:'riverEdge4',
  
  up:"river",
  rig:"rivergrass",
  down:"rivergrass",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"grass",
  
  img:"tiles alt/tile map alt_riverEdge4.jpg",
};
}
{//moun asides
  altmountainUpB={
    id:'mountainUpB',
  
    up:"mountainUp",
    rig:"edgeriver",
    down:"river",
    lef:"edgeriver",
  
    corner1:"edge",
    corner2:"edge",
    corner3:"river",
    corner4:"river",
  
    img:"tiles alt/tile map alt_mountainUpB.jpg",
  }

  altmountainLeft={
    id:'mountainLeft',
  
    up:"mountainriver",
    rig:"river",
    down:"mountainriver",
    lef:"mountain",
  
    corner1:"river",
    corner2:"mountain",
    corner3:"mountain",
    corner4:"river",
  
    img:"tiles alt/tile map alt_mountainLeft.jpg",
  }
  altmountainRight={
    id:'mountainRight',
  
    up:"rivermountain",
    rig:"mountain",
    down:"rivermountain",
    lef:"river",
  
    corner1:"mountain",
    corner2:"river",
    corner3:"river",
    corner4:"mountain",
  
    img:"tiles alt/tile map alt_mountainRight.jpg",
  }
  altmountainDown={
    id:'mountainDown',
  
    up:"river",
    rig:"rivermountain",
    down:"mountain",
    lef:"rivermountain",
  
    corner1:"river",
    corner2:"river",
    corner3:"mountain",
    corner4:"mountain",
  
    img:"tiles alt/tile map alt_mountainRight.jpg",
  }
}
{//mountain corners (majority river with bit of mountain)
altmountainCorner1A={
  id:"mountainCorner1A",
  
  up:"rivermountain",
  rig:"mountainedge",
  down:"riveredge",
  lef:"river",
  
  corner1:"mountain",
  corner2:"river",
  corner3:"river",
  corner4:"edge",

  img:"tiles alt/tile map alt_mountainCorner1A.jpg",
}
altmountainCorner1B={
  id:"mountainCorner1B",
  
  up:"riveredge",
  rig:"edgeriver",
  down:"river",
  lef:"river",
  
  corner1:"edge",
  corner2:"river",
  corner3:"river",
  corner4:"river",

  img:"tiles alt/tile map alt_mountainCorner1B.jpg",
}
altmountainCorner2A={
  id:"mountainCorner2A",
  
  up:"mountainriver",
  rig:"river",
  down:"edgeriver",
  lef:"mountainedge",
  
  corner1:"river",
  corner2:"mountain",
  corner3:"edge",
  corner4:"river",

  img:"tiles alt/tile map alt_mountainCorner2A.jpg",
}
altmountainCorner2B={
  id:"mountainCorner2B",
  
  up:"edgeriver",
  rig:"river",
  down:"river",
  lef:"edgeriver",
  
  corner1:"river",
  corner2:"edge",
  corner3:"river",
  corner4:"river",

  img:"tiles alt/tile map alt_mountainCorner2B.jpg",
}
altmountainCorner3={
  id:"mountainCorner3",
  
  up:"river",
  rig:"river",
  down:"mountainriver",
  lef:"rivermountain",
  
  corner1:"river",
  corner2:"river",
  corner3:"mountain",
  corner4:"river",

  img:"tiles alt/tile map alt_mountainCorner3.jpg",
}
altmountainCorner4={
  id:"mountainCorner4",
  
  up:"river",
  rig:"rivermountain",
  down:"rivermountain",
  lef:"river",
  
  corner1:"river",
  corner2:"river",
  corner3:"river",
  corner4:"mountain",

  img:"tiles alt/tile map alt_mountainCorner4.jpg",
}
}
{//mountain edges (majority mountain with hints of river)
  altmountainEdge1={
    id:"mountainEdge1",
    
    up:"mountainriver",
    rig:"rivermountain",
    down:"mountain",
    lef:"mountain",
    
    corner1:"river",
    corner2:"mountain",
    corner3:"mountain",
    corner4:"mountain",
  
    img:"tiles alt/tile map alt_mountainEdge1.jpg",
  }
  altmountainEdge2={
    id:"mountainEdge2",
    
    up:"rivermountain",
    rig:"mountain",
    down:"mountain",
    lef:"rivermountain",
    
    corner1:"mountain",
    corner2:"river",
    corner3:"mountain",
    corner4:"mountain",
  
    img:"tiles alt/tile map alt_mountainEdge2.jpg",
  }
  altmountainEdge3B={
    id:"mountainEdge3B",
    
    up:"edgemountain",
    rig:"edgeriver",
    down:"rivermountain",
    lef:"edgeriver",
    
    corner1:"mountain",
    corner2:"edge",
    corner3:"river",
    corner4:"mountain",
  
    img:"tiles alt/tile map alt_mountainEdge3B.jpg",
  }
  altmountainEdge4B={
    id:"mountainEdge4B",
    
    up:"mountainedge",
    rig:"edgeriver",
    down:"mountainriver",
    lef:"mountain",
    
    corner1:"edge",
    corner2:"mountain",
    corner3:"mountain",
    corner4:"river",
  
    img:"tiles alt/tile map alt_mountainEdge4B.jpg",
  }
}

{//'bow ties'
  riverCorner1mountainCorner3={
    id:"riverCorner1mountainCorner3",
    
    up:"grassriver",
    rig:"rivergrass",
    down:"mountaingrass",
    lef:"grassmountain",
    
    corner1:"river",
    corner2:"grass",
    corner3:"mountain",
    corner4:"grass",
  
    img:"tiles alt/riverCorner1mountainCorner3.jpg",
  }
  mountainCorner2BriverRight={
    id:"mountainCorner2BriverRight",
    
    up:"edgeriver",
    rig:"river",
    down:"grassriver",
    lef:"edgegrass",
    
    corner1:"river",
    corner2:"edge",
    corner3:"grass",
    corner4:"river",
  
    img:"tiles alt/mopuntainCorner2BriverRight.jpg.jpg",
  }
  mountainCorner2BriverLeft={
    id:"mountainCorner2BriverLeft",
    
    up:"edgegrass",
    rig:"grass",
    down:"rivergrass",
    lef:"edgeriver",
    
    corner1:"grass",
    corner2:"edge",
    corner3:"river",
    corner4:"grass",
  
    img:"tiles alt/mountainCorner2BriverLeft.jpg",
  }
  riverUpmountainCorner1A = {
    id:"riverUpmountainCorner1A",
    
    up:"grassmountain",
    rig:"mountainedge",
    down:"riveredge",
    lef:"grassriver",
    
    corner1:"mountain",
    corner2:"grass",
    corner3:"river",
    corner4:"edge",
  
    img:"tiles alt/riverUpmountainCorner1A.jpg",
  }
  riverDownmountainCorner1A = {
    id:"riverDownmountainCorner1A",
    
    up:"rivermountain",
    rig:"mountainedge",
    down:"grassedge",
    lef:"rivergrass",
    
    corner1:"mountain",
    corner2:"river",
    corner3:"grass",
    corner4:"edge",
  
    img:"tiles alt/riverDownmountainCorner1A.jpg",
  }
  riverDownmountainCorner1B = {
    id:"riverDownmountainCorner1B",
    
    up:"grassedge",
    rig:"edgeriver",
    down:"river",
    lef:"grassriver",
    
    corner1:"edge",
    corner2:"grass",
    corner3:"river",
    corner4:"river",
  
    img:"tiles alt/riverDownmountainCorner1B.jpg",
  }
  riverUpmountainCorner1B = {
    id:"riverUpDownmountainCorner1B",
    
    up:"riveredge",
    rig:"edgegrass",
    down:"grass",
    lef:"rivergrass",
    
    corner1:"edge",
    corner2:"river",
    corner3:"grass",
    corner4:"grass",

    img:"tiles alt/riverUpmountainCorner1B.jpg",
  }
  }
