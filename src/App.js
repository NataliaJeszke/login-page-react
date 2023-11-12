import "./App.css";
import Register from "./Register";
import  {AuthProvider}  from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <>
        <header>
          <h1>React Registration Page Project</h1>
        </header>
        <Register />
      </>
    </AuthProvider>
  );
}

export default App;
