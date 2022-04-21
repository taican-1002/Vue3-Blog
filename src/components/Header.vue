<template>
  <div
    :class="{ 'header-nav': scrolled }"
    class="header"
    @scroll="handleScroll"
  >
    <div class="header-wrap">
      <router-link :to="{ name: 'home-route' }" class="header-logo">
        <img :src="logo" alt="" />
        <div>MY BLOG</div>
      </router-link>
      <va-icon name="menu" class="mr-4 menu-icon" @click="handleToggleMenu" />
      <div class="header-navbar">
        <router-link class="header-item" :to="{ name: 'home-route' }">
          Home</router-link
        >
        <router-link class="header-item" :to="{ name: 'blog-route' }">
          Blog</router-link
        >
        <router-link class="header-item" :to="{ name: 'blog-route' }">
          About</router-link
        >
        <router-link class="header-item" :to="{ name: 'blog-route' }">
          Contact</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/img/logo.png";

export default {
  name: "HeaderComponent",
  methods: {
    handleScroll() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    handleToggleMenu() {
      const navbar = document.getElementsByClassName("header-navbar");
      navbar[0].classList.toggle("active");
    },
  },
  created() {
    this.scrolled = false;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      // value: 0,
      logo,
    };
  },
};
</script>

<style scoped>
.header {
  padding: 0 120px;
  min-height: 60px;
  width: 100%;
  box-shadow: inset 0 -1px 0 0 #fff, 0 1px 5px rgb(0 0 0 / 10%);
  display: flex;
  position: fixed;
  align-items: center;
  z-index: 999;
  background: rgba(255, 255, 255, 0.98);
}
.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header-logo {
  display: flex;
  align-items: center;
}
.header-logo div {
  padding-left: 12px;
  color: #777;
  font-size: 1.6rem;
  font-weight: 500;
}
.header-item {
  font-size: 1.2rem;
  color: #777;
  font-weight: 600;
  padding-right: 20px;
}
.menu-icon {
  display: none;
}
/* .header-navbar {
  margin: auto;
} */

@media only screen and (max-width: 1024px) {
  .header {
    padding: 0 50px;
  }
}
@media (min-width: 576px) and (max-width: 800px) {
  .header-logo div {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .header {
    padding: 0 20px;
  }
  .header-logo div {
    display: none;
  }
  .header-navbar {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 3.8rem;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0.25rem 0.5rem 0 rgb(59 63 73 / 15%);
    transform: translateX(100%);
    transition: all 0.5s ease;
    width: 80%;
    text-align: center;
  }
  .active {
    transform: translateX(0);
  }
  .header-item {
    padding: 2rem 0;
    border-bottom: 1px solid #aaa;
  }
  .header-item:last-child {
    border-bottom: none;
  }
  .menu-icon {
    display: block;
    position: relative;
  }
}
</style>
