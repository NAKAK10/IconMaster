import { defineComponent, h } from 'vue'

type Props = {
	colorRef: string
	nameRef: string
}

export default defineComponent({
	props: {
		colorRef: { type: String, default: '676767' },
		nameRef: { type: String, default: 'Add' },
	},
	setup(props: Props) {
		return () =>
			h('img', {
				src: `https://icon-master.com/i/${
					props.nameRef
				}/${props.colorRef.replace('#', '')}`,
			})
	},
})
