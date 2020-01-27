<template>
        <v-col class="flex-grow-0 flex-shrink-1 mr-4" style="min-width:300px">
            <v-card elevation=0 tile color="#f1f3f9">
                <v-btn  
                    tile depressed class="mt-2 mr-1" color="#023955" dark
                    @click="checkAllBookmakers()"
                >
                    <v-icon dark left>mdi-check</v-icon>Check all
                </v-btn>

                <v-btn 
                    tile depressed class="mt-2 " color="red darken-1" dark
                    @click="uncheckAllBookmakers()"
                >
                    <v-icon dark left>mdi-close</v-icon>Remove All
                </v-btn>
            </v-card>
        </v-col>
</template>

<script>
export default {
    methods : {
        checkAllBookmakers () {
            this.$store.commit('CHECK_ALL_BOOKMAKERS', 1)
        },
        uncheckAllBookmakers () {
            this.$store.commit('CHECK_ALL_BOOKMAKERS', 0)
        }
    }
}
</script>

<style>

</style>