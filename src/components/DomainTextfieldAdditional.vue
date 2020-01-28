<template>

    <v-row no-gutters >
        <v-col md="3" > </v-col>
        <v-col md="2" >
            <v-card class="pa-2 pt-0 pb-0" elevation=0 color="#f1f3f9">
                <v-select
                    background-color="white"
                    outlined 
                    dense 
                    max-width="300"
                    hide-details 
                    :menu-props="{offsetOverflow: true, offsetY: true, overflow: true, elevation: 1 }"
                    :items="countriesNames"
                    :value="getCountryByCode"
                    v-on:change="selectCountry"
                > 
                </v-select>
            </v-card>
        </v-col>
                    
        <v-col md="7" >
            <v-card class="pa-2 pt-0 pb-0"  elevation=0 color="#f1f3f9">
                <v-row no-gutters style="flex-wrap: nowrap;">
                    <v-col  
                        style="min-width: 100px; max-width: 100%;"
                        class="flex-grow-1 flex-shrink-0"
                    >
                        <v-text-field
                            background-color="#d8dbe5"
                            flat  
                            dense 
                            hide-details
                            filled
                            solo
                            class="ma-2 mr-0 mt-0"
                            :value="this.domainText"
                            v-on:change="changeOrAddDomain"
                        >
                        </v-text-field>
                    </v-col>

                    <v-col class="flex-grow-0 flex-shrink-1">
                        <v-btn 
                            color="red darken-1"
                            fab 
                            dark 
                            tile 
                            small 
                            elevation=0 
                            class="ma-2 ml-0 mt-0" 
                            @click="removeTextfield()"
                        >
                            <v-icon dark>mdi-close</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>


 
</template>

<script>
export default {
    props: ['countryCode', 'domainText', 'item'],
    data () {
        return  {
            defaultCountry: 'BG',
            linkText: '',
            textfieldIndex: this.$vnode.key
        }
    },
    computed : {
        countriesNames () {
            return this.$store.state.countriesData.map(a => a.name);
        },
        getCountryByCode() {
            var countryByCode = this.$store.state.countriesData.filter(obj => {return obj.code === this.countryCode}).map(a => a.name)[0]
            if (countryByCode) {
                return countryByCode
            } else {
                return 'Bulgaria'
            }
        },
        getCodeByCountry () {
            var codeByCountry = this.$store.state.countriesData.filter(obj => {return obj.name === this.defaultCountry}).map(a => a.code)[0]
            if (codeByCountry) {
                return codeByCountry
            } else {
                return 'BG'
            }
        } 
    },
    methods: {
        removeTextfield () {
            this.$emit('removeDomainField', this.countryCode)
            var dataForDelete = {
                id: this.item.id,
                rowIndex: this.textfieldIndex,
                countryCode: this.getCodeByCountry
            }
            this.$store.commit('REMOVE_DOMAIN_BY_ID', dataForDelete)
        },
        selectCountry (code) {
            this.defaultCountry = code
            var newDomainData = {
                rowIndex: this.textfieldIndex,
                id: this.item.id,
                code: this.getCodeByCountry,
                link: this.linkText || this.domainText  
            }
            this.$store.commit('UPDATE_BOOKMAKER_NEW_DOMAINS', newDomainData)
        },
        changeOrAddDomain (link) {
            this.linkText = link || this.domainText  
            var newDomainData = {
                rowIndex: this.textfieldIndex,
                id: this.item.id,
                code: this.getCodeByCountry,
                link: link
            }
            this.$store.commit('UPDATE_BOOKMAKER_NEW_DOMAINS', newDomainData)
        }
    }
}
</script>

<style>

</style>