import { Container } from "react-bootstrap";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ToDoList from "./components/ToDoList";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <ThemeProvider>
            <PrivateRoute exact path="/" component={ToDoList} />
          </ThemeProvider>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
