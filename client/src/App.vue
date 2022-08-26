<template>
    <div id="app">
        <h1>Hello from App.vue</h1>
        <b-table :items="items" :fields="fields">
        <template #cell(name)="data">
            <b-form-input type="text" :value="data.value"></b-form-input>
        </template>
        <template #cell(department)="data">
            <b-form-select v-model="data.value" :options="['Development', 'Marketing', 'HR', 'Accounting']" class="form-control"></b-form-select>
        </template>
        <template #cell(age)="data">
            <b-form-input type="number" :value="data.value"></b-form-input>
        </template>
        <template #cell(dateOfBirth)="data">
            <b-form-datepicker v-model="data.value"></b-form-datepicker>
        </template>
        </b-table>
    </div>

</template>

<script>
    export default {
        name: "App",
        components: {},
        data() {
            return {
                fields: [
                    { key: "name", label: "Name" },
                    { key: "department", label: "Department" },
                    { key: "age", label: "Age" },
                    { key: "dateOfBirth", label: "Date Of Birth" },
                ],
                items: [
                    { age: 40, name: 'Dickerson', department: 'Development', dateOfBirth: '1984-05-20' },
                    { age: 21, name: 'Larsen', department: 'Marketing', dateOfBirth: '1984-05-20' },
                    { age: 89, name: 'Geneva', department: 'HR', dateOfBirth: '1984-05-20' },
                    { age: 38, name: 'Jami', department: 'Accounting', dateOfBirth: '1984-05-20' }
                ],
            };
        },
    };
</script>

<style>
    #app {
        text-align: center;
        margin-top: 60px;
    }

    thead, tbody, tfoot, tr, td, th {
        text-align: left;
    }
</style>