<template>
  <FirstScreen />
  <InfoSection />
</template>

<script>
import FirstScreen from "@/components/FirstScreen.vue";
import InfoSection from "@/components/InfoSection.vue";

export default {
  name: "Main",
  components: {
    FirstScreen,
    InfoSection
  },
  data: () => ({})
};
</script>

<style scoped></style>
