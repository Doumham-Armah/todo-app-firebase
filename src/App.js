import { Container } from "react-bootstrap";
import SignUp from "./components/SignUp";
import ToDoList from "./components/ToDoList";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles.css";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>
      </Container>
      {/* <ToDoList /> */}
    </AuthProvider>
  );
}

export default App;
