export default {
    template: `
        <div :class="{
            'bg-gray-700 border border-gray-600 p-4 rounded': true
        }">
            <h2 v-if="$slots.heading" class="font-bold text-2xl">
                <slot name="heading" />                
            </h2>
            
            <slot />
        </div>
    `
}