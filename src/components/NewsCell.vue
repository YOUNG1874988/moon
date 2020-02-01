<template>
  <div>
    <p>{{newsDate.studentId}}</p>
    <p>{{newsDate.startDate}}</p>
    <p>{{newsDate.sex}}</p>
    <p>{{newsDate.age}}</p>
  </div>
</template>
 
<script>
export default {
  name: 'NewsCell',
  props: {
    newsDate: Object
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
   
  }
}
</script>
 
<style scoped>

</style>