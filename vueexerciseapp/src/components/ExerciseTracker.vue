<template>
  <div class="container">
    <section>
      <form id="Form">
        <div class="field">
          <br />
          <h2 class="title">New Workout</h2>

          <label class="label">Time:</label>
          <input
            class="control"
            type="text"
            id="Time"
            name="Time"
            placeholder="Time spent"
            pattern="[0-9]{1,2}"
            autofocus
          />
        </div>
        <div class="field">
          <label class="label">Action:</label>
          <select class="control" id="Type" name="Type" required>
            <option value=""></option>
            <option>Run</option>
            <option>Swimming</option>
            <option>Bike</option>
            <option>Drink</option>
            <option>Eat</option>
            <option>Crossfit</option>
            <option>Yoga</option>
          </select>
        </div>
        <div class="field">
          <label for="Date" class="label">Date:</label>
          <input
            class="control"
            type="text"
            id="Date"
            name="Date"
            placeholder="mm/dd/yyyy"
          />
        </div>
        <button class="button" type="submit">Add</button>
      </form>
    </section>
    <table class="table">
      <thead>
        <tr>
          <th><abbr title="workoutNumber">Workout Number</abbr></th>
          <th><abbr title="workoutName">Workout Name</abbr></th>
          <th><abbr title="time">Time Spent</abbr></th>
          <th><abbr title="Date:">Date</abbr></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th><abbr title="workoutNumber">Workout Number</abbr></th>
          <th><abbr title="workoutName">Workout Name</abbr></th>
          <th><abbr title="time">Time Spent</abbr></th>
          <th><abbr title="Date:">Date</abbr></th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <th>1</th>
          <td>name</td>
          <td>timespent</td>
          <td>date</td>
        </tr>
        <tr>
          <th>1</th>
          <td>name</td>
          <td>timespent</td>
          <td>date</td>
        </tr>
        <tr>
          <th>1</th>
          <td>name</td>
          <td>timespent</td>
          <td>date</td>
        </tr>
        <tr class="is-selected">
          <th>1</th>
          <td>name</td>
          <td>timespent</td>
          <td>date</td>
        </tr>
        <tr>
          <th>1</th>
          <td>name</td>
          <td>timespent</td>
          <td>date</td>
        </tr>
        <tr>
          <th>1</th>
          <td>name</td>
          <td>timespent</td>
          <td>date</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data:()=>({
    name: "", //attributes for fitness data that will be in our table
    timeSpent: "",
    date: "",
    OurFitnessData: [], //array that holds the fitness data
    Edit: true,  //when we want to edit whats in our table
    Update: false,
    Mode: "Submit",
    Validation: 0,
    WorkoutId: 1,
  })
}
  
     
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Condensed:wght@300&display=swap);
@import url("../assets/styles.css");
</style>