<template>
  <div class="home">
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          Welcome to the Exercise Application!
          <i class="fas fa-question-circle"></i>
        </p>

        <p class="subtitle">Create a profile below!</p>
      </div>
    </section>
    <br />

    <div class="container">
      <div class="column">
        <div class="field">
          <label class="label">Full Name</label>
          <div class="control">
            <input
              class="input"
              name="fullname"
              type="text"
              placeholder="Who's the new champ?"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Age</label>
          <div class="control">
            <input
              class="input"
              name="age"
              type="number"
              placeholder="Lookin' swell"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Weight</label>
          <div class="control">
            <input
              class="input"
              name="weight"
              type="number"
              placeholder="Doesn't define you"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">How active are you?</label>
          <div class="control">
            <div class="select">
              <select name="activity">
                <option>Very Active</option>
                <option>Not very Active</option>
                <option>What is this, "Working out"?</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label"
            >Some things about yourself, hobbies/lifestyle goals, exc</label
          >
          <div class="control">
            <textarea
              class="textarea"
              name="description"
              type="text"
              placeholder="What makes you interesting?"
            ></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
}; //view model
</script>
<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>
