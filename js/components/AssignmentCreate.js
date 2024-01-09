export default {
    template:`
        <form @submit.prevent="add">
          <div class="text-black">
            <input class="p-2" type="text" placeholder="add a task" v-model="newAssignment"/>
            <button class="bg-white p-2 border-l hover:bg-gray-200">Add</button>
          </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}