export default {
    template:`
        <form @submit.prevent="add">
          <div class="text-black flex">
            <input class="p-2 w-full" type="text" placeholder="add a task" v-model="newAssignment" required/>
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