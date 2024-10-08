import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the logo texture
const textureLoader = new THREE.TextureLoader();
const logoTexture = textureLoader.load('./resources/logo.png', () => {
    // Create a material with the logo texture
    const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true });

    // Create a geometry
    const logoGeometry = new THREE.PlaneGeometry(2, 2);

    // Create a mesh with the geometry and material
    const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
    scene.add(logoMesh);

    // Animation function
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the logo
        logoMesh.rotation.y += 0.01;

        // Render the scene
        renderer.render(scene, camera);
    }

    // Start the animation
    animate();
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});