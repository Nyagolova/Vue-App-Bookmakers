<template>
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
                class="ma-2 mr-0"
                :value="domainLink"
            >  
            </v-text-field>
        </v-col>

        <v-col class="flex-grow-0 flex-shrink-1">
            <v-btn 
                color="light-green accent-4"
                fab 
                dark 
                tile 
                small 
                elevation=0 
                class="ma-2 ml-0" 
                @click="addTextfieldd()"
            >
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data () {
        return  {
            numberOfTextfields: 0
        }
    },
    props: ['itemData'],
    computed : {
        domainLink () {
            if (this.itemData.links) {
                if (this.itemData.links.default) {
                    return this.itemData.links.default
                } else {
                    return ''
                } 
            } else {
                return ''
            }
        }
    },
    methods: {
        addTextfieldd() {
            this.numberOfTextfields += 1
            this.$emit('getNumberOfTextfields', this.numberOfTextfields)
        }
    }
}
</script>

<style>

</style>