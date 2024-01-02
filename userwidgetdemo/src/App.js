import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const myStyles = {
    fontFamily: "'Oswald', sans-serif", // Replace 'Roboto' with your preferred font
  };
  return (
    <div className="h-[100%]" style={myStyles}>
      <div className="flex flex-wrap max-w-[100%] h-[100vh] border border-black-700 bg-gray-300 md:">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
