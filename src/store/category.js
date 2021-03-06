import firebase from 'firebase/app'

export default {
  actions: {
    async fetchCategories ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUserId')
        const categories =
          (await firebase.database()
            .ref(`/users/${uid}/categories`)
            .once('value'))
            .val() || {}

        // Reformat categories id`s to 1, 2, 3...
        return Object.keys(categories).map(key => ({ ...categories[key], id: key }))
      } catch (e) {}
    },
    async fetchCategoryById ({ dispatch, commit }, id) {
      try {
        const uid = await dispatch('getUserId')
        const category =
          (await firebase.database()
            .ref(`/users/${uid}/categories`)
            .child(id)
            .once('value'))
            .val() || {}

        // Reformat categories id`s to 1, 2, 3...
        return { ...category, id: id }
      } catch (e) {}
    },
    async createCategory ({ dispatch, commit }, { title, limit }) {
      try {
        const uid = await dispatch('getUserId')
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({
          title,
          limit
        })
        return { title, limit, id: category.key }
      } catch (e) {
        commit ('setError', e)
        throw e
      }
    },
    async updateCategory ({ dispatch, commit }, { title, limit, id }) {
      try {
        const uid = await dispatch('getUserId')
        await firebase.database().ref(`/users/${uid}/categories`).child(id).update({
          title,
          limit
        })
      } catch (e) {
        commit ('setError', e)
        throw e
      }
    }
  }
}
