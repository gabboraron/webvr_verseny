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
	document.getElementById("map").innerHTML = '<a-entity id="map" position="" rotation="" scale="" visible=""><a-entity position="0 2.2 4" rotation="" scale="" visible=""> <a-entity camera="" look-controls="" wasd-controls="" position="" rotation="" scale="" visible=""> <a-entity position="0 0 -3" geometry="primitive: ring; radiusOuter: 0.30; radiusInner: 0.20;" material="color: cyan; shader: flat" cursor="maxDistance: 30; fuse: true" rotation="" scale="" visible="" raycaster=""> </a-entity> </a-entity> </a-entity>  <a-entity position="0 -1 2" id="closemapmenu" rotation="" scale="" visible=""> <a-entity id="closemapmenu" mixin="cube green" onclick="closeMap();" position="" rotation="" scale="" visible="" geometry="" material="">  </a-entity> <a-text id="closemapmenu" value="Close the map" color="#BBB" position="-0.3 1 0" scale="1.5 1.5 1.5" rotation="" visible="" text=""></a-text> </a-entity> <a-entity id="city" position="" rotation="" scale="" visible=""><a-entity id="city" position="0 0 0" rotation="0 0 0" scale="1 1 1" visible="true"><a-entity geometry="primitive:box" position="-1 0 0" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-2.177 0 0" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-6.514 0 2.893" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-2.177 0 2.904" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-3.314 0 2.904" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-14.425 0 1.545" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-14.425 0 1.545" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-14.353 0 2.43" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-14.353 0 2.43" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-4.396 0 2.904" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-4.396 0 -0.062" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-3.578 0 -0.062" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-2.818 0 -0.062" material="color:grey" scale="0.5 2 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity> <a-entity geometry="primitive:box" position="1 -0.399 0" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="1 -0.424 6.545" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-5.215 -0.424 2.937" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-5.799 -0.424 7.681" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-3.525 -0.424 7.681" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-3.525 -0.424 8.249" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-3.525 -0.424 8.249" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-10.728 -0.424 2.623" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-5.215 -0.424 0.014" material="color:grey" scale="0.5 1.3 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity> <a-entity geometry="primitive:box" position="-1 -0.5 -1" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-1 -0.5 2.984" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="1.073 -0.5 2.984" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="1.073 -0.5 4.102" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="1.073 -0.558 4.102" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="1.073 -0.537 5.019" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="1.073 -0.527 5.964" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-5.825 -0.576 7.007" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-6.484 -0.538 7.007" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-1.919 -0.501 7.007" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-2.786 -0.545 7.007" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-3.54 -0.528 7.007" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-6.868 -0.5 7.013" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-7.546 -0.5 7.013" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-7.546 -0.5 6.306" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-7.546 -0.5 5.605" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-7.546 -0.5 4.948" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-7.546 -0.5 4.948" material="color:grey" scale="0.5 1 0.5" wireframe="" rotation="0 0 0" visible="true"></a-entity> <a-entity geometry="primitive:box" position="1 -0.5 -1" material="color:grey" scale="0.5 0.3 0.5" wireframe="" rotation="0 0 0" visible="true" id="emelet2"></a-entity><a-entity geometry="primitive:box" position="1 -0.795 -1" material="color:grey" scale="0.5 0.3 0.5" wireframe="" rotation="0 0 0" visible="true" id="emelet3"></a-entity><a-entity geometry="primitive:box" position="1 -0.795 -1" material="color:grey" scale="0.5 0.3 0.5" wireframe="" rotation="0 0 0" visible="true" id="emelet4"></a-entity><a-entity geometry="primitive:box" position="1 -0.5 -1" material="color:grey" scale="0.5 0.3 0.5" wireframe="" rotation="0 0 0" visible="true" id="emelet1"></a-entity> <a-entity geometry="primitive:box" position="-1 -0.5 -3" material="color:grey" scale="0.5 1 3" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-8.321 -0.557 3.859" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -60.67 -1.67" visible="true"></a-entity><a-entity geometry="primitive:box" position="-8.321 -0.557 3.859" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -60.67 -1.67" visible="true"></a-entity><a-entity geometry="primitive:box" position="-10.954 -0.557 5.306" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -60.67 -1.67" visible="true"></a-entity><a-entity geometry="primitive:box" position="-10.954 -0.557 5.306" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -60.67 -1.67" visible="true"></a-entity><a-entity geometry="primitive:box" position="-13.578 -0.53 6.804" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -60.67 -1.67" visible="true"></a-entity><a-entity geometry="primitive:box" position="-13.578 -0.53 6.804" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -60.67 -1.67" visible="true"></a-entity><a-entity geometry="primitive:box" position="-7.377 -0.557 0.38" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -68.36 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-7.377 -0.557 0.38" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -68.36 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-10.072 -0.557 0.396" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -107.74 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-10.072 -0.557 0.396" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -107.74 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-12.486 -0.557 2.055" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -107.74000000000001 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-12.919 -0.557 -0.508" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -107.74 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-12.919 -0.557 -0.508" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -107.74 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-15.842 -0.557 -1.475" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -107.74 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-15.842 -0.557 -1.475" material="color:grey" scale="0.5 1 3" wireframe="" rotation="-0.88 -107.74 -1.88" visible="true"></a-entity><a-entity geometry="primitive:box" position="-1 -0.5 5.106" material="color:grey" scale="0.5 1 3" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="-1 -0.5 8.587" material="color:grey" scale="0.5 1 3" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="0.67 -0.5 8.587" material="color:grey" scale="0.5 1 3" wireframe="" rotation="0 0 0" visible="true"></a-entity><a-entity geometry="primitive:box" position="1.019 -0.5 -r3" material="color:grey" scale="0.5 1 3" wireframe="" rotation="0 0 0" visible="true"></a-entity> <a-entity id="tree" position="-4.518 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-2" position="-5.623 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-4" position="-6.171 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-5" position="-6.745 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-6" position="-7.325 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-23" position="-7.325 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-7" position="-8.535 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-8" position="-8.535 -3.002 2.304" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-9" position="-8.535 -3.002 2.9" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-10" position="-8.535 -3.002 3.6" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-11" position="-8.535 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-12" position="-7.929 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-13" position="-7.359 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-24" position="-7.359 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-14" position="-5.952 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-15" position="-5.331 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-16" position="-4.714 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-17" position="-4.133 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-18" position="-3.58 -3.002 4.248" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-19" position="-3.58 -3.002 3.691" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-20" position="-3.58 -3.002 3.127" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-21" position="-3.58 -3.002 2.497" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-22" position="-3.58 -3.002 2.497" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity><a-entity id="tree-3" position="-4.487 -3.002 1.729" rotation="0 0 0" scale="1 1 1" visible="true"> <a-entity geometry="primitive:sphere" position="2 2 2" material="color:grey" scale="0.05 0.5 0.05" wireframe="" rotation="0 20 0" visible="true"></a-entity> <a-entity geometry="primitive:sphere" position="2 2.6 2" material="color:grey" scale="0.25 0.25 0.25" wireframe="" rotation="0 0 0" visible="true"></a-entity></a-entity></a-entity> </a-entity><a-sky color="black" position="" rotation="" scale="" visible="" material="" geometry=""></a-sky>  </a-entity>';	
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
