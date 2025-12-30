import React from "react";
import {
  LayoutDashboard,
  User,
  BarChart3,
  FileText,
  MessageSquare,
  FolderKanban,
  Settings,
  Info
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { id: 1, icon: LayoutDashboard, label: "Dashboard", link: "/", isActive: true },
    { id: 2, icon: User, label: "Profile", link: "/profile", isActive: false },
    { id: 3, icon: BarChart3, label: "Analysis", link: "/analysis", isActive: false },
    { id: 4, icon: FileText, label: "Accounting", link: "/accounting", isActive: false },
    { id: 5, icon: MessageSquare, label: "Messages", link: "/messages", isActive: false, badge: true },
    { id: 6, icon: FolderKanban, label: "Projects", link: "/projects", isActive: false }
  ];

  const bottomMenuItems = [
    { id: 7, icon: Settings, label: "Settings", link: "/settings", isActive: false },
    { id: 8, icon: Info, label: "Info", link: "/info", isActive: false }
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">
            <span className="circle left"></span>
            <span className="circle right"></span>
          </div>
          <h4 className="brand-name">
            Design<span style={{ color:"#bdb2b2"}}>Hire</span>
          </h4>
        </div>
      </div>


      <nav className="sidebar-nav">
        <ul className="nav flex-column">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className={`nav-item  ${item.isActive ? "px-0" : "px-4"}`}>
                <a
                  href={item.link}
                  className={`nav-link ${item.isActive ? "active" : ""}`}
                >
                  <Icon size={18} className="nav-icon text-white" />
                  <span className="nav-label">{item.label}</span>
                  {item.badge && <span className="badge-dot"></span>}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav flex-column sidebar-bottom">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="nav-item">
                <a href={item.link} className="nav-link">
                  <Icon size={18} className="nav-icon text-white" />
                  <span className="nav-label">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
