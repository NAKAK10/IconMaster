import { defineComponent, h, PropType } from 'vue'
import { IconMasterType } from '../index.types'

type Props = {
	color: string
	name: IconMasterType
}

export default defineComponent({
	props: {
		color: { type: String, default: '676767' },
		name: { type: String as PropType<IconMasterType>, default: 'Add' },
	},
	setup(props: Props) {
		return () =>
			h('img', {
				src: `https://icon-master.com/i/${props.name}/${props.color.replace(
					'#',
					''
				)}`,
			})
	},
})
