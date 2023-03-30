var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
// *Cono*

/*var geometry = new THREE.ConeGeometry(1, 3, 10);
var material = new THREE.MeshPhongMaterial({ color: 0xCC99FF });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone)
cone.position.y = 1.5*/

lado = 1; 

 // * Cubo 1 *

        // BoxGeometry (hacer la geometria)
        var geometry1 = new THREE.BoxGeometry( lado,lado,lado);
        // Material aplicar al cubo (green)
        //var material = new THREE.MeshNormalMaterial();
        var material1 = new THREE.MeshNormalMaterial( { color: 0x00ff00} );
        // Aplicar material para BoxGeometry
        var cube1 = new THREE.Mesh( geometry1, material1 );
        // Adicionar el cubo a la escena
        scene.add( cube1 );

 // * Cubo 2 *

        // BoxGeometry (hacer la geometria)
        var geometry2 = new THREE.BoxGeometry( lado,lado,lado );
        // Material aplicar al cubo (green)
        //var material2 = new THREE.MeshNormalMaterial();
        var material2 = new THREE.MeshNormalMaterial( { color: 0x00ff00} );
        // Aplicar material para BoxGeometry
        var cube2 = new THREE.Mesh( geometry2, material2 );
        // Adicionar el cubo a la escena
        scene.add( cube2 );

 // * Cubo 3*

        // BoxGeometry (hacer la geometria)
        var geometry3 = new THREE.BoxGeometry( lado,lado,lado );
        // Material aplicar al cubo (green)
        //var material = new THREE.MeshNormalMaterial();
        var material3 = new THREE.MeshNormalMaterial( { color: 0x00ff00} );
        // Aplicar material para BoxGeometry
        var cube3 = new THREE.Mesh( geometry3, material3 );
        // Adicionar el cubo a la escena
        scene.add( cube3 );
  // Escalar
       geometry2.scale(1/2, 1/2, 1/2);
      geometry3.scale(1/4, 1/4, 1/4 );

  // Transladarlo
        geometry1.translate(lado/2,lado/2,lado/2 );
        geometry2.translate(lado/2,lado + lado/4,lado/2 );
        geometry3.translate( lado/2 ,lado + lado/2 + lado/8, lado/2  );


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();