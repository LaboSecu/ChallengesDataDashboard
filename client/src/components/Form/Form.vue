<template>
  <div id='form-container'>
    <div class='input-group'>
      <input type='text' placeholder='Email...' v-model='mailInput' @focus='toggleExtensionDiv(1, 0)'
             @blur='toggleExtensionDiv(1, 1)'>
      <LinearGrowDiv v-bind:extended='firstDivExtended'/>
    </div>
    <div class='input-group'>
      <input type='password' placeholder='Password...' v-model='passwordInput'
             @focus='toggleExtensionDiv(2, 0)'
             @blur='toggleExtensionDiv(2, 1)'>
      <LinearGrowDiv v-bind:extended='secondDivExtended'/>
    </div>
    <div class='input-group input-group-submit'>
      <button @click='submitLogin'>Submit</button>
      <img v-if='submitPending' src='tail-spin.svg'/>
    </div>
    <ErrorPopup v-if='errorPopupDisplayed' error-message='The Email or Password you entered is incorrect.'/>
  </div>
</template>

<script>
  import {client} from '../../feathers-services'
  import Router from '../../router'
  import LinearGrowDiv from '../LinearGrowDiv'
  import ErrorPopup from '../ErrorPopup/ErrorPopup'
  import './Form.less'

  export default {
    name: 'LoginForm',
    components: {
      LinearGrowDiv,
      ErrorPopup
    },
    data () {
      return {
        firstDivExtended: false,
        secondDivExtended: false,
        errorPopupDisplayed: false,
        mailInput: '',
        passwordInput: '',
        submitPending: false
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
      submitLogin: async function () {
        let mailInput = this.mailInput
        let passwordInput = this.passwordInput
        this.submitPending = true
        try{
          const payload = Object.assign({email: mailInput, password: passwordInput}, { strategy: 'local' })
          await client.authenticate(payload)
          Router.push('dashboard')
        } catch (e) {
          this.mailInput = ''
          this.passwordInput = ''
          this.errorPopupDisplayed = true
          this.submitPending = false
        }
      }
    },
    created () {
      document.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) this.submitLogin()
      })
    }
  }
</script>

<style>

</style>