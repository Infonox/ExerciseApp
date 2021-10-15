<template>
  <div>
    <section class="hero" style="background-color: rgb(163, 130, 230)">
      <div class="hero-body">
        <p class="title">
          Register
          <i class="fas fa-address-card fa-2x"></i>
        </p>

        <p class="subtitle">Please create an account!</p>
      </div>
    </section>
    <br />

    <div class="container">
      <div class="column">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              name="fullname"
              type="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input"
              name="fullname"
              type="text"
              placeholder="Enter a username"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              name="age"
              type="password"
              placeholder="Enter a password"
            />
          </div>
        </div>
        <div class="control">
          <button class="button is-link title" style="height: 50px">
            Create Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>