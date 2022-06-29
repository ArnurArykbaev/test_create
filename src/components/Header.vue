<template>
  <header class="header">
    <v-app-bar v-show="toScroll" color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Photos</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    toScroll: false
  })
};
</script>

<style scoped></style>
