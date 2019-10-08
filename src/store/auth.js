import firebase from 'firebase/app'
export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    async register ({dispatch}, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUserId')
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 1000,
          name: name
        })
      } catch (e) {
        throw e
      }
    },
    getUserId () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout () {
      await firebase.auth().signOut()
    }
  }
}
