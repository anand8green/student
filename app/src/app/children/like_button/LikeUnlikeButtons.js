import React, { useState } from 'react'
import LikeButton from '.'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeUnlikeButtons = ({ size }) => {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div
            style={{
                paddingRight: 15,
                paddingLeft: 15
            }}
            onClick={handleLike}>
            {like ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
        </div>
    )
}

export default LikeUnlikeButtons
