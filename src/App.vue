<template>
  <v-app>
 
    <v-btn 
      class="ma-2 white--text"
      color="light-blue darken-3"
      width=150
      tile
      depressed 
    >
      Save
    </v-btn> 

    <bookmakers-dropdown></bookmakers-dropdown>
    
  </v-app>
</template>

<script>

import BookmakersDropdown from '@/components/BookmakersDropdown.vue'

export default {
  name: 'App',

  components: {
    BookmakersDropdown
  },

  data () {
    return {
 
    }
  } 
};
</script>
