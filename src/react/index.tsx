import React from 'react'
import { IconMasterType } from '../index.types'

type Props = {
  color?: string
  name?: IconMasterType
  className?: string
  style?: React.CSSProperties
}

export const IconMaster = (props: Props) => {
  return (
    <img
      className={props.className}
      style={props.style}
      srcSet={`https://icon-master.com/i/${props.name || 'Add'}/${
        props.color?.replace('#', '') || '676767'
      }`}
    />
  )
}
