<script lang="ts" setup>
// const content = ref<HTMLDivElement>();
// const msg = ref("hidden");

// const { x, y } = useMouse();

// watchEffect(() => console.log(msg.value))

// onMounted(() => {
//   useEventListener(document, "visibilitychange", (e) => {
//     console.log("document.visibilityState => ", document.visibilityState);
//     if (document.visibilityState === "visible") {
//       msg.value = "visible";
//     }
//   });
//   useEventListener(content, "click", (e) => {
//     console.log("tıkladın ===>", e);
//   });
// });
</script>

<template>
  <Head>
    <Title>Currency and Commodity Calculator</Title>
    <Meta name="description" content="Calculator for foreign currency and commodity units" />
    <Meta name="keywords" content="currency, usd, dollar, eur, euro, gold, silver" />

    <!-- <Meta property="og:url" content="https://sharkcoder.com/html/Meta" />
    <Meta property="og:title" content="Döviz ve Altın" />
    <Meta property="og:type" content="" />
    <Meta property="og:image" content="https://sharkcoder.com/public/img/content/tags_main.jpeg" />
    <Meta property="og:site_name" content="Shark Coder" />
    <Meta property="og:description " content="Calculator for foreign currency and commodity units" /> -->
    <Meta property="og:locale" content="en_US" />
    <Meta property="og:locale:alternate" content="tr_TR" />
  </Head>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
