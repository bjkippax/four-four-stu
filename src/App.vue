<!-- TO DO
  * Wire up so this displays data correctly
  * Make a second project where can show off updating information, plenty of ToDo app tutorials to follow along with, similar functionality
  * Remember, both projects need TS -->

<template>
  <NavBar></NavBar>
  <div class="player-filter">
    <select v-model="filteredTeam">
      <option :value="0"></option>
      <option v-for="(team, index) in teams" :key="index" :value="team.id">{{ team.name }}</option>
    </select>
  </div>
  <!-- Drop down menu goes here -->
  <div class="player-grid">
    <PlayerCard v-for="(player, index) in filteredPlayers" :player="player" :key="index" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";
import {GetPlayers} from './utils/get-players';

export default {
  name: "App",
  components: {
    NavBar,
    PlayerCard
  },
  data() {
    return {
      filteredTeam: 0,
      teams: [],
      players: []
    }
  },
  computed: {
    filteredPlayers() {
      let res = this.players;
      if (this.filteredTeam != 0) {
        res = this.players.filter(p => p.team == this.filteredTeam);
      }
      return res;
    }
  },
  mounted() {  
    GetPlayers()
        .then(response => response.json())
        .then(data => {
            //let arsId = data.teams.find(team => team.name == "Arsenal").id;
            this.teams = data.teams.map(e => {
              return  {
                id: e.id,
                name: e.name
              }
            });
            this.players = data.elements //.filter(e => e.team == arsId);
        });
  }
};
</script>

<style>
html, body {
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.player-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1em;
  padding: 1em;
}
</style>
