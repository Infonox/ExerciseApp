<template>
  <div class="container">
    <form class="card" @submit.prevent="editProfile">
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label">Picture</label>
            <div class="control">
              <input
                class="input"
                type="url"
                placeholder="Input a URL to profile picture"
                v-model="profiledata.src"
                
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Put your description here!"
                v-model="profiledata.description"
           
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Age</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="How old are you?"
                v-model="profiledata.age"
             
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Weight</label>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="How much do you weigh?"
                v-model="profiledata.weight"
              
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="radio">
                <input
                  type="radio"
                  name="question"
                  v-model="profiledata.isPublic"
            
                  :value="true"
                />
                Public
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="question"

                   v-model="profiledata.isPublic"
                  :value="false"
                />
                Private
              </label>
            </div>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button class="button is-link card-footer-item" type="submit">
          Submit
        </button>
        <button class="button is-link is-light card-footer-item" type="reset">
          Cancel
        </button>
      </footer>
    </form>

    <section id="cardContainer">
      <div class="card notification" style="background-color: beige">
        <div class="card-content">
          <div class="media-content">
            <div class="title is-4" style="size: 100px"></div>
            <p class="subtitle is-6"></p>
          </div>
        </div>

        <div class="title is-active" id="profileHeading">User Profile</div>
        <div class="card" style="border-style: double; border-width: 10px">
          <i class="fas fa-heart fa-2x fa-spin"></i>
          <i class="fas fa-swimmer fa-2x"></i>
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

              <img :src="`  ${profiledata.src}`">

           

            
              
              <br />

              <img class="is-rounded"  />
            </container>
          </div>
          <div class="column notification is-danger has-text-black">
            <span style="font-size: 80px">Age:</span>
            {{profiledata.age}}
            <br />
            <span style="font-size: 45px"></span>
          </div>
          <div class="column notification is-primary has-text-black">
            <span style="font-size: 80px">Weight:</span>
            {{profiledata.weight}}
            <br />
            <span style="font-size: 45px"></span>
          </div>
          <div class="column notification is-warning has-text-black">
            <span style="font-size: 80px">Description</span>
              {{profiledata.description}}
            <br />
       
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Update} from "../services/profiles";
import Session from "../services/session";


export default {
  data: () => ({

    profiledata:[{_id: null,src: null, age:null, weight:null, description:null,user_handle:null,isPublic:null}],
    

   
  
  }),
  methods:{
    async editProfile(){
     const response = await Update(this.profiledata._id, this.profiledata)
     console.log(response);

  
   
    
    }

  },
  
      async mounted(){
      
      
     const response = await Session.AddProfileData(Session.user);
       console.log(response);
       this.profiledata = response;
      
      
       
  

    
 },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);

@import url("../assets/styles.css");
</style>