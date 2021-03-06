import React, { Component } from 'react';
import "./Contact.css";

// Allow less secure apps: ON in gmail settings to be able to send email
class Contact extends Component {
    state = {
        email: {
            recipient: 'saronnhong@gmail.com',
            sender: 'chich20x6@gmail.com',
            from: '',
            subject: '',
            text: '',
            confirmMsg: ''
        }
    }
    sendEmail = () => {
        fetch("/send-email", {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                if (res) {
                    const { email } = this.state;
                    this.setState({ email: { ...email, confirmMsg: "Email sent.", from: "", subject: "", text: "" } })
                } else {
                    alert("email was not sent!");
                }
            })
    }

    render() {
        const { email } = this.state;
        const spacer = {
            margin: 10
        }
        const textArea = {
            borderRadius: 4
        }
        return (
            <div className="contactForm" >
                <div className="containerForm">
                    <div className="wrapper animated fadeInLeft">
                        <div className="company-info">
                            <h3>Contact</h3>
                            <ul className="ulForm">
                                <li><i className="fa fa-phone"></i> (###) ###-####</li>
                                <li><i className="fa fa-envelope"></i> whatever@gmail.com</li>
                                
                            </ul>
                        </div>
                        <div className="contact">
                            <h3>Email</h3>
                            <p id="confirmMessage">{email.confirmMsg}</p>
                            <form>
                                <p>
                                    <input placeholder="Name" value={email.subject}
                                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                </p>
                                <p>
                                    <input placeholder="Email Address" value={email.from}
                                        onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
                                </p>
                                <div class="input-group full">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Message</span>
                                    </div>
                                    <textarea class="form-control" rows="10" aria-label="With textarea" value={email.text}
                                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })}></textarea>
                                </div>
                                <button className="btn btn-primary" type="button" onClick={() => {
                                    this.sendEmail();
                                }}> Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
