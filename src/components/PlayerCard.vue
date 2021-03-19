<template>
    <div class="player-card">
        <PlayerInfo v-bind:playerId="1"></PlayerInfo>
    </div>
</template>

<script>
import PlayerInfo from '../components/child-components/PlayerInfo';

export default {
    name: "PlayerCard",
    components: {
        PlayerInfo,
    }    
}
</script>

<style>

.player-card {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    height: auto;
    margin-top: 5px;
    border-radius: 15px;
    -moz-border-radius: 15px;
}

</style>