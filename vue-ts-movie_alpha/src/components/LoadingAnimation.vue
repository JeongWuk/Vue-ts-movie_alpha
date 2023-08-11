<template>
  <div
    ref="canvasContainer"
    class="canvas-container">
    <canvas class="canvas"></canvas>
    <h1>Loading...</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const canvasContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  const canvas = canvasContainer.value!.querySelector('.canvas') as HTMLElement

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)

  canvasContainer.value!.appendChild(renderer.domElement)

  const loader = new GLTFLoader()
  loader.load('shiba/scene.gltf', (gltf: GLTF) => {
    scene.add(gltf.scene)

    const render = (time: number) => {
      time *= 0.003

      gltf.scene.rotation.y = time

      renderer.render(scene, camera)

      requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
  })
})
</script>

<style scoped lang="scss">
.canvas-container {
  position: absolute;
  z-index: 10;
  h1 {
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 50px;
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #000000,
      0 0 20px #000000,
      0 0 25px #000000,
      0 0 30px #000000,
      0 0 35px #000000;
  }
}
</style>
