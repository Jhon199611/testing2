<template>
  <div>
    <b-table striped hover :items="STUDENTS"></b-table>
  </div>
</template>

<script>
import {TypesStore} from "./../store/types/store.type";
import {mapActions,mapGetters} from "vuex";

export default {
    methods:{
        ...mapActions({
            GET_STUDENTS: TypesStore.actions.GET_STUDENTS
        })
    },
    computed:{
        ...mapGetters({
            STUDENTS:TypesStore.state.STUDENTS
        })
    },
    mounted() {
        this.GET_STUDENTS();
    },
}
</script>

<style>

</style>