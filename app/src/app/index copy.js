import React from 'react'
import Image from './children/image'
import { getCaptionFromEdges } from './children/image/helpers'
import LikeButton from './children/like_button'
import styles from './styles'

const App = (props) => {
  const { data } = props

  console.log(props)

  return (
    <main style={styles.main}>
      <div style={{
        width: '60%',
        paddingTop: '30px',
        paddingBottom: '30px',
        backgroundColor: "#f1f3f5",
      }}>
        <Image data={data} />
      </div>

      {/* right side */}
      <div style={{
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',

      }}>
        {/* Header */}
        <header style={{
          backgroundColor: "teal"
        }} >
          header
        </header>
        {/* Main */}
        <main style={{
          flex: 1,
          backgroundColor: "green",
          overflow: 'scroll'
        }}>
          lorem500

        </main>
        {/* Footer */}
        <footer
          style={{
            backgroundColor: "orange",

          }}
        >
          footer
          <LikeButton />
        </footer>

      </div>
    </main>
  )
}

export default App
