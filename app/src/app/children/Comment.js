import React from 'react'
import styles from '../styles'
import LikeUnlikeButtons from './like_button/LikeUnlikeButtons'

export default function Comment(props) {

    return (
        <div style={styles.middleContainer}>
            <div>
                <span style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginRight: 5
                }}>{props.node.owner.username} </span>
                <span style={{
                    fontSize: 13,
                }}>{props.node.text}</span>
            </div>
            <div style={{
                marginRight: 10
            }}>
                <LikeUnlikeButtons size={12} />
            </div>

        </div>

    )
}
