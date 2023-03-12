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
    <Title>Döviz ve Altın</Title>
    <Meta
      name="description"
      content="The HTML Meta tag is an element that resides within the HTML head tag."
    />
    <Meta name="keywords" content="html, Meta, tag, element" />
    <Meta name="author" content="www.techonthenet.com" />
    <Meta property="og:url" content="https://sharkcoder.com/html/Meta" />
    <Meta property="og:title" content="Meta Tags and Other Useful HTML Tags" />
    <Meta property="og:type" content="article" />
    <Meta property="og:image" content="https://sharkcoder.com/public/img/content/tags_main.jpeg" />
    <Meta property="og:site_name" content="Shark Coder" />
    <Meta
      property="og:description "
      content="Learn the most useful and up-to-date Meta tags to provide search engines with information about your web page"
    />
    <Meta property="og:locale" content="en_US" />
    <Meta property="og:locale:alternate" content="en_GB" />
  </Head>

  <NuxtLayout>
    
    <NuxtPage />
  </NuxtLayout>
</template>
