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
        <ErrorPopup v-if="errorPopupDisplayed" error-message="The Email or Password you entered is incorrect."/>
    </div>
</template>

<script>
    import axios from 'axios'
    import Router from '../../router'
    import {setCookie} from "../../cookie-manager";
    import LinearGrowDiv from '../LinearGrowDiv'
    import ErrorPopup from '../ErrorPopup/ErrorPopup'
    import './Form.less'

    export default {
        name: 'LoginForm',
        components: {
            LinearGrowDiv,
            ErrorPopup
        },
        data() {
            return {
                firstDivExtended: false,
                secondDivExtended: false,
                errorPopupDisplayed: false,
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
                    if(response.status === 201) {
                        setCookie("access-token", response.data.accessToken, 7)
                        Router.push('dashboard')
                    }
                }).catch(() => {
                    this.errorPopupDisplayed = true
                })
            }
        },
        created(){
            document.addEventListener('keydown', (e) => {
                if(e.keyCode === 13) this.submitLogin()
            })
        }
    }
</script>

<style>

</style>