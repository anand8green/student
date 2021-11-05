import React from 'react'
import styles from './styles'
import { getCaptionFromEdges } from './helpers'

const Image = (props) => {
  const { data } = props
  return (
    <img
      src={data.display_url}
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
    />
  )
}

export default Image
