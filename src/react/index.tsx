import React from 'react'

type Props = {
  color?: string
  iconName?: string
  className?: string
  style?: React.CSSProperties
}

export const IconMaster = (props: Props) => {
  return (
    <img
      className={props.className}
      style={props.style}
      srcSet={`https://icon-master.com/i/${props.iconName || 'Add'}/${
        props.color?.replace('#', '') || '676767'
      }`}
    />
  )
}
