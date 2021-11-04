<template>
  <nav
    class="navbar has-background-grey-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <img
        class="weightman"
        src="../assets/workout.png"
        :style="` width: ${sizeCounter}px `"
        @click="weightmanGrow"
      />

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': navBarIsActive }"
        @click="navBarIsActive = !navBarIsActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': navBarIsActive }"
      @click="navBarIsActive = !navBarIsActive"
    >
      <div class="navbar-start">
        <router-link
          class="navbar-item is-tab"
          to="/"
          active-class="is-active"
          exact
        >
          Home
        </router-link>

        <router-link
          class="navbar-item is-tab"
          to="/workoutlog"
          active-class="is-active"
          exact
        >
          Workout Log
        </router-link>

        <router-link
          class="navbar-item is-tab"
          to="/profile"
          active-class="is-active"
          exact
        >
          Profile
        </router-link>
        <router-link
          class="navbar-item is-tab"
          to="/sharing"
          active-class="is-active"
          exact
        >
          Sharing
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <router-link
              class="navbar-item is-tab"
              to="/about"
              active-class="is-active"
              exact
            >
              About
            </router-link>

            <router-link
              class="navbar-item is-tab"
              to="/contact"
              active-class="is-active"
              exact
            >
              Contact
            </router-link>
            <hr class="navbar-divider" />
          </div>
        </div>

        <div class="navbar-end"> <login-badge /></div>
      </div>
    </div>
    
  </nav>
</template>

<script>
import LoginBadge from "./LoginBadge";
export default {
  data() {
    return {
      isActive: false,
      title: "HELLO WORLD",
      test: "TEST TEST 3 4",
      navBarIsActive: false,
      sizeCounter: 20    };
  },
  methods: {
    weightmanGrow() {
      this.sizeCounter += 20;

      if (this.sizeCounter == 180) {
        this.sizeCounter = 60;
      }
    },
  },

  components: {
    LoginBadge,
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>