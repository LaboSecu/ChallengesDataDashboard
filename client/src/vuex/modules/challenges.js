import * as Services from "../../feathers-services";

const state = {
    challenges: []
};

// getters
const getters = {
    getChallenges(state) {
        return state.challenges
    }
};

// actions
const actions = {
    findChallenges({commit}) {
        Services.challengesService.find().then(challenges => commit('setChallenges', challenges.data));
    },
    addChallenge({commit}, data) {
        commit('pushChallengeToState', data)
    }
};

// mutations
const mutations = {
    setChallenges(state, challenges) {
        challenges.map((challenge) => {
            challenge.name = challenge.firstName.charAt(0).toUpperCase() + challenge.firstName.slice(1) + " " + challenge.lastName.toUpperCase();
            delete challenge.firstName;
            delete challenge.lastName;
        });
        state.challenges = challenges;
    },
    pushChallengeToState(state, challenge) {
        challenge.name = challenge.firstName.charAt(0).toUpperCase() + challenge.firstName.slice(1) + " " + challenge.lastName.toUpperCase();
        delete challenge.firstName;
        delete challenge.lastName;
        state.challenges.push(challenge)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
