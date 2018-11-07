<template>
    <div id='full-page-container'>
        <div id='background'>
            <div class='triangle-div' id='bottom-triangle'></div>
            <div class='triangle-div' id='top-triangle'></div>
        </div>
        <div id='form-container'>
            <div class="form-input-group">
                <Input placeholder='Email' @focus.native='toggleExtensionDiv(1, 0)' @blur.native='toggleExtensionDiv(1, 1)'/>
                <LinearGrowDiv v-bind:extended='firstDivExtended'/>
            </div>
            <div class="form-input-group">
                <Input placeholder='Password' @focus.native='toggleExtensionDiv(2, 0)' @blur.native='toggleExtensionDiv(2, 1)'/>
                <LinearGrowDiv v-bind:extended='secondDivExtended'/>
            </div>
        </div>
    </div>
</template>

<script>
    import '../styles/LoginForm.less'
    import Input from '../components/Input'
    import LinearGrowDiv from '../components/LinearGrowDiv'

    export default {
        name: 'LoginForm',
        components: {
            Input,
            LinearGrowDiv
        },
        data(){
            return{
                firstDivExtended: false,
                secondDivExtended: false
            }
        },
        methods: {
            toggleExtensionDiv: function(number, actionCode){
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
            }
        }
    }
</script>