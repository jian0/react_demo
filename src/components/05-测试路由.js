import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div>
        {/* exact 精确匹配路由 */}
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/about" exact component={About} />>
        </div>
      </div>
    </Router>
  );    
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}