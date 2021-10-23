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
import Librarian from "./pages/Dashboard/Librarian/Librarian";
import NotFound from "./components/NotFound/NotFound";
import BookDetails from "./pages/Dashboard/BookDetails/BookDetails";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [issueBooks, setIssueBooks] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/library">
            <LibraryHome />
          </PrivateRoute>
          <PrivateRoute path="/issueBook">
            <IssueBook issueBooks={issueBooks} setIssueBooks={setIssueBooks} />
          </PrivateRoute>
          <PrivateRoute path="/books">
            <Books />
          </PrivateRoute>
          <PrivateRoute path="/addBooks">
            <AddBook />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/addLibrarian">
            <Librarian />
          </PrivateRoute>
          <Route path="/bookId/:bookId">
            <BookDetails issueBooks={issueBooks} />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
