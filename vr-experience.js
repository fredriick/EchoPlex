import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true
});

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Add user interaction (mouse and keyboard events):
document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX / window.innerWidth * 2 - 1;
  const mouseY = event.clientY / window.innerHeight * 2 - 1;
  cube.rotation.x = mouseY * Math.PI / 2;
  cube.rotation.y = mouseX * Math.PI / 2;
});

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      cube.position.z -= 0.1;
      break;
    case 'ArrowDown':
      cube.position.z += 0.1;
      break;
  }
});

// Integrate with VR headsets using WebXR:
const xrManager = new THREE.WebXRManager(renderer, camera, scene);
xrManager.enabled = true;

xrManager.addEventListener('sessionstart', () => {
  console.log('VR session started');
});

xrManager.addEventListener('sessionend', () => {
  console.log('VR session ended');
});
