import Header from "../../components/layout/header/Header"
import Sidebar from "../../components/layout/sidebar/Sidebar"

const AppLayout = ({ children }) => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-grow-1">

        <Header />

        <main className="p-0 overflow-y-auto" style={{ height: 'calc(100vh - 90px)' }}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default AppLayout
