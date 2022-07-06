<template>
  <v-footer class="bg-black pt-10">
    <v-row justify="center" no-gutters>
      <v-btn color="white" variant="text" class="mx-2" rounded="xl">
        {{ link }}
      </v-btn>
      <v-col class="text-center text-white mt-4" cols="12">
        {{ new Date().getFullYear() }} —
        <a href="https://github.com/ArnurArykbaev"
          ><strong>ArnurArykbaev</strong></a
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
