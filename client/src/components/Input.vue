<template>
    <input type="text" required :placeholder="placeholder+'...'">
</template>

<style lang="less">
    input{
        display: inline-block;
        width: 100%;
        border: none;
        background: transparent;
        opacity: 1;
        color: white;
    }

    input::placeholder{
        color: rgba(255, 255, 255, 0.55);
    }

    input:focus{
        outline: none;
    }
</style>

<script>
    export default {
        name: 'Input',
        props: [
            "placeholder"
        ]
    }
</script>