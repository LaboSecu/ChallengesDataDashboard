import * as Services from "../../feathers-services";

const state = {
    challenges: []
};

// getters
const getters = {
    getChallenges(state){
        return state.challenges
    }
};

// actions
const actions = {
    findChallenges({commit}){
        Services.challengesService.find().then(challenges => commit('setChallenges', challenges.data));
    }
};

// mutations
const mutations = {
    setChallenges(state, challenges){
        state.challenges = challenges;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
