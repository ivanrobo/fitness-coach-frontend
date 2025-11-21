import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function DashboardLayout() {
  const { user, logout } = useAuth();
  
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Coach AI</h1>
        <div className="user-info">
          <span>Welcome, {user.username}!</span>
          <button onClick={logout} className="logout-button">Logout</button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;