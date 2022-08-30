<template>
  <div id="app">
      <h1>Motion Pictures Database</h1>
    <EditableTable
      v-model="motionPictures"
      :fields="fields"
      @submit="handleUpdateMotionPicture($event)"
      @remove="handleRemoveMotionPicture($event)"
                   @add="handleAddMotionPicture($event)"
    ></EditableTable>
  </div>
</template>

<script>
import EditableTable from "./components/EditableTable.vue";
    import { addMotionPicture, deleteMotionPicture, getMotionPictures, updateMotionPicture } from "./services/motionpicture";

export default {
  name: "App",
  components: {
    EditableTable,
  },
  data() {
    return {
        fields: [
            { key: "name", label: "Name", type: "text", required: true },
            { key: "description", label: "Description", type: "description", required: true },
            { key: "releaseYear", label: "Release Year", type: "text" },
            { key: "edit", label: "", type: "edit" },
        ],
        motionPictures: [],
    };
  },
        async mounted() {
            this.motionPictures = await getMotionPictures();
        },
        methods: {
            async handleUpdateMotionPicture(motionpicture) {
                if (motionpicture.id) {
                    await updateMotionPicture(motionpicture);
                } else {
                    await addMotionPicture(motionpicture);
                }
            },
            //async handleAddMotionPicture(motionpicture) {
            //        await addMotionPicture(motionpicture);
            //    }
            //},
            async handleRemoveMotionPicture(motionpicture) {
                if (motionpicture.length > 0) {
                    await motionpicture.map(async (item) => {
                        await deleteMotionPicture(item.id);
                    })
                } else {
                    await deleteMotionPicture(motionpicture.id);
                }
            }
        }
};
</script>

<style>
#app {
  margin: 20px;
}
</style>