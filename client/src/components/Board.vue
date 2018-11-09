<template>
  <div>
    <table class='table'>
      <thead class='thead-dark'>
      <tr>
        <th scope='col'>Email</th>
        <th scope='col'>Name</th>
        <th scope='col'>Last Try</th>
        <th scope='col'>Challenge Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='challenge in challenges' v-bind:value='challenge._id' :key='challenge._id'>
        <td>{{challenge.email}}</td>
        <td>{{challenge.name}}</td>
        <td>{{challenge.date}}</td>
        <td><span class='badge'
                  v-bind:class='{"badge-success" : challenge.challengePassed, "badge-danger" : challenge.challengePassed === false }'>{{getChallengeStatus(challenge.challengePassed)}}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { challengesService } from '../feathers-services'

  export default {
    data () {
      return{
        challenges: []
      }
    },
    methods: {
      findChallenges(){
        challengesService.find().then(challenges => this.challenges = challenges.data)
      },
      addChallenge(challenge){
        challenge.name = challenge.firstName.charAt(0).toUpperCase() + challenge.firstName.slice(1) + ' ' + challenge.lastName.toUpperCase()
        delete challenge.firstName
        delete challenge.lastName
        this.challenges.push(challenge)
      },
      getChallengeStatus (challengePassed) {
        if (challengePassed === true) {
          return 'Passed'
        }
        else {
          return 'Failed'
        }
      }
    },
    created () {
      this.findChallenges();
      challengesService.on('created', challenge => this.addChallenge(challenge))
    }
  }
</script>