<template>
    <div id='error-wrapper'>
        {{errorMessage}}
    </div>
</template>

<script>
    import './ErrorPopup.less'

    export default {
        name: 'ErrorPopup',
        props: [
            "errorMessage"
        ]
    }
</script>