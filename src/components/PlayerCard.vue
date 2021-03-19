<template>
  <div class="player-card">
    <h3>{{ player.first_name }} {{ player.second_name }}</h3>
    <p>
      {{ player.news }}
    </p>
  </div>
</template>

<script>
//import PlayerInfo from "../components/child-components/PlayerInfo";

export default {
  name: "PlayerCard",
  props: ["player"],
  components: {
    //PlayerInfo
  }
};
</script>

<style>
.player-card {
  border: 1px solid black;
  display: block;
  justify-content: center;
  height: auto;
  margin-top: 5px;
  border-radius: 15px;
  -moz-border-radius: 15px;
  padding: 1em;
}
</style>
