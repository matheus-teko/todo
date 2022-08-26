import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  buscarTarefa = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  add = () => {
    if (this.state.tarefa !== "" && !this.state.tarefa.match(/^[ \t]+$/)) {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };
  enter = (e) => {
    if (this.state.tarefa.length > 0 && e.key === "Enter") {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };
  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <input
          onChange={this.buscarTarefa}
          onKeyPress={this.enter}
          value={this.state.tarefa}
          type="text"
          placeholder="Insira um valor"
        />

        <button onClick={this.add}>Adicionar</button>

        {this.state.lista.map((item) => (
          <div>
            <ul key={item.id}>
              <li>{item.tarefa}</li>
            </ul>
            <button onClick={() => this.remove(item.id)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}
