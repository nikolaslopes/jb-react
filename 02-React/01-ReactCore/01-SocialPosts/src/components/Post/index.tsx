import { useState } from 'react'
import './styles.css'

export function Post() {
  const [liked, setLiked] = useState(false)

  return (
    <div className="post">
      <section className="title">
        <img
          src="https://i.pinimg.com/originals/50/42/bb/5042bb3770d6a47b3cdbec7a55d109cb.jpg"
          alt="User Photo"
        />
        <div className="name-job">
          <p>Nix</p>
          <small>Full-stack Developer</small>
        </div>
      </section>

      <p>I like React :)</p>
      <section className="actions">
        {liked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="#ff5e95"
            stroke="#2c3e50"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
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
