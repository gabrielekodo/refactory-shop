<template>
  <div>
    <div>
      <HeaderSection />
    </div>

    <div>
      <BodySection />
    </div>
    <div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
import BodySection from "./BodySection.vue";
import FooterSection from "./FooterSection.vue";
export default {
  name: "HomePage",
  components: {
    HeaderSection,
    BodySection,
    FooterSection
  },
  data() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
