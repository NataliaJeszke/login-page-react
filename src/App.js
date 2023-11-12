import "./App.css";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center">
          <header className="mb-5">
            <h1>Registration Form</h1>
          </header>
          <Register />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
