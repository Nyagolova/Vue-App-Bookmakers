<template>
    <v-container >
        <v-select
             
            :items="filteredBookmakers"
            :value="selectedItemTitle"
            outlined
            :menu-props="{ lazy: true, offsetOverflow: true, offsetY: true, overflow: true }"
            v-model="widget.thingId"
            @click:clear="widget.thingId === null"
        >
            <template v-slot:prepend-item>
                <div class="px-2 py-0">
                <v-text-field
                     
                    color="grey lighten-2"
                    hide-details
                    outlined
                    dense
                    single-line
                    v-model="filter"
                ><v-icon slot="append" >mdi-magnify</v-icon></v-text-field>
                </div>
                <v-divider class="my-2"></v-divider>
            </template>
            <template v-slot:item="{ item }">
                <v-list-item-content>
                    {{ item.title }}
                </v-list-item-content>
            </template>
            <template v-slot:no-data>
                <v-layout px-3 py-2>
                <v-flex
                    class="grey--text text--darken-1"
                    xs12
                >
                    Couldn't find any {{ listPlural.toLowerCase() }} that match <span class="font-weight-medium text--darken-3">{{ filter }}</span> ...
                </v-flex>
                </v-layout>
            </template>
        </v-select>
    </v-container >
</template>

<script>

export default {
    // data () {
    //     return {
    //         items: ['- SHOW ALL -', '- SHOW ACTIVE -', '- SHOW INACTIVE -', 'Other'],
    //     }
    // } 

    data: () => (
        {
            selectedItem: '',
            filter: null,
            listPlural: 'Things',
            listSingular: 'Thing',
            thing: {
            categoryId: null,
            description: null,
            rating: null,
            title: null,
            valueTypeId: null
        },
        things: [
            {
                title: 'Thing One'
            },
            {
                title: 'Thing Two'
            },
            {
                title: 'Thing Three'
            },
            {
                title: 'Thing Four'
            },
            {
                title: 'Thing Five'
            },
            {
                title: 'Thing Six'
            }
        ],
        widget: {
            thingId: null
        }
  }),
  computed: {
    filteredBookmakers () {
      if (this.filter) {
        const pattern = new RegExp(`\b?${this.filter}\b?`, 'ig')
        return this.things.filter(thing => thing.title.toLowerCase().match(pattern) )
      } else {
        return this.things
      }
    },
    selectedItemTitle () {
        if (this.widget.thingId) {
            return this.widget.thingId.title
        }  else {
            return ''
        }
    }
  },
 
  methods: {
 
  }
}
</script>

<style>
.v-text-field--outlined, .v-text-field--solo {
    border-radius: 2px !important;
}
</style>