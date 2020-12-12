import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import jQuery from 'jquery';
import "../../css/contact-page.scss";

class ContactPage extends React.Component {
    constructor(props) {
      super(props);
      this.formRef = React.createRef();
      this.state = {
        modalOpen: false
      };
    }

    componentDidMount() {
      document.title = "YoungMakers Contact";
    }

    submitForm() {
      jQuery.ajax({
        url: 'https://usebasin.com/f/bc2928f260f0',
        type: 'post',
        dataType: 'application/x-www-form-urlencoded',
        data: jQuery(this.formRef.current).serialize()
      }).always(() => {
        this.setState(() => {
          return {
            modalOpen: true
          }
        });

        jQuery(this.formRef.current).find("input[type=text], input[type=email], textarea").val("");
      });
    }

    closeModal() {
      this.setState(() => {
        return {
          modalOpen: false
        }
      });
    }

    render() {
      return (
        <div class="contact-page">
          <h1>Contact Us</h1>
          <h5>Leave a message and we will answer within 24 hours</h5>
          <div class="form-container">
            <Form ref={this.formRef}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" name="Name" placeholder="Your Name" />
                <Form.Control type="email" name="Email" placeholder="Email Address" />
                <Form.Control type="text" name="Phone" placeholder="Phone Number (optional)" />
                <Form.Control as="textarea" name="Message" rows={5} placeholder="Enter Message..."/>
                <input type="hidden" name="From" value="Contact Form"></input>
              </Form.Group>
              <Button variant="primary" onClick={() => this.submitForm()}>
                Submit
              </Button>
            </Form>
          </div>
          <Modal show={this.state.modalOpen} onHide={() => this.closeModal()} className="gallery-page-modal">
            <Modal.Header closeButton>
              <div>Thank You, Message Sucessfully Received</div>
            </Modal.Header>
          </Modal>
        </div>
      );
    }
  }
  
export default ContactPage;