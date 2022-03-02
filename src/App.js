import "./App.css";
import Task from "./Task.js";
// import Navbar from "./Navbar.js";
// import Footer from "./Footer.js";
import CustomDateRangePickerDay from "./Datepicker.js";
function App() {
  return (
    <div className="App">
      <CustomDateRangePickerDay />
      <Task  />
    </div>
  );
}

export default App;
