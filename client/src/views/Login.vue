<template>
    <div id='full-page-container'>
        <Background/>
        <Form/>
    </div>
</template>

<script>
    import Form from '../components/Form/Form'
    import Background from '../components/2TriangleBackground/2TriangleBackground'

    export default {
        name: "Login",
        components: {
            Form,
            Background
        }
    }
</script>

<style>
    #full-page-container{
        height: 100vh;
        width: 100vw;
    }
</style>