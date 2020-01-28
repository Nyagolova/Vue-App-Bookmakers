<template>
    <v-row no-gutters style="flex-wrap: nowrap;">
        <v-col class=" align-self-center" sm="2" >
            <v-card elevation=0 color="#f1f3f9">
                <v-card-text class="text-center font-weight-medium"> {{rowIndex}}</v-card-text>
            </v-card>
        </v-col>

        <v-col class=" align-self-center" sm="1" >
            <v-card elevation=0 class="justify-center" color="#f1f3f9">
                <v-checkbox :value="allChecked" v-model="checkboxStatus" v-on:change="checkBookmaker" class="ma-0 pa-0" hide-details > </v-checkbox> 
            </v-card>
        </v-col>

        <v-col class=" align-self-center" sm="9" >
            <v-card elevation=0 class="ml-4" color="#f1f3f9"> 
                <v-card-text class="pa-0 ma-0"> {{checkData.name}} </v-card-text>
                <v-img src="https://oddspedia.com/images/bookie_logos/1xbet.png" max-width="90" ></v-img>
                
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data () {
        return {
            checkboxStatus: false
        }
    },
    props: ['checkData', 'rowIndex'],
    computed : {
        allChecked () {
            if (this.$store.state.isAllBookmakersChecked === 1) {
                return true;
            } else {
                return this.checkboxStatus;
            }
        }
    },
    methods: {
        checkBookmaker(checkStatus) {
            var isCheckedByID = { id: this.checkData.id, status: checkStatus || false }
            var orderInfo = { id: this.checkData.id, order: this.rowIndex}
            this.$store.commit('UPDATE_BOOKMAKER_ACTIVE_STATUS', isCheckedByID)
            this.$store.commit('UPDATE_BOOKMAKER_ORDER', orderInfo)
        }
    }
}
</script>

<style>

</style>