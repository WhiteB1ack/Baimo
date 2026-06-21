console.log("preview loaded");
import * as THREE from "three";
// import { uniform } from "three/tsl";

const canvas = document.querySelector("#shaderCanvas")
// const sourceBlock = document.querySelector("#shaderSource");

const fragmentShader =
    await fetch("./shader.frag")
    .then(res => res.text());

// sourceBlock.textContent = fragmentShader;

// 顶点着色器
const vertexShader = `
void main(){
  gl_Position = vec4(position, 1.0);
}`;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.Camera()

// Shader Material
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,

  uniforms: {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2() }
  }
})

// 全屏平面
const mesh = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  material
)

scene.add(mesh)

// Resize
function resize(){
  const width = canvas.clientWidth
  const height = canvas.clientHeight

  renderer.setSize(
    width,
    height,
    false
  )

  material.uniforms.u_resolution.value.set(
    width,
    height
  )
}

resize()

window.addEventListener(
  "resize",
  resize
)

// Clock
const clock = new THREE.Clock()

// Render Loop
function tick(){
  material.uniforms.u_time.value = clock.getElapsedTime()

  renderer.render(scene, camera)

  requestAnimationFrame( tick )
}

tick()
