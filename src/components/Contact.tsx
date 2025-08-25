import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { TextInput, Textarea, Button, Group } from '@mantine/core';


function Contact() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        setNameError(name.trim() === '');
        setEmailError(email.trim() === '');
        setMessageError(message.trim() === '');

        if (name !== '' && email !== '' && message !== '') {
            const templateParams = {
                name,
                email,
                message,
            };

            console.log(templateParams);
            emailjs
                .send('service_id', 'template_id', templateParams, 'api_key')
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    }
                );
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>
                    <p>Reach out for any collaboration, business, or employment inquiries!</p>

                    <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <Group grow className="form-flex">
                            <TextInput
                                required
                                label="Your Name"
                                placeholder="What's your name?"
                                value={name}
                                onChange={(e) => setName(e.currentTarget.value)}
                                error={nameError && 'Please enter your name'}
                            />
                            <TextInput
                                required
                                label="Email / Phone"
                                placeholder="How can I reach you?"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                error={emailError && 'Please enter your email or phone number'}
                            />
                        </Group>

                        <Textarea
                            required
                            label="Message"
                            placeholder="Send me any inquiries or questions"
                            minRows={8}
                            value={message}
                            onChange={(e) => setMessage(e.currentTarget.value)}
                            error={messageError && 'Please enter the message'}
                            className="body-form"
                        />

                        <Button
                            type="submit"
                            rightSection={<span>➤</span>}
                            mt="md"
                            className="submit-btn"
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;