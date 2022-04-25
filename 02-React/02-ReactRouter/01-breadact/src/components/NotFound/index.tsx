import notfound from '../../assets/images/notfound.jpg'

export function NotFound() {
  return (
    <div>
      <img
        src={notfound}
        alt="page not found"
        style={{ width: '50vw', height: '80vh' }}
      />
    </div>
  )
}
