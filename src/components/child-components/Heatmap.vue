<template>
    <div class="heatmap-container">
        <img class="heatmap-img" v-bind:src="heatmap">
    </div>
        
</template>

<script>
export default {
    name: "Heatmap",
    props: {
        heatmap: String,
    }   
}
</script>

<style>
    .heatmap-container {
        border: 1px solid black;
    }

    .heatmap-img {
        height: 100px;
        width: 250px;
    }
</style>