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
            assignments: [
                {id: 1, title: "first item", complete: false, tag: 'math'},
                {id: 2, title: "second item", complete: false, tag: 'science'},
                {id: 3, title: "third item", complete: false, tag: 'math'},
            ],

        }
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