<template>
  <div class="w-full h-full">
    <Renderer class="w-full h-full" ref="renderer" resize="window">
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <LambertMaterial />
        </Box>
      </Scene>
    </Renderer>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const renderer = ref();
</script>
