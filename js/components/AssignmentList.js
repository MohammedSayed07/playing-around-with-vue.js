import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";
export default {
    components: { Assignment , AssignmentTags, Panel },
    template: `
        <Panel v-show="assignments.length" class="w-64">
          <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2"> 
              {{ heading }}
              <span>({{ assignments.length }})</span>
            </h2>
            <button 
                v-show="canHide"
                @click="$emit('hideAssignments')"
            >&times;</button>
          </div>
          
          <assignment-tags 
              :initial-tags="assignments.map((a)=>a.tag)"
              v-model:current-tag="currentTag"
          />
          
          <ul class="mt-4">
            <assignment
                class="border p-2 border-gray-300 border-opacity-20"
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>
          </ul>
          <slot></slot>
        </Panel>
    `,

    props: {
        heading: String,
        assignments: Array,
        canHide: {type: Boolean, default: false}
    },
    data() {
        return {
            currentTag: 'all',
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