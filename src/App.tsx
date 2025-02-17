import { UpvoteProvider } from "./context/UpvoteContext";
import { defaultState } from "./context/defaultState";
import UpvoteList from "./components/UpvoteList";
import "./App.css";

function App() {
  return (
    <UpvoteProvider initialState={defaultState}>
      <div
        style={{ padding: "30px", margin: "20px", border: "1px solid #e0e0e0" }}
      >
        {defaultState.map((_, index) => (
          <UpvoteList key={index} listIndex={index} />
        ))}
      </div>
    </UpvoteProvider>
  );
}

export default App;
