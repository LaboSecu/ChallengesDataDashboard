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
            <tr v-for="user in users">
                <td>{{user.email}}</td>
                <td>{{user.name}}</td>
                <td>{{user.date}}</td>
                <td><span class="badge" v-bind:class="{'badge-success' : user.challengePassed, 'badge-danger' : user.challengePassed === false }">{{getChallengeStatus(user.challengePassed)}}</span></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
          users : []
      }
    },
    created(){
      axios.get('/challenges')
        .then((response) => {
          this.users = response.data.data;
          this.users.map((item) => {
            item.name = item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1) + " " + item.lastName.toUpperCase();
            delete item.firstName;
            delete item.lastName;
          });
        })
        .catch(function (error) {
          throw new Error(error);
        });
    },
    methods: {
      getChallengeStatus(challengePassed){
        if(challengePassed === true) {return 'Passed'}
        else{return 'Failed'}
      }
    }
  }
</script>
