import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 2, 1 );
const material = new THREE.MeshDepthMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry1 = new THREE.BoxGeometry( 1.2, 1.2, 1.2 );
const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );

camera.position.z = 2;


function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.00;
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01
    cube.rotation.z += 0.01
    console.log(cube.rotation.x);

    renderer.render( scene, camera );
}

animate();








// // Создаем сцену
// const scene = new THREE.Scene();

// // Создаем камеру
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Создаем рендер и устанавливаем размеры
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(850, 600); // Размер сцены 800x600

// // Добавляем рендер в документ
// document.body.appendChild(renderer.domElement);

// // Анимация
// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }
// animate();








// // Создаем сцену
// const scene = new THREE.Scene();

// // Создаем камеру
// const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
// camera.position.z = 5;

// // Создаем рендер и устанавливаем размеры
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(800, 600);

// // Находим элемент div и добавляем туда рендер
// const container = document.getElementById('graf');
// container.appendChild(renderer.domElement);


// const geometry = new THREE.BoxGeometry();

// // Создаем материал
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// // Создаем меш (комбинируем геометрию и материал)
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// // Анимация
// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     camera.rotation.z += 0.1;
//     //camera.rotation.x += 1;
// }
// animate();