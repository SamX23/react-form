import Forms from "./forms/Forms";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 border py-3">
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
