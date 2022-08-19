<template>
  <div class="w-full h-full">
    <Renderer
      class="w-full h-full"
      ref="renderer"
      :alpha="true"
      :antialias="true"
      :orbitCtrl="true"
      resize="window"
    >
      <Camera :position="{ z: 5 }" />
      <Scene>
        <AmbientLight color="#ffffff" />
        <PointLight :position="{ z: 50 }" />
      </Scene>
    </Renderer>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { loadGltf, onUnDispose } from './ts/initThree';
  import { initPane } from './ts/tweakpane';

  const renderer = ref();

  onMounted(() => {
    loadGltf(renderer.value);
    render();

    // 控制面板
    initPane(renderer.value);
  });

  // 渲染
  function render() {
    renderer.value.onBeforeRender(() => {
      console.log(123);
    });
  }

  // 离开页面
  onUnmounted(() => {
    onUnDispose();
  });
</script>
