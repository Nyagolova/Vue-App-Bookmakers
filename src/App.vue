<template>
  <v-app>
    <v-container>
      
      <v-row no-gutters>
        <v-col>
          <v-card elevation="0">
            <v-btn 
              class="ma-2 white--text"
              color="light-blue darken-3"
              width=150
              tile depressed  large 
            >
              Save
            </v-btn> 
          </v-card>
        </v-col>
      </v-row>
    
      <v-row no-gutters>
        <v-col cols="1" style="max-width: 100%;" class="flex-grow-1 flex-shrink-0">
          <v-card elevation="0" >
            <bookmakers-dropdown></bookmakers-dropdown>
          </v-card>
        </v-col>

        <v-col style="min-width: 350px;" class="flex-grow-0 flex-shrink-1">
          <v-card elevation="0">
            <operational-buttons></operational-buttons>
          </v-card>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-card class="pa-2" elevation="0" >
            <template v-for="(item, index) in this.mydata"> 
              {{item}}
              <v-divider :key="index"></v-divider>
            </template>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
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
      mydata: ['a','b','v','g','d']
    }
  } 
};
</script>
