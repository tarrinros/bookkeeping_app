<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th>{{'Amount' | localize}}</th>
      <th>{{'Date' | localize}}</th>
      <th>{{'Category' | localize}}</th>
      <th>{{'Type' | localize}}</th>
      <th>{{'Open' | localize}}</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(record, index) of records" :key="record.id">
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
    tooltip: localizeFilter('Record_ShowRecord_Message')
  })
}
</script>
