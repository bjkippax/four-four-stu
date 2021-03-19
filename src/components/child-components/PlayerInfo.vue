<template>
    <div>
        <Heatmap :heatmap="player.heatmap"></Heatmap>           
        <div class="player-porthole">
            <div class="player-header">
                <img :src="player.clubImg">
                <h1>{{ player.name }}</h1>
                <h3>{{ player.club }}</h3>
                <h3>Squad number: {{ player.shirtNumber }}</h3>
            </div>
            <img v-bind:src="player.playerImg">
        </div>
    </div>
</template>

<script>
import info from '../../data/playerinfo';
import Heatmap from './Heatmap';

export default {
    name: "PlayerInfo",
    props: {
        playerId: Number,        
    },
    components: {
        Heatmap,
    },
    data() {
        return { player: info.players[0] };
    },
    methods: {
        getPlayer:function() {
            return undefined;
        }
    }
}
</script>

<style></style>