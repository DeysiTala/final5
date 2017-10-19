
class Model {

      constructor() {
            this.todos = [];
            
            this.inputValue = null;
            this.render = undefined;
           /* this.listItem = */
    
   }
  
      subscribe(render) {
            this.render = render;
      }
      inform() {
            console.log(this.todos.map(e => e.text));
            this.render();
      }
      addTodo(text) {
            this.todos.push({
                  id: Utils.uuid(),
                  text: text,
                  completed: false
            });
            this.inform();
      }
      updateTodo(index, todo) {
            this.todos[index] = todo;
            this.inform();
      }
      removeTodo(todo) {
            this.todos = this.todos.filter(item => item !== todo);
            this.inform();
      }
      checkTodo(todo) {
            if (checked) {
                  listItem.className = 'responded';
            } else {
                  listItem.className = '';
            }
            this.inform();
      }
}




const App = ({ title, model }) => {
      const items = model.todos.map((todo, index) => {
            return (
                  <li key={todo.id}>
                        <input
                              type="text"
                              value={todo.text}
                              onChange={e =>
                                    model.updateTodo(index, {
                                          id: todo.id,
                                          text: e.target.value,
                                          completed: todo.completed
                                    })}
                        />
                        <label >Confirmed<input className="responded" type="checkbox" ></input></label>


                        <a onClick={() => model.removeTodo(todo)}> remove</a>
                  </li>

            );
      });
      return (

            <div>
                  <header>
                        <h1> {title} </h1>
                        <p></p>
                  </header>
                  <form id="registrar"
                        onSubmit={e => {
                              e.preventDefault();
                              model.addTodo(model.inputValue);
                        }}
                  >
                        <input onChange={e => (model.inputValue = e.target.value)} placeholder="Escribe tu nombre... "></input>
                        
                        
                        <button type="submit">Submit</button>


                  </form>
                  <form 
            
            onSubmit={e => {
                              e.preventDefault();
                              model.addTodo(model.inputValue);
                        }}
                  >
                        <input onChange={e => (model.inputValue = e.target.value)} placeholder="Escribe tu comentario... "></input>
                        
                        
                        <button type="submit">Submit</button>
            </form>
                  <h2>Comentarios</h2>
                  <ul id="invitedList"> {items} </ul>
            </div>
      );
};

let model = new Model();
let counter = 1;
let render = () => {
      console.log('render times: ', counter++);
      ReactDOM.render(
            <App title="" model={model} />,
            document.getElementById('container')
      );
};

model.subscribe(render);
render(); 