import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from '../../components/NavBar/NavBar';
import './Contact.css'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
      <NavBar />
        <div className='contact'>
          <h2 className='proj-name'>CONTACT</h2>
          
          <section className='contact-section'>

            <form
            className='contact-form'
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xwkwrepe"
            method="POST"
            >
            
            <label className='contact-label'>EMAIL:</label>
            <input className='input' type="email" name="email" />
            <label className='contact-label'>MESSAGE:</label>
            <input className='input' type="text" name="message" />
            {status === "SUCCESS" ? <p>Thanks for reaching out!</p> : <button className='submit-button'>SUBMIT</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>

          </section>
        </div>
        <Footer />
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}