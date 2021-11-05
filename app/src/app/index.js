import React from 'react'
import Comment from './children/Comment'
import Footer from './children/Footer'
import Header from './children/Header'
import Image from './children/image'

import LikeButton from './children/like_button'
import styles from './styles'

const App = ({ data }) => {

  return (
    <div style={styles.main}>

      {/* Pic */}
      <div style={styles.mainPic}>
        <Image data={data} />
      </div>

      {/* Content */}

      <div style={{
        width: '35%',
        // overflow: 'scroll',
        overflowY: 'scroll',
        position: 'relative',
        backgroundColor: "white",
        paddingLeft: '20px'

      }}>
        {/* header */}
        <Header data={data} />

        {/* Middle */}
        <main style={{
          overflow: 'scroll',

        }}>
          {
            data.edge_media_to_comment.edges.map((item, i) => (

              <Comment key={i} {...item} />
            ))
          }
        </main>

        {/* Footer */}
        <Footer data={data} />

      </div>

    </div>
  )
}

export default App
