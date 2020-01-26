<template>
    <v-container ma-0 pa-0>
        <v-row no-gutters >
            <v-col md="3" >
                <v-card class="pa-2 pb-0"  elevation=0 color="#f1f3f9">
                    <bookmakers-check :checkData="itemData" :rowIndex="rowIndex"></bookmakers-check>
                </v-card>
            </v-col>

            <v-col md="2" >
                <v-card class="pa-2 pb-0"  elevation=0 color="#f1f3f9">
                    <v-card-text class="text-end font-weight-medium pt-4">  Default:</v-card-text>
                </v-card>
            </v-col>
            
            <v-col md="7" >
                <v-card  class="pa-2 pb-0 d-flex align-stretch"  elevation=0 color="#f1f3f9">
                    <domain-textfield :itemData="itemData"></domain-textfield>
                </v-card>
            </v-col>
        </v-row>
 
        <template v-if="this.thisItemIsUpdated">
            <domain-textfield-additional 
             
            >
            <!--    v-for="items in count"  
                :key="items" -->
            </domain-textfield-additional>  
        </template>
 
    </v-container>
</template>

<script>
import BookmakersCheck from '@/components/BookmakersCheck.vue'
import DomainTextfield from '@/components/DomainTextfield.vue'
import DomainTextfieldAdditional from '@/components/DomainTextfieldAdditional.vue'

export default {
    data () {
        return {
           
        }
    },
    components: {
        BookmakersCheck,
        DomainTextfield,
        DomainTextfieldAdditional
    },
    props: [
        'itemData',
        'rowIndex'
    ],
    computed : {
        mydata () {
            console.log('here 2')
            return this.$store.state.additionalTextfields
        },
        count () {
            return this.$store.state.count
        },
        id () {
            return this.$store.state.selectedId
        },
        thisItemIsUpdated () {
            if (this.$store.state.itemIsUpdated.includes(this.itemData.id)) {
                return this.itemData.id
            } else {
                return ''
            }
            
        }
    },
    mounted () {
    }
}
</script>

<style>
.v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset {
    border: 1px solid #e3e3e3 !important;
}

.v-text-field--outlined fieldset, .v-text-field--outlined.v-input--has-state fieldset {
   border: 1px solid #e3e3e3 !important;
}
 
</style>