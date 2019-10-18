<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th @click="sort('amount')">{{'Amount' | localize}}</th>
      <th @click="sort('date')">{{'Date' | localize}}</th>
      <th @click="sort('category')">{{'Category' | localize}}</th>
      <th @click="sort('type')">{{'Type' | localize}}</th>
      <th>{{'Open' | localize}}</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(record, index) of sortedRecords" :key="record.id">
      <td>{{index + 1}}</td>
      <td>{{record.amount | currency}}</td>
      <td>{{record.date | date('datetime')}}</td>
      <td>{{record.categoryName}}</td>
      <td>
        <span
          :class="record.typeClass"
          class="white-text badge red">{{record.typeText}}</span>
      </td>
      <td>
        <button
          v-tooltip="tooltip"
          class="btn-small btn"
          @click="$router.push(`/detail/${record.id}`)"
        >
          <i class="material-icons">open_in_new</i>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'
export default {
  props: {
    records: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    tooltip: localizeFilter('Record_ShowRecord_Message'),
    cats:[],
    currentSort:'name',
    currentSortDir:'asc',
  }),
  methods:{
    sort (s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s;
    }
  },
  computed: {
    sortedRecords() {
      return this.records.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  }
}
</script>
