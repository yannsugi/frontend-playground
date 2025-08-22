import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const patterns = [
    { name: 'Singleton', path: '/singleton' },
    { name: 'Provider', path: '/provider' },
    { name: 'Prototype', path: '/prototype' },
  ];

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Design Patterns</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {patterns.map((pattern) => (
              <li key={pattern.path}>
                <Link to={pattern.path}>{pattern.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;