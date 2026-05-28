import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_t50vcvb',
      'template_1exkayd',
      form.current,
      'JgXH5YTor8OfPqf-O'
    )
    .then(() => {
      alert('Message Sent Successfully!')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <section id="contact" style={styles.contactSection}>

      <h2 style={styles.heading}>
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={styles.form}
      >

        <input
          type='text'
          name='from_name'
          placeholder='Your Name'
          style={styles.input}
        />

        <input
          type='email'
          name='from_email'
          placeholder='Your Email'
          style={styles.input}
        />

        <textarea
          name='message'
          placeholder='Your Message'
          style={styles.textarea}
        ></textarea>

        <button
          type='submit'
          style={styles.button}
        >
          Send Message
        </button>

      </form>

    </section>
  )
}

const styles = {
  contactSection: {
    padding: '100px 20px',
    backgroundColor: '#0f0f0f',
    color: 'white',
    textAlign: 'center'
  },

  heading: {
    fontSize: '3rem',
    marginBottom: '40px'
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '600px',
    margin: 'auto'
  },

  input: {
    padding: '15px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#1a1a1a',
    color: 'white'
  },

  textarea: {
    padding: '15px',
    height: '150px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#1a1a1a',
    color: 'white'
  },

  button: {
    padding: '15px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#00bcd4',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem'
  }
}

export default Contact