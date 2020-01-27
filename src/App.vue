<template>
  <v-app>
    <v-container >
      
      <v-row no-gutters >
        <v-col  >
          <v-card elevation="0" color="#f1f3f9">
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

      <v-row no-gutters style="flex-wrap: nowrap;">
        <bookmakers-dropdown></bookmakers-dropdown>
        <operational-buttons></operational-buttons>
      </v-row>
 
      <v-row no-gutters>
        <v-col>
          <v-card class="pa-2" elevation="0" color="#f1f3f9">
            <template v-for="(item, index) in this.BookmakersSelected"> 
              <bookmakers-row :key="item.name" :itemData="item" :rowIndex="(index+1)"></bookmakers-row>
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

import BookmakersRow from '@/components/BookmakersRow.vue'

export default {
  name: 'App',

  components: {
    BookmakersDropdown,
    OperationalButtons,
    BookmakersRow
  },
  data () {
    return {
    }
  },
  computed : {
    BookmakersSelected () {
      if (this.$store.state.filteredBookmakers.length <= 0) {
        return this.$store.state.bookmakersData
      } else {
        return this.$store.state.filteredBookmakers
      }
      
    }
  } 
};
</script>

<style>
#app {
  background-color: #f1f3f9;
}
</style>