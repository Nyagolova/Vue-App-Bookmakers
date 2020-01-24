<template>
    <v-row no-gutters class="justify-end pa-2" style="flex-wrap: nowrap;">
        <v-col cols=7  class=" align-self-center">
            <v-card
                elevation=0
                class=" align-self-center"
            >  
                <v-text-field
                    background-color="#d8dbe5"
                    flat  
                    dense 
                    hide-details
                    filled
                    solo
                >
                </v-text-field>
            </v-card>
        </v-col>

        <v-col class="align-self-center flex-grow-0 flex-shrink-1">
            <v-card
                elevation=0 
                max-width="40"
                
            >  
                <v-btn  fab dark tile small elevation=0 color="red darken-1">
                    <v-icon dark>mdi-close</v-icon>
                </v-btn>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>