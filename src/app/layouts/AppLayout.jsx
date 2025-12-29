const AppLayout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: 250 }}>
        Sidebar
      </aside>

      {/* Main */}
      <div className="flex-grow-1">
        <header className="bg-light p-3 border-bottom">
          Header
        </header>

        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AppLayout
