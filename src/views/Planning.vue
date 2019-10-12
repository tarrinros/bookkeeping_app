<template>
  <Loader v-if="loading" />
  <div v-else>
    <div class="page-title">
      <h3>Планирование</h3>
      <h4>12 212</h4>
    </div>

    <section>
      <div>
        <p>
          <strong>Двушка:</strong>
          12 122 из 14 0000
        </p>
        <div class="progress" >
          <div
              class="determinate green"
              style="width:40%"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'planning',
  data: () => ({
    loading: true,
    categories: []
  }),
  async mounted () {
  this.categories = await this.$store.dispatch('fetchCategories')
  this.loading = false
  },
}
</script>
