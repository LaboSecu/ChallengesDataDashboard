<template>
    <div id='form-container'>
        <div class='input-group'>
            <input type="text" required placeholder='Email...' v-model="mailInput" @focus='toggleExtensionDiv(1, 0)'
                   @blur='toggleExtensionDiv(1, 1)'>
            <LinearGrowDiv v-bind:extended='firstDivExtended'/>
        </div>
        <div class='input-group'>
            <input type="password" required placeholder='Password...' v-model="passwordInput" @focus='toggleExtensionDiv(2, 0)'
                   @blur='toggleExtensionDiv(2, 1)'>
            <LinearGrowDiv v-bind:extended='secondDivExtended'/>
        </div>
        <div class="input-group input-group-submit">
            <button @click='submitLogin'>Submit</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Router from '../../router'
    import LinearGrowDiv from '../LinearGrowDiv'
    import {setCookie} from "../../cookie-manager";
    import './Form.less'

    export default {
        name: 'LoginForm',
        components: {
            LinearGrowDiv
        },
        data() {
            return {
                firstDivExtended: false,
                secondDivExtended: false,
                mailInput: '',
                passwordInput: ''
            }
        },
        methods: {
            toggleExtensionDiv: function (number, actionCode) {
                switch (actionCode) {
                    case 1:
                        switch (number) {
                            case 1:
                                this.firstDivExtended = false
                                break
                            case 2:
                                this.secondDivExtended = false
                                break
                            default:
                                break
                        }
                        break
                    case 0:
                        switch (number) {
                            case 1:
                                this.firstDivExtended = true
                                break
                            case 2:
                                this.secondDivExtended = true
                                break
                            default:
                                break
                        }
                        break
                    default:
                        break
                }
            },
            submitLogin: function(){
                let mailInput = this.mailInput
                let passwordInput = this.passwordInput
                axios.post('http://localhost:3030/authentication', {
                    email: mailInput,
                    password: passwordInput,
                    strategy: 'local'
                }).then((response) => {
                    setCookie("access-token", response.data.accessToken, 7)
                    Router.push('dashboard')
                }).catch((err) => {throw new Error(err)})
            }
        }
    }
</script>

<style>

</style>