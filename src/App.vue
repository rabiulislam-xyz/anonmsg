<template>
  <v-app>
          <Header />

    <v-main>
      <keep-alive include="message_list">
        <router-view/>
      </keep-alive>

    </v-main>
          <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  }
};
</script>
