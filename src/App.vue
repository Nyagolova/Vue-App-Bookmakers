<template>
  <v-app>
 
    <v-btn 
      class="ma-2 white--text"
      color="light-blue darken-3"
      width=150
      tile
      depressed 
      large 
    >
      Save
    </v-btn> 

    <v-layout row ma-0 pa-0>

      <v-flex md9>
        <bookmakers-dropdown></bookmakers-dropdown>
      </v-flex>

      <v-flex md3>
        <operational-buttons></operational-buttons>
      </v-flex>
    </v-layout> 
 
  </v-app>
</template>

<script>

import BookmakersDropdown from '@/components/BookmakersDropdown.vue'
import OperationalButtons from '@/components/OperationalButtons.vue'

export default {
  name: 'App',

  components: {
    BookmakersDropdown,
    OperationalButtons
  },

  data () {
    return {
 
    }
  } 
};
</script>
