<template>
<div id="clock-container">

<div id="time-container">
    <input id="minsTime" label="mins" placeholder="00">
    <p> : </p>
    <input id="secTime" label="tens" placeholder="00">

</div>
<div id="buttons-container">
  <button id="reset-btn">
      Reset
  </button>
  <button id="start-stop-btn">
      Start/Stop
      when this button is clicked begin the countdown functino setInterval
  </button>
  <button id="min-btn" >
      +1min
      <!-- when this button is clicked, increment the state of input.value "ones-mins" -->
  </button>
  <button id="ten-sec-btn">
      +10sec
      <!-- when this button is clicked, increment the state of input.value of  "tens-sec" -->
  </button>
  <button id="one-sec-btn" @click="increment">
      +1sec
    <!-- when this button is clicked, increment the state of input "ones-sec" -->
  </button>
</div>

</div>
 <p> Countdown Timer </p>
</template>

<script>





export default {

  data() {
    return {
      //define a variable and its initial state
      seconds:0

    }
  },

  methods: {
//define methods that occur to the state
    increment( ) {
      this.seconds++
    }
  },


  mounter() {
    //define a function that initializes when component mounts
    //I want the input.value with id secTime to be incremented by 1 every time the button id one-sec-btn is clicked
    
  }
}
</script>

<style>


#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background-color: rgb(0, 155, 183);

}
#clock-container {
  display: flex;
  display: table;

}
#time-container {
  display: flex;
}
</style>
