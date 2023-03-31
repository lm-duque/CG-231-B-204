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

// ** Cono **
const r = 1; // Radio del cono
const h = 3; // Altura del cono
var geometry = new THREE.ConeGeometry(r, h, 10); 
var material = new THREE.MeshPhongMaterial({ color: 0xCC99FF });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone)

// ** Posicionar cono en arista **
// Posición 1 - Figura (c)
geometry.rotateX(Math.PI / 2); // Rotar 90° en eje X
geometry.translate(0, 0, h / 2); // Trasladar h/2 en z

// Posición 2 - Figura (d)
geometry.translate(0, r, 0); // Trasladar r en y
geometry.rotateY(Math.PI / 2); // Rotar 90° en eje Y
var ang = Math.acos(h / Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2))); // Calcular ang por pitágoras
geometry.rotateZ(-ang); // Rotar -ang en eje Z

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