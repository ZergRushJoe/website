/**
 * Created by jkarp on 5/30/2017.
 */
let scene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshNormalMaterial();
let cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

function render()
{
    requestAnimationFrame( render );
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render( scene, camera );
}
render();