<template>
  <div class="container">
    <section id="cardContainer">
      <div class="card notification" style="background-color: beige">
        <div class="card-content">
          <div class="media-content">
            <div class="title is-4" style="size: 100px">{{fullname}}</div>
            <p class="subtitle is-6">@HMaldonado</p>
          </div>
        </div>

        <div class="title is-active" id="profileHeading">User Profile</div>
        <div class="card" style="border-style:double;border-width:10px;">
          <i class="fas fa-heart fa-2x fa-spin"></i>
          <i class="fas fa-swimmer  fa-2x"></i>
          <i class="fas fa-running fa-2x"></i>
        </div>
      </div>
    </section>
    <br />

    <div
      class="section"
      style="border-style: ridge; border-color: burlywood; border-width: 10px"
    >
      <div class="container">
        <div class="columns">
          <div class="column notification is-success has-text-black">
            <container>
              <span style="font-size: 80px">User Image:</span>
              <br />
              <br />

              <img class="is-rounded" src="HenryMPicture.png" />
            </container>
          </div>
          <div class="column notification is-danger has-text-black">
            <span style="font-size: 80px">Age:</span>
            <br />
            <span style="font-size: 45px">{{age}}</span>
          </div>
          <div class="column notification is-primary has-text-black">
            <span style="font-size: 80px">Weight:</span>
            <br />
            <span style="font-size: 45px">{{weight}}</span>
          </div>
          <div class="column notification is-warning has-text-black">
            <span style="font-size: 80px">Description</span>
            <br />
            {{description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";


export default {
    data: ()=>({
        fullname: Session.fullname,
        age : Session.age,
        weight : Session.weight,
        description: Session.description
      

}),
   
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);

@import url("../assets/styles.css");
</style>