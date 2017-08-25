//document.getElementById('mapmenu').addEventListener('click',showmap);



var game = "";
console.info("game1: ", game);

function showmap()
{
  game = document.getElementById("game").innerHTML;
console.info("game2: ", game);

      document.getElementById("game").innerHTML = " ";
console.info("game3: ", game);
      //document.getElementById("map").innerHTML = '<a-entity position="0 2.2 4"> <a-entity camera look-controls wasd-controls> <a-entity position="0 0 -3" geometry="primitive: ring; radiusOuter: 0.30; radiusInner: 0.20;" material="color: cyan; shader: flat" cursor="maxDistance: 30; fuse: true"> </a-entity> </a-entity> </a-entity>  <a-entity position="0 -1 2" id="closemapmenu" onclick= closeMap();> <a-entity  id="closemapmenu" mixin="cube green" onclick= closeMap();> </a-entity> <a-text  id="closemapmenu" value="Close the map" color="#BBB" position="-0.3 1 0" scale="1.5 1.5 1.5" onclick= closeMap();></a-text> </a-entity> <a-sky color="black"></a-sky> </a-entity>';
	document.getElementById("map").innerHTML = '<a-entity position="0 2.2 4"> <a-entity camera look-controls wasd-controls> <a-entity position="0 0 -3" geometry="primitive: ring; radiusOuter: 0.30; radiusInner: 0.20;" material="color: cyan; shader: flat" cursor="maxDistance: 30; fuse: true"> </a-entity> </a-entity> </a-entity>  <a-entity position="0 -1 2" id="closemapmenu"> <a-entity  id="closemapmenu" mixin="cube green"  onclick= closeMap();>  </a-entity> <a-text  id="closemapmenu" value="Close the map" color="#BBB" position="-0.3 1 0" scale="1.5 1.5 1.5"></a-text> </a-entity> <a-entity id="city"><a-entity geometry="primitive: box" position=" -1 0 0" material="color: grey" scale="0.5 2 0.5" wireframe></a-entity> <a-entity geometry="primitive: box" position=" 1 0 0" material="color: grey" scale="0.5 1.3 0.5" wireframe></a-entity> <a-entity geometry="primitive: box" position=" -1 -0.5 -1" material="color: grey" scale="0.5 1 0.5" wireframe></a-entity> <a-entity geometry="primitive: box" position=" 1 -0.5 -1" material="color: grey" scale="0.5 0.3 0.5" wireframe></a-entity> <a-entity geometry="primitive: box" position=" -1 -0.5 -3" material="color: grey" scale="0.5 1 3" wireframe></a-entity> </a-entity><a-sky color="black"></a-sky> </a-entity> ';	
      isMapOn = true;
    
//document.getElementById('closemapmenu').addEventListener('click',closeMap);
}

function closeMap()
{
  document.getElementById("map").innerHTML = " ";
  document.getElementById("game").innerHTML = game;
  //game = "";
console.info("game4: ", game);
}
