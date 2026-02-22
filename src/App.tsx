import './App.css'
import { SermonsPage } from './pages/SermonsPage'

function App() {
  return (
    <div className="app">
      <nav className="site-nav">
        <span className="site-nav__brand">Bethesda House of Grace</span>
      </nav>
      <main className="site-main">
        <SermonsPage />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Bethesda House of Grace. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
