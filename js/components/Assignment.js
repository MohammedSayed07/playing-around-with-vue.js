export default {
    template:`
        <li>
          <label class="flex justify-between items-center">
            {{ assignment.title }}
            
            <input type="checkbox" v-model="assignment.complete" class="ml-3"/>
          </label>
        </li>
    `,

    props: {
        assignment: Object
    }
}