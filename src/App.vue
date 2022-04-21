<template>
  <Header />
  <router-view> </router-view>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
/* We use reset.css to reduce browser inconsistencies in things like default
 line heights, margins and font sizes of headings, and so on. */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

input {
  padding: 0;
  box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
img {
  max-width: 100%;
  object-fit: cover;
  vertical-align: middle;
}

body {
  line-height: 1;
}
h1 {
  font-family: aktiv-grotesk, sans-serif;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

::-moz-focus-inner {
  border: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: none;
}

:focus {
  outline: none;
}

button {
  padding: 0;
}
.va-card__inner {
  display: flex !important;
}
.va-button-group {
  justify-content: center !important;
}
.va-chip__content {
  color: rgb(255, 255, 255) !important;
  font-weight: bold;
}
.va-chip {
  cursor: pointer !important;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .va-card__inner {
    flex-direction: column;
  }
}
</style>
