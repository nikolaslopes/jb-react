import { useState } from 'react'
import './styles.css'

type PostProps = {
  avatarUrl: string
  userName: string
  userRole: string
  userPostContent: string
}

export function Post({
  avatarUrl,
  userName = 'Not informet',
  userRole = 'Not informed',
  userPostContent = '0 posts',
}: PostProps) {
  const [liked, setLiked] = useState(false)

  function like() {
    setLiked(true)
  }

  function deslike() {
    setLiked(false)
  }

  return (
    <div className="post">
      <section className="title">
        <img src={avatarUrl} alt="User Photo" />
        <div className="name-job">
          <p>{userName}</p>
          <small>{userRole}</small>
        </div>
      </section>

      <p>{userPostContent}</p>
      <section className="actions">
        {liked ? (
          <svg
            onClick={deslike}
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="#ff5e95"
            stroke="#ff5e95"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        ) : (
          <svg
            onClick={like}
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        )}
      </section>
    </div>
  )
}
