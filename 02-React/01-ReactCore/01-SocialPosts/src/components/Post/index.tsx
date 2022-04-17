import { useState } from 'react'
import { Like } from '../Like'
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

  function unLike() {
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
        <Like liked={liked} like={like} unLike={unLike} />
      </section>
    </div>
  )
}
