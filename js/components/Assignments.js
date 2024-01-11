import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="mb-5 flex gap-8">
          <assignment-list :assignments="filters.inProgress" heading="In Progress" >
            <assignment-create @add="add" class="mt-4"></assignment-create>
          </assignment-list>
          <assignment-list 
              v-show="hide"
              :assignments="filters.completed" heading="Completed" 
              can-hide 
              @hide-assignments="hide = false"
          ></assignment-list>
        </section>

        
    `,

    data() {
        return {
            assignments: [],
            hide: true
        }
    },
    created() {
        fetch("http://localhost:3001/assignments")
            .then((response) => {
                return response.json()
            }).then((assignments) => {
                this.assignments = assignments;
        })
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete),
            }
        }
    },

    methods: {
        add(title) {
            this.assignments.push({
                id: this.assignments.length + 1,
                title: title,
                complete: false,
                tag:"math"
            })
        }
    }
}