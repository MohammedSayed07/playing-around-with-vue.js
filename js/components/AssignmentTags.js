export default {
    template: `
        <div class="flex gap-2">
            <button
                class="border px-1 py-px hover:border-blue-400 hover:text-blue-400"
                :class="{
                    'border-blue-400 text-blue-400': tag === currentTag
                }"
                v-for="tag in tags"
                @click="$emit('change', tag)"
            >{{ tag }}</button>
         </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)]
        },
    }
}