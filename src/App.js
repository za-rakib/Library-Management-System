import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LibraryHome from "./pages/Dashboard/LibraryHome/LibraryHome";
import Books from "./pages/Dashboard/Books/Books";
import AddBook from "./pages/Dashboard/AddBook/AddBook";
import IssueBook from "./pages/Dashboard/IssueBook/IssueBook";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login";
import { createContext, useState } from "react";
import SignUp from "./pages/SignUp/SignUp";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/library">
              <LibraryHome />
            </Route>
            <PrivateRoute path="/books">
              <Books />
            </PrivateRoute>
            <PrivateRoute path="/addBooks">
              <AddBook />
            </PrivateRoute>
            <PrivateRoute path="/issueBook">
              <IssueBook />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
