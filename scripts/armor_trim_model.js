import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const path = '../../assets/armor_trim/';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer( {alpha: true, antialiasl: true} );
renderer.setClearColor(0x000000, 0);
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, renderer.domElement );

document.getElementById('containerModel').appendChild( renderer.domElement );

const aLight = new THREE.AmbientLight(0xFFFFFF, 3);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 5);
pLight.position.set(0, -3, 7);
scene.add(pLight);

const helper = new THREE.PointLightHelper(pLight, 2, 0xff0000);
scene.add(helper);

let loader = new GLTFLoader();
let obj = null;

loader.load('../../assets/steve/model.gltf', function(gltf) {
    obj = gltf;
    obj.scene.scale.set (1.3, 1.3, 1.3);

    scene.add(obj.scene)
});

function animate() {
    requestAnimationFrame( animate );
    if ( obj ) {
        //obj.scene.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}
animate();