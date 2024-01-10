import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-3 mb-5">
          <assignment-list :assignments="filters.inProgress" heading="In Progress" ></assignment-list>
          <assignment-list :assignments="filters.completed" heading="Completed"></assignment-list>
        </section>
        
        <assignment-create @add="add"></assignment-create>
    `,

    data() {
        return {
            assignments: []
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
                complete: false
            })
        }
    }
}