<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png"/>
        <HelloWorld/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '../components/HelloWorld.vue'
    import { checkCookie } from "../cookie-manager"
    import Router from "../router"

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        methods: {
            checkCookie
        },
        created(){
            // if(this.checkCookie() === false) Router.push('dashboard') <------------ NEED TO REDIRECT TO LOGIN
        }
    }
</script>
