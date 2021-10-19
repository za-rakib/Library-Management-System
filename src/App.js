import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LibraryHome from "./pages/Dashboard/LibraryHome/LibraryHome";
import Books from "./pages/Dashboard/Books/Books";
import AddBook from "./pages/Dashboard/AddBook/AddBook";
import IssueBook from "./pages/Dashboard/IssueBook/IssueBook";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
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
  // const [issueBooks, setIssueBooks] = useState([]);

  // const handleIssueBook = (props) => {
  //   setIssueBooks((prevIssueBooks) => {
  //     return [...prevIssueBooks,props]
  //   })
  // };
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
          <Route path="/library">
            <LibraryHome />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/addBooks">
            <AddBook />
          </Route>
          <Route path="/issueBook">
            <IssueBook issueBooks={issueBooks} setIssueBooks={setIssueBooks} />
          </Route>
          {/* <PrivateRoute path="/books">
              <Books />
            </PrivateRoute>
            <PrivateRoute path="/addBooks">
              <AddBook />
            </PrivateRoute>
            <PrivateRoute path="/issueBook">
              <IssueBook />
            </PrivateRoute> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/addLibrarian">
            <Librarian />
          </Route>
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
