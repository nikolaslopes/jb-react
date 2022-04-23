type LayoutProps = {
  children: React.ReactNode
}

import './styles.css'

export function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <div className="header">Seja bem vindo @user</div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}
