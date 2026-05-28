function About() {
  return (
    <section style={styles.about}>

      <h2 style={styles.heading}>
        About Me
      </h2>

      <p style={styles.text}>
        I am a React Frontend Developer passionate about
        building modern and responsive websites.
      </p>

    </section>
  )
}

const styles = {
  about: {
    padding: '100px 20px',
    backgroundColor: '#111',
    color: 'white',
    textAlign: 'center'
  },

  heading: {
    fontSize: '3rem'
  },

  text: {
    marginTop: '20px',
    fontSize: '1.2rem',
    maxWidth: '700px',
    marginInline: 'auto',
    lineHeight: '1.8'
  }
}

export default About