<template>
  <Layout>
    <Hero title="Contacts" branch="contact"/>
    <section class="section mb-10">
        <div class="container">
            <h3 class="title is-5 has-text-primary">Stay In Touch</h3>
            <p>You can find us around the web:</p>
            <div class="columns is-multiline mt-3">
                <div class="column is-6 is-4-widescreen"><strong class="has-text-primary">Instagram :</strong><a href="https://www.instagram.com/jj_adams_whodatband/" class="has-text-white"> instagram.com</a></div>
            </div>
        </div>
    </section>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
export default {
  components: {
    Hero,
  },
  metaInfo: {
    title: 'Contact Me',
    description: 'Stay in touch with me, find me around the web',
  },
}
</script>
