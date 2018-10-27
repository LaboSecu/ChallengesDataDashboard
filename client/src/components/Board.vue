<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Last Try</th>
                <th scope="col">Challenge Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="challenge in challenges().data" v-bind:value="challenge.name" :key="challenge.name">
                <td>{{challenge.email}}</td>
                <td>{{challenge.name}}</td>
                <td>{{challenge.date}}</td>
                <td><span class="badge" v-bind:class="{'badge-success' : challenge.challengePassed, 'badge-danger' : challenge.challengePassed === false }">{{getChallengeStatus(challenge.challengePassed)}}</span></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: { // only getters have live queries
            ...mapGetters('challenges', {challenges: 'find'})
        },
        methods: {
            ...mapActions('challenges', ['create', 'remove', 'find']),
            getChallengeStatus(challengePassed){
                if(challengePassed === true) {return 'Passed'}
                else{return 'Failed'}
            }
        },
        created: async function () {
            await this.find();
        }
    }
</script>