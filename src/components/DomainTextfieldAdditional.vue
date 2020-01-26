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
    computed : {
        countriesNames () {
            return this.$store.state.countriesData.map(a => a.name);
        }
    }
}
</script>

<style>

</style>