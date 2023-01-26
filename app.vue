<template>
  <Head>
    <Title>Döviz ve Altın</Title>
  </Head>
  <audio controls src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>
  <h1>{{ content }}</h1>
  <div>pos: {{x}}, {{y}}</div>

  <NuxtPage />
</template>

<script lang="ts" setup>
import "@formkit/themes/genesis";

const content = ref();

const { x, y } = useMouse()


// useEventListener(document, "visibilitychange", (e) => {
//   console.log(e);
 
// });

</script>
