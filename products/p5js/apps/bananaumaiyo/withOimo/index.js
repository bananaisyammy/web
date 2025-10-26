import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//愉快なEventListenerたち
document.body.addEventListener("click",onClick,false);
document.body.addEventListener("mousemove", rayTest);

//windowのサイズ
const width = window.innerWidth;
const height = window.innerHeight;

//oimojs用world
var world = null;

//Threejsとoimojsの共用リスト
var objects = []

//paddel用
var mouse = new THREE.Vector2();
var ray = new THREE.Raycaster();
var mouseVector;

//形を指定しようと思った痕跡
var shapeType = 0;

//カメラ移動用
var cameraPos = [0,100,1000]
var keys = {w:false,s:false,d:false,a:false}

// レンダラー・シーン・カメラを作成
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
renderer.setSize(width, height);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height,1,10000);
camera.position.set(0, 100, +1000);
camera.quaternion.set(90,0,0)
const controls = new OrbitControls(camera, document.body);
//デフォルトマテリアル
const material = new THREE.MeshStandardMaterial({color: 0xFF0000});
//愉快な光源たち
const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
directionalLight.position.set(1, 1, 1);
const light = new THREE.AmbientLight(0xFFFFFF, 0.3);
scene.add(light);
//oimo用world
world = new OIMO.World({ 
  timestep: 1/60, 
  iterations: 8, 
  broadphase: 2, // 1 brute force, 2 sweep and prune, 3 volume tree
  worldscale: 1, // scale full world 
  random: true,  // randomize sample
  info: false,   // calculate statistic or not
  gravity: [0,-9.8,0] 
});
//ゆかいなゆか
objects.push([
  world.add({size:[50000, 40, 50000], pos:[0,-10,0], world:world,collidesWith: 0xffffff}),new THREE.Mesh(new THREE.BoxGeometry(50000, 40, 50000), new THREE.MeshStandardMaterial({color: 0x888888}))])
//先陣を切る赤ボール
objects.push([
  world.add({
  type:'sphere', // type of shape : sphere, box, cylinder 
  size:[10,60,10], // size of shape
  pos:[5,500,0], // start position in degree
  rot:[0,0,90], // start rotation in degree
  move:true, // dynamic or statique
  density: 1,
  friction: 0.2,
  restitution: 0.2,
  belongsTo: 1, // The bits of the collision groups to which the shape belongs.
  collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
}),new THREE.Mesh(new THREE.SphereGeometry(10,60,10), material)])

// 毎フレーム時に実行されるループイベントです	// シーンに追加
scene.add(directionalLight);
var paddel = new THREE.Mesh(new THREE.SphereGeometry(10, 30, 30), material);
scene.add(paddel);
for(let i=0;i<objects.length;i++){
  scene.add(objects[i][1]);
}
const hello_hello_hello = setInterval(() => { world.step(); }, 1000/480)
tick();
// 毎フレーム時に実行されるループイベントです
function tick() {
 
//mesh.rotation.y += 0.01;
  for(let i=0;i<objects.length;i++){
    objects[i][1].position.copy( objects[i][0].getPosition() );
    objects[i][1].quaternion.copy( objects[i][0].getQuaternion() );
  }

  renderer.render(scene, camera); // レンダリング
  requestAnimationFrame(tick);
}

function onClick(e){
  //alert("whats up!")
  
  switch(shapeType){
    case 0:
      objects.push([
      world.add({
        type:'sphere', // type of shape : sphere, box, cylinder 
        size:[10,10,10], // size of shape
        pos:[mouseVector.x,mouseVector.y,mouseVector.z], // start position in degree
        rot:[0,0,90], // start rotation in degree
        move:true, // dynamic or statique
        density: 1,
        friction: 0.2,
        restitution: 0.2,
        belongsTo: 1, // The bits of the collision groups to which the shape belongs.
        collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
      }),new THREE.Mesh(new THREE.SphereGeometry(10, 30, 30), material)]);
      break
  }
  scene.add(objects[objects.length-1][1]);
  
}

function rayTest(e) {
        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

        ray.setFromCamera( mouse, camera );
        var intersects = ray.intersectObjects( scene.children, true );
        if ( intersects.length) {
            paddel.position.copy( intersects[0].point.add(new THREE.Vector3( 0, 20, 0 )) );
            mouseVector = intersects[0].point.add(new THREE.Vector3( 0, 20, 0 ))
            //console.log(intersects[0].point.add(new THREE.Vector3( 0, 20, 0 )))
        }
}


