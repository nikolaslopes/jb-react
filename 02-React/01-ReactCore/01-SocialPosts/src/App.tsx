import { Post } from './components/Post'

const posts = [
  {
    id: Math.random(),
    avatarUrl:
      'https://i.pinimg.com/originals/65/4d/1d/654d1df29a42e3929f95c353198f60d7.jpg',
    userName: 'Nix',
    userRole: 'Full-stack developer',
    userPostContent: 'I like sass ;D',
  },
  {
    id: Math.ceil(Math.random() * 100),
    avatarUrl:
      'https://i.pinimg.com/originals/6e/e7/fa/6ee7fa1ed8dd42b318929c6ca9555764.jpg',
    userName: 'Sanji',
    userRole: 'Backend developer',
    userPostContent: 'I like foods!',
  },
  {
    id: Math.ceil(Math.random() * 100),
    avatarUrl:
      'https://i.pinimg.com/originals/32/72/54/327254ba58a75301ae05397957d20f12.jpg',
    userName: 'Batman',
    userRole: 'Hero',
    userPostContent: 'I do not like bats',
  },
  {
    id: Math.ceil(Math.random() * 100),
    avatarUrl:
      'https://i.pinimg.com/originals/c8/b0/aa/c8b0aa09026f372342d6fef97800bda3.jpg',
    userName: 'Luffy',
    userRole: 'Captain',
    userPostContent: "I'm gonna the pirates king!",
  },
]

function App() {
  return (
    <div className="App">
      {posts.map((post) => (
        <Post
          key={post.id}
          avatarUrl={post.avatarUrl}
          userName={post.userName}
          userRole={post.userRole}
          userPostContent={post.userPostContent}
        />
      ))}
    </div>
  )
}

export default App
