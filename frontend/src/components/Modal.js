// frontend/src/components/Modal.js

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Toplanti Duzenle </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="konu">Toplanti Konusu</Label>
              <Input
                type="text"
                name="konu"
                value={this.state.activeItem.konu}
                onChange={this.handleChange}
                placeholder="Toplanti Konusunu Giriniz"
              />
            </FormGroup>
            <FormGroup>
              <Label for="katilimci">Katilimcilar</Label>
              

<ul class="list-group">
  <li class="list-group-item"><Input
                type="text"
                name="katilimci"
                value={this.state.activeItem.katilimci}
                onChange={this.handleChange}
                placeholder="Toplanti Katilimcilarini Giriniz"
              /></li>
  <li class="list-group-item"><Input
                type="text"
                name="katilimciIki"
                value={this.state.activeItem.katilimciIki}
                onChange={this.handleChange}
                placeholder="Toplanti Katilimcilarini Giriniz"
              /></li>
  <li class="list-group-item"><Input
                type="text"
                name="katilimciUc"
                value={this.state.activeItem.katilimciUc}
                onChange={this.handleChange}
                placeholder="Toplanti Katilimcilarini Giriniz"
              /></li>
  <li class="list-group-item"><Input
                type="text"
                name="katilimciDort"
                value={this.state.activeItem.katilimciDort}
                onChange={this.handleChange}
                placeholder="Toplanti Katilimcilarini Giriniz"
              /></li>
  <li class="list-group-item"><Input
                type="text"
                name="katilimciBes"
                value={this.state.activeItem.katilimciBes}
                onChange={this.handleChange}
                placeholder="Toplanti Katilimcilarini Giriniz"
              /></li>
</ul>


            </FormGroup>

            <FormGroup>
              <Label for="date">Toplanti Tarihi</Label>
              <Input
                type="date"
                name="date"
                value={this.state.activeItem.date}
                onChange={this.handleChange}
                placeholder="Toplanti Tarihini Giriniz"
              />
            </FormGroup>

     
            <FormGroup>
              <Label for="shour">Baslangic Saati</Label>
              <Input
                type="time"
                name="shour"
                value={this.state.activeItem.shour}
                onChange={this.handleChange}
                placeholder="Toplanti Baslangic Saatini Giriniz"
              />
            </FormGroup>

            <FormGroup>
              <Label for="fhour">Bitis Saati</Label>
              <Input
                type="time"
                name="fhour"
                value={this.state.activeItem.fhour}
                onChange={this.handleChange}
                placeholder="Toplanti Bitis Saatini Giriniz"
              />
            </FormGroup>


          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Kaydet
          </Button>
        </ModalFooter>
        
      </Modal>
    );
  }
}
