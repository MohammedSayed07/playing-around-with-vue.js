import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
    components: { Assignment , AssignmentTags },
    template: `
        <section v-show="assignments.length" class="border border-gray-300 border-opacity-20 p-2">
          <h2 class="font-bold mb-2"> {{ heading }} </h2>
          
          <assignment-tags 
              :initial-tags="assignments.map((a)=>a.tag)"
              v-model:current-tag="currentTag"
          />
          
          <ul class="mt-4">
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>
          </ul>
        </section>
    `,

    props: {
        heading: String,
        assignments: Array
    },
    data() {
        return {
            currentTag: 'all'
        }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all'){
                return this.assignments
            }

            return this.assignments.filter((a) => a.tag === this.currentTag)
        }
    }

}