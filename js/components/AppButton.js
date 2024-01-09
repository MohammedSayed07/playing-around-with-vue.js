export default {
    template: `
        <button
            :class="{
                'border rounded px-5 py-2': true,
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'bg-blue-500 hover:bg-gray-600 text-white': type === 'primary',
                'bg-purple-200 hover:bg-purple-400': type === 'secondary',
            }"
        >
        <slot/>
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },

}