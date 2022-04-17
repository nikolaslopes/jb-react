import { Post } from './components/Post'

function App() {
  return (
    <div className="App">
      <Post
        avatarUrl="https://i.pinimg.com/originals/65/4d/1d/654d1df29a42e3929f95c353198f60d7.jpg"
        userName="Nix"
        userRole="Full-stack developer"
        userPostContent="I like sass ;D"
      />

      <Post
        avatarUrl="https://i.pinimg.com/originals/6e/e7/fa/6ee7fa1ed8dd42b318929c6ca9555764.jpg"
        userName="Sanji"
        userRole="Backend developer"
        userPostContent="I like foods!"
      />
    </div>
  )
}

export default App
