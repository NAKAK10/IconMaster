import { defineComponent, h, PropType } from 'vue'
import { IconMasterType } from '../index.types'

type Props = {
	colorRef: string
	nameRef: IconMasterType
}

export default defineComponent({
	props: {
		colorRef: { type: String, default: '676767' },
		nameRef: { type: String as PropType<IconMasterType>, default: 'Add' },
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
