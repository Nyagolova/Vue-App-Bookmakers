<template>
    <v-container ma-0 pa-0>
        <v-row no-gutters >
            <v-col md="3" >
                <v-card class="pa-2 pb-0"  elevation=0 color="#f1f3f9">
                    <bookmakers-check></bookmakers-check>
                </v-card>
            </v-col>

            <v-col md="2" >
                <v-card class="pa-2 pb-0"  elevation=0 color="#f1f3f9">
                    <v-card-text class="text-end font-weight-medium pt-4">  Default:</v-card-text>
                </v-card>
            </v-col>
            
            <v-col md="7" >
                <v-card  class="pa-2 pb-0 d-flex align-stretch"  elevation=0 color="#f1f3f9">
                    <domain-textfield></domain-textfield>
                </v-card>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col md="3"> </v-col>
            <v-col md="2" >
                <v-card class="pa-2 pt-0 pb-0" elevation=0 color="#f1f3f9">
                    <v-select
                        background-color="white"
                        outlined 
                        dense 
                        max-width="300"
                        hide-details 
                        :menu-props="{  offsetOverflow: true, offsetY: true, overflow: true, elevation: 1 }"
                        :items="this.countriesNames" 
                    > 
                    </v-select>
                </v-card>
            </v-col>
            
            <v-col md="7" >
                <v-card class="pa-2 pt-0 pb-0"  elevation=0 color="#f1f3f9">
                    <domain-textfield-additional></domain-textfield-additional>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import BookmakersCheck from '@/components/BookmakersCheck.vue'
import DomainTextfield from '@/components/DomainTextfield.vue'
import DomainTextfieldAdditional from '@/components/DomainTextfieldAdditional.vue'

export default {
    components: {
        BookmakersCheck,
        DomainTextfield,
        DomainTextfieldAdditional
    },
    computed : {
        countriesNames () {
            return this.$store.state.countriesData.map(a => a.name);
        }
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