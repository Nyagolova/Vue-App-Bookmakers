<template>
    <v-col  class="flex-grow-1 flex-shrink-0" >
        <v-card class="pa-2" elevation=0 tile color="#f1f3f9">

            <v-select
                background-color="white"
                :items="bookmakersFiltered"
                item-text ="name"
                item-value = "name"
                dense
                hide-details 
                outlined
                :menu-props="{ closeOnContentClick: true, lazy: true, offsetOverflow: true, offsetY: true, overflow: true }"
            >
                <template v-slot:prepend-item>
                    <div class="px-2 py-0">
                    <v-text-field
                        color="grey lighten-2"
                        hide-details
                        outlined
                        dense
                        single-line
                        v-model="inputFilterText"
                        @click.stop.prevent
                    ><v-icon slot="append" >mdi-magnify</v-icon></v-text-field>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <div class="px-2 py-0">
                        <v-btn text small 
                            @click="filterAllBookmakers();"
                        >   
                            Show All
                        </v-btn>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <div class="px-2 py-0">
                        <v-btn text small
                            @click="filterActiveBookmakers();"
                        >
                            Show Active
                        </v-btn>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <div class="px-2 py-0">
                        <v-btn text small
                            @click="filterInctiveBookmakers();"
                        >
                            Show Inactive
                        </v-btn>
                    </div>
                    <v-divider class="my-2"></v-divider>
                </template>
                <template v-slot:bookie="{ bookie }">
                    <v-list-item-content>
                        {{ bookie.name }}
                    </v-list-item-content>
                </template>
            
            </v-select>
        </v-card>
    </v-col>
</template>

<script>

export default {
    data () {
        return {
            bookmakersData : [],
            inputFilterText: null,
            showAll: null,
            showActive: null,
            showInactive: null
        }
    
    },
    computed: {
        bookmakersFiltered () {
            if (this.inputFilterText) {
                const pattern = new RegExp(`\b?${this.inputFilterText}\b?`, 'ig')
                return this.bookmakersData.filter(thing => thing.name.toLowerCase().match(pattern) )
            } else {
                return this.bookmakersData
            } 
        },
        bookmakersAll() {
            return this.$store.state.bookmakersData
        },
        bookmakersActive () {
            return this.$store.state.bookmakersData.filter(thing => thing.active === 1)
        },
        bookmakersInactive () {
            return this.$store.state.bookmakersData.filter(thing => thing.active === 0)
        }
    },
    mounted () {
        this.bookmakersData = this.$store.state.bookmakersData
    },
    methods: {
        filterActiveBookmakers () {
            this.bookmakersData = this.bookmakersActive; 
            this.$store.commit('FILTER_BOOKMAKERS', this.bookmakersActive)
        },
        filterInctiveBookmakers () {
            this.bookmakersData = this.bookmakersInactive; 
            this.$store.commit('FILTER_BOOKMAKERS', this.bookmakersInactive)
        },
        filterAllBookmakers () {
            this.bookmakersData = this.bookmakersAll; 
            this.$store.commit('FILTER_BOOKMAKERS', this.bookmakersAll)
        }
    }
}
</script>

<style>
.v-text-field--outlined, .v-text-field--solo {
    border-radius: 2px !important;
}

.v-input__slot {
    margin-bottom: 0 !important;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 0 !important;
}
</style>