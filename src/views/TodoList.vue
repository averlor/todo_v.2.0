<template>
  <div class="container">
    <GroupList/>
  </div>
</template>

<script>
// @ is an alias to /src
import GroupList from '@/components/GroupList.vue'

export default {
  name: 'home',
  components: {
    GroupList
  }
}
</script>
