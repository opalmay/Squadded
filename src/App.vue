<template>
  <div id="app">
    <section class="main-app">
      <section class="container">
        <router-view />
      </section>
    </section>
  </div>
</template>
<script>
export default {
  metaInfo: {
    titleTemplate: "Squadded | %s",
  },
};
</script>