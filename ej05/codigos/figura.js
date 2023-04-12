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

// ** Cubo y esfera **
/*
* BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
    width (float): Ancho; es decir, la longitud de las aristas paralelas al eje X. Opcional; el valor predeterminado es 1.
    height (float): altura; es decir, la longitud de las aristas paralelas al eje Y. Opcional; el valor predeterminado es 1.
    depth (float): profundidad; es decir, la longitud de las aristas paralelas al eje Z. Opcional; el valor predeterminado es 1.
    widthSegments (integer): Número de caras rectangulares segmentadas a lo largo del ancho de los lados. Opcional; el valor predeterminado es 1.
    heightSegments (integer): Número de caras rectangulares segmentadas a lo largo de la altura de los lados. Opcional; el valor predeterminado es 1.
    depthSegments (integer): Número de caras rectangulares segmentadas a lo largo de la profundidad de los lados. Opcional; por defecto es 1.

* SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)
    radius: radio de la esfera. El valor predeterminado es 1.
    widthSegments: número de segmentos horizontales. El valor mínimo es 3 y el predeterminado es 32.
    heightSegments: número de segmentos verticales. El valor mínimo es 2 y el valor predeterminado es 16.
    phiStart: especifique el ángulo inicial horizontal. El valor predeterminado es 0.
    phiLength: especifique el tamaño del ángulo de barrido horizontal. El valor predeterminado es Math.PI * 2.
    thetaStart: especifique el ángulo de inicio vertical. El valor predeterminado es 0.
    thetaLength: especifique el tamaño del ángulo de barrido vertical. El valor predeterminado es Math.PI.
*/

var box_geometry = new THREE.BoxGeometry(); //Default width, length, height of 1
var sphere_geometry = new THREE.SphereGeometry(0.5, 32, 32); //radius of 0.5, with 32 horizontal and vertical segments
var cylinder_geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5); //0.1 radius at top and bottom with a height of 0.5

var material = new THREE.MeshLambertMaterial({ color: new THREE.Color(0.9, 0.55, 0.4) });

var box = new THREE.Mesh(box_geometry, material);
var sphere = new THREE.Mesh(sphere_geometry, material);
sphere.position.y += 1;
var cylinder = new THREE.Mesh(cylinder_geometry, material);
cylinder.position.y += 1.75;

scene.add(box);
scene.add(sphere);
scene.add(cylinder);
/*
box.scale.multiplyScalar(0.5);
sphere.scale.multiplyScalar(0.5);
cylinder.scale.multiplyScalar(0.5);
*/
var pile = new THREE.Object3D();
pile.scale.multiplyScalar(0.5);

pile.add(box);
pile.add(sphere);
pile.add(cylinder);
scene.add(pile);

//cylinder.rotation.z -= Math.PI * 0.25;

box.matrixAutoUpdate = false;
sphere.matrixAutoUpdate = false;
cylinder.matrixAutoUpdate = false;

var sphere_matrix = new THREE.Matrix4().makeTranslation(0.0, 1.0, 0.0);
sphere.applyMatrix(sphere_matrix);

var cylinder_matrix = sphere_matrix.clone();
cylinder_matrix.multiply(new THREE.Matrix4().makeTranslation(0.0, 0.75, 0.0));
cylinder.applyMatrix(cylinder_matrix);

// ** Luz **
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

// ** Cuadrícula **
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