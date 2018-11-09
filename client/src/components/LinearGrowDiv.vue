<!--suppress ALL -->
<template>
    <svg style='width: 100%; height: 4px;' xmlns='http://www.w3.org/2000/svg'>
        <line x1='0%' x2='100%' y1='0' y2='0' v-bind:class='{"shape1": true, "shape2": extended}' style='width: 100%; height: 100%;'></line>
    </svg>
</template>

<style>
    svg{
        vertical-align:top;
        margin-top: 10px;
    }
    .shape1{
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        stroke-width: 5px;
        stroke: #19f6e8;
        transition-timing-function: linear;
        transition: stroke-dashoffset 1s, stroke-dasharray 1s;
    }
    .shape2 {
        stroke-dasharray: 500;
        stroke-dashoffset: 0;
        stroke-width: 5px;
        stroke: #19f6e8;
        transition-timing-function: linear;
        transition: stroke-dashoffset 1s, stroke-dasharray 1s;
    }
</style>

<script>
    export default{
        name: 'LinearGrowDiv',
        props: {
            extended: Boolean
        }
    }
</script>