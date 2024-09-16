import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);

  return (
    <>
      <h4>blog app</h4>
    </>
  );
}

export default App;
