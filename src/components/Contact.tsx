import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { TextInput, Textarea, Button, Group } from '@mantine/core';


function Contact() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isSending, setIsSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        setNameError(name.trim() === '');
        setEmailError(email.trim() === '');
        setMessageError(message.trim() === '');

        if (name.trim() && email.trim() && message.trim()) {
            setIsSending(true);
            setSubmitStatus('idle');

            const templateParams = {
                name: name.trim(),
                email: email.trim(),
                message: message.trim(),
            };

            console.log(templateParams);
            emailjs
                .send('service_2etaw5u', 'template_ateu9kg', templateParams, 'Ykql9SeaQ_eoe-Qrx')
                .then(
                    () => {
                        setSubmitStatus('success');
                        setName('');
                        setEmail('');
                        setMessage('');
                    },
                    (error) => {
                        console.error('Email send failed:', error);
                        setSubmitStatus('error');
                    }
                )
                .finally(() => {
                    setIsSending(false);
                });
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

                        {submitStatus === 'success' && (
                            <div className="success-message" style={{ color: 'green', marginTop: '1rem' }}>
                                Message sent successfully! 🎉
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="error-message" style={{ color: 'red', marginTop: '1rem' }}>
                                Failed to send message. Please try again or email me directly.
                            </div>
                        )}

                        <Button
                            type="submit"
                            rightSection={<span>➤</span>}
                            mt="md"
                            className="submit-btn"
                            loading={isSending}
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;