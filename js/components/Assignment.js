export default {
    template:`
        <li>
          <label class="flex justify-between items-center">
            {{ assignment.title }}
            
            <input type="checkbox" v-model="assignment.complete"/>
          </label>
        </li>
    `,

    props: {
        assignment: Object
    }
}