import React from "react";
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
        <div className='contact'>
          <h2 className='contact-title'>CONTACT</h2>
          <section className='contact-section'>
            <form
            className='contact-form'
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mrgoyakp"
            method="POST"
            >
            <label className='contact-label'>EMAIL:</label>
            <input className='input' type="email" name="email" />
              <label className='contact-label'>MESSAGE:</label>
              <textarea className="input-message" placeholder="Send me a message!" cols="30" rows="5" type="text" name="message"/>
              {status === "SUCCESS" ? <p>Submitted!</p> : <button className='big-button contact-me'>SUBMIT</button>}
              {status === "ERROR" && <p>Error Submitting! Contact me at connormckenna2654@gmail.com</p>}
              </form>
          </section>
        </div>
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