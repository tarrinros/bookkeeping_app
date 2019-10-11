<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>
    <Loader v-if="loading"/>
    <p v-else-if="!categories.length" class="center">Категорий пока нет <router-link to="/categories">Добавить категорию.</router-link></p>
    <form v-else class="form">
      <div class="input-field" >
        <select ref="select">
          <option v-for="c of categories" v-model="category"
          :key="c.id"
          :value="c.id"
          >{{c.title}}</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="income"
          />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label>
          <input
              class="with-gap"
              name="type"
              type="radio"
              value="outcome"
          />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input
            id="amount"
            type="number"
        >
        <label for="amount">Сумма</label>
        <span class="helper-text invalid">amount пароль</span>
      </div>

      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Описание</label>
        <span
              class="helper-text invalid">description пароль</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'record',
  data: () => ({
    select: null,
    categories: [],
    category: null,
    loading: true
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false

    if (this.categories.length) {
      this.category = this.categories[0].id
    }

    // Necessery for correct rendering the select form
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select)
    }, 0)
  },
  destroyed () {
    if (this.select && this.select.destroy) {
      this.select.destroy
    }
  },
}
</script>
