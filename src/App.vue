<!-- TO DO
  * Wire up so this displays data correctly
  * Make a second project where can show off updating information, plenty of ToDo app tutorials to follow along with, similar functionality
  * Remember, both projects need TS -->

<template>
  <NavBar></NavBar>
  <!-- Drop down menu goes here -->
  <PlayerCard></PlayerCard>
</template>

<script>
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";

export default {
  name: "App",
  components: {
    NavBar,
    PlayerCard,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
