

import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        konu: "",
        katilimci: "",
        katilimciIki: "",
        katilimciUc: "",
        katilimciDort: "",
        katilimciBes: "",
        date: "",
        shour: "",
        fhour: "",
        completed: false
      },
      organiserList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/organiser/")
      .then(res => this.setState({ organiserList: res.data }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
      
      </div>
    );
  };
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.organiserList.filter(
      item => item.completed === viewCompleted
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`organiser-konu mr-2 ${
            this.state.viewCompleted ? "completed-organiser" : ""
          }`}
          konu={item.katilimci}
        >
          {item.konu}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-success"
          >
           {" "} {" "}
            Goster{" "}
          </button>


          <button
            onClick={() => this.editItem(item)}
            className="btn btn btn-secondary mr-2"
          >
            {" "}
            Duzenle{" "}
          </button>


          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Sil{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/organiser/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/organiser/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/organiser/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { konu: "", katilimci: "",katilimciIki: "",katilimciUc: "",katilimciDort: "",katilimciBes: "", date: "", shour: "", fhour: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Meeting organiser</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Toplanti Ekle
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;
