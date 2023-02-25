<template>
  <Head>
    <Title>Döviz ve Altın</Title>
  </Head>
  <!-- <audio controls src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio> -->  
  <!-- <div>pos: {{ x }}, {{ y }}</div> -->
  
  <h1>{{ msg }}</h1>
  <div ref="content">Click and see the message on console</div>

  <NuxtPage />
</template>

<script lang="ts" setup>
import "@formkit/themes/genesis";

const content = ref<HTMLDivElement>();
const msg = ref("hidden");

// const { x, y } = useMouse();

// watchEffect(() => console.log(msg.value))

onMounted(() => {
  useEventListener(document, "visibilitychange", (e) => {
    console.log("document.visibilityState => ", document.visibilityState);
    if (document.visibilityState === "visible") {
      msg.value = "visible";
    }
  });
  useEventListener(content, "click", (e) => {
    console.log("tıkladın ===>", e);
  });
  
});
</script>
