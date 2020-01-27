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
                    <domain-textfield :itemData="itemData" @getNumberOfTextfields="addNewTextfield" ></domain-textfield>
                </v-card>
            </v-col>
        </v-row>

        <template v-if="this.itemLinks"> 
            <domain-textfield-additional 
                v-for="(rule, ruleID) in this.itemLinks"  
                :key="ruleID"
                :countryCode="ruleID"
                :domainText="rule"
                @removeDomainField="removeExistingDomain"
                :item="currentRowData"
            >
            </domain-textfield-additional>  

        </template>
 
        <domain-textfield-additional 
            v-for="index in this.numberOfNewTextfields"  
            :key="index"
            :item="currentRowData"
            countryCode = 'BG'
            @removeDomainField="removeTextFiellld"
        >
        </domain-textfield-additional>  

 
    </v-container>
</template>

<script>
import BookmakersCheck from '@/components/BookmakersCheck.vue'
import DomainTextfield from '@/components/DomainTextfield.vue'
import DomainTextfieldAdditional from '@/components/DomainTextfieldAdditional.vue'


export default {
    data () {
        return {
            numberOfNewTextfields: 0,
            itemToDelete: '',
            avoidItems: ['default'],
            currentRowData : this.itemData
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
        itemLinks () {
            if (this.itemData.links !== undefined)  {
                var raw = this.itemData.links;
                var itemsToDelete = this.avoidItems
                var filtered = Object.keys(raw)
                    .filter(key => !itemsToDelete.includes(key))
                    .reduce((obj, key) => {
                        obj[key] = raw[key];
                        return obj;
                    }, {});
                return filtered
            } else {
                return ''
            }            
        } 
    },
    methods: {
        addNewTextfield(value) {
            this.numberOfNewTextfields = value
        },
        removeTextFiellld () {
            this.numberOfNewTextfields--
        },
        removeExistingDomain (val) {
            this.avoidItems.push(val)
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