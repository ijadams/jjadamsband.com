<template>
  <Layout>
    <Hero title="NEW ORLEANS, LA" branch="about"/>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
export default {
  components: {
    Hero,
  },
  metaInfo: {
    title: 'Me',
    description: "I'm currently working as Backend Developer using Laravel as the framework."
  },
  computed:{
    calculateAge() {
      let currentDate = new Date();
      let birthDate = new Date("1999/01/07");
      let difference = currentDate - birthDate;
      let age = Math.floor(difference/31557600000);
      return age
    }
  }
}
</script>
