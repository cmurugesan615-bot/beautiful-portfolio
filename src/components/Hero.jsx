import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <section id="home" style={styles.hero}>

      <div style={styles.blur1}></div>
      <div style={styles.blur2}></div>

      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>
      <div style={styles.circle3}></div>
      <div style={styles.circle4}></div>
       <div style={styles.circle5}></div>
      <div style={styles.circle6}></div>

      <TypeAnimation
        sequence={[
          'I Build Modern Websites',
          2000,
          'React Frontend Developer',
          2000,
          'Freelancer & UI Designer',
          2000
        ]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}
        style={styles.title}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={styles.text}
      >
        React Frontend Developer
      </motion.p>

      <a
  href="https://wa.me/919962749217?text=Hi%20Moni,%20I%20saw%20your%20portfolio"
  target="_blank"
  rel="noreferrer"
  style={styles.linkButton}
>
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={styles.button}
  >
    WhatsApp Me
  </motion.button>
</a>

    </section>
  )
}

const styles = {
  hero: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },

  linkButton: {
  textDecoration: 'none',
  zIndex: 1
},

  title: {
    fontSize: '4rem',
    zIndex: 1
  },

  text: {
    marginTop: '20px',
    fontSize: '1.5rem',
    zIndex: 1
  },

  button: {
    marginTop: '30px',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#00bcd4',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    zIndex: 1
  },

  blur1: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    backgroundColor: '#006dd4',
    filter: 'blur(120px)',
    top: '100px',
    left: '100px',
    opacity: 0.3
  },

  blur2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    backgroundColor: '#2f78f7',
    filter: 'blur(120px)',
    bottom: '50px',
    right: '100px',
    opacity: 0.3
  },

  circle1: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#00bcd4',
    top: '20%',
    left: '30%',
    animation: 'float 4s infinite ease-in-out'
  },

  circle2: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#7b2ff7',
    bottom: '20%',
    right: '30%',
    animation: 'float 6s infinite ease-in-out'
  },
  circle3: {
  position: 'absolute',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#d40000',
  top: '10%',
  left: '40%',
  animation: 'float 4s infinite ease-in-out'
},

circle4: {
  position: 'absolute',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#f7f42f',
  bottom: '10%',
  right: '40%',
  animation: 'float 6s infinite ease-in-out'
},
   circle5: {
  position: 'absolute',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#d40000',
  top: '10%',
  left: '60%',
  animation: 'float 4s infinite ease-in-out'
},

circle6: {
  position: 'absolute',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#f7f42f',
  bottom: '10%',
  right: '60%',
  animation: 'float 6s infinite ease-in-out'
},
}


export default Hero