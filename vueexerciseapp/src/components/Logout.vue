<template>
<form>
    <div class="buttons" style="font-size:10px;">
          <button class="buttons button is-light" @submit = "logout">
       Logout
      </button>
    </div>
</form>
</template>

<script>
export default {
    data (){
        return ({ 
      
        })
    },
    methods: {
        logout(){
            this.$forceUpdate();
           
        }
    },
}
</script>

<style>
 @import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>