<template>
  <div class="home">
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          Welcome to the Exercise Application!
          <i class="fas fa-running fa-2x fa-spin"></i>
        </p>

        <p class="subtitle">Create a profile below!</p>
      </div>
    </section>
    <br />
    <div class="columns" style="border-style:double;border-width:7px;border-color:lightgrey">
      <div class="column">
        <img
          src="../assets/workoutswim.jpeg"
          style="
            width: 225px;
            height: 225px;
            border-style: double;
            border-width: 5px;
          "
        />
      </div>
      <div class="column">
        ¨The only person you are destined to become is the person you decide to
        be.¨ – Ralph Waldo Emerson
      </div>
      <div class="column">
        <img
          src="../assets/workoutrunning.jpeg"
          style="
            width: 225px;
            height: 225px;
            border-style: double;
            border-width: 5px;
          "
        />
      </div>
      <div class="column">
        “The last three or four reps is what makes the muscle grow. This area of
        pain divides a champion from someone who is not a champion.”- Arnold
        Schwarzenegger
      </div>
      <div class="column">
        <img
          src="../assets/workoutlifting.jpeg"
          style="
            width: 225px;
            height: 225px;
            border-style: double;
            border-width: 5px;
          "
        />
      </div>
      <div class="column">
        ¨Most people fail, not because of lack of desire, but, because of lack
        of commitment.¨ – Vince Lombardi
      </div>
    </div>
    <div class="container">
        <div class="column">
            <form class="section" @submit.prevent="login()">
            <div class="field">
                Enter (admin,admin) for testing
                <label class="label">Enter email address:</label>
                <div class="control form">
                    <input class="input" name="email" type="text" placeholder="Enter username" v-model="email">
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" name="pass" type="password" placeholder="Enter password" v-model="password">
                </div>

            </div>
            <div class="control">
                <button class="button is-link title" style="height:50px;">Login</button>
            </div>
            </form>
            
        </div>
    </div>


    
  </div>
</template>


<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>
