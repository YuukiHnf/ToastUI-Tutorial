import "./styles.css";
import InitEditor from "./Editor/InitEditor";
import EditorByInstance from "./Editor/EditorByInstance";

export default function App() {
  return (
    <div className="App">
      <h1>This is first Editor in ToastUI</h1>
      {/* <InitEditor /> */}
      <EditorByInstance />
    </div>
  );
}
