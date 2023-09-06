import { MyProvider } from "./components/MyProvider";
import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <h1>Context API Example</h1>
      <MyProvider>
        <Counter />
      </MyProvider>
    </div>
  );
}

export default App;
