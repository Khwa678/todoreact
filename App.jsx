import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from "./comp/AppName";
import AddTodo from "./AddTodo";
import Todoitem from "./Todoitem";
import TODO from './TODO';
import "./APP2.css";

function App() {
  return (
    <center className="todo-container text-center">
      <AppName />
      <AddTodo />
      <div class='item'>
      
      </div>
      <Todoitem />
      
   <TODO/>
    </center >
  );
}

export default App;



