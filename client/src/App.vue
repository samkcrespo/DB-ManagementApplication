<template>
    <div id="app">
        <!--<h1>Hello from App.vue</h1>-->
        <div class="container text-center  mt-5 mb-5">
            <h1 class="mt-5 fw-bolder text-success "> Motion Picture Database </h1>
            <div class="table-responsive my-5">

                <!-- The table component -->
                <DataTable :fields='fields' :data="studentData" :actions="actions"></DataTable>
            </div>
        </div>
</div>
</template>

<script>
    // Importing the table component
    import DataTable from './components/DataTable.vue'
    export default {
        name: 'App',
        components: {
            DataTable
        },
        setup() {
            //An array of values for the data
            const data = [
                
            ]
            const fields = [
                 'Name', 'Description', 'Release Year', 'Actions'
            ]
            const actions = [
                {
                  
                    btn_text: "Copy",
                    event_name: "on-copy",
                    class: "btn btn-primary my-custom-class",
                    event_payload: {
                        msg: "my custom msg"
                    },
                   //{
                   // btn_text: "Add",
                   // event_name: "on-add",
                   // class: "btn btn-primary my-custom-class",
                   // event_payload: {
                   //     msg: "my custom msg"
                   // },
                   //  {
                   // btn_text: "Delete",
                   // event_name: "on-delete",
                   // class: "btn btn-primary my-custom-class",
                   // event_payload: {
                   //     msg: "my custom msg"
                   // },
                
                }
            ]

            return { data, fields, actions }
        },
    }
</script>