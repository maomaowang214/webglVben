<template>
  <div>
    <Renderer ref="renderer">
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
