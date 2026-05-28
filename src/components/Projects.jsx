import { motion } from 'framer-motion'
function Projects() {

  const projects = [
    {
      title: 'Modern Portfolio',
      description: 'Responsive React portfolio website'
    },

    {
      title: 'Business Landing Page',
      description: 'Frontend website for startup business'
    },

    {
      title: 'Weather App',
      description: 'API based React weather application'
    }
  ]

  return (
  <section id="projects" style={styles.projectsSection}>

    <h2 style={styles.heading}>
      My Projects
    </h2>

    <div style={styles.projectContainer}>

      {projects.map((project, index) => (
        <motion.div
  key={index}
  style={styles.card}
  whileHover={{
    scale: 1.05,
    y: -10
  }}
>

          <h3 style={styles.title}>
            {project.title}
          </h3>

          <p style={styles.description}>
            {project.description}
          </p>

        </motion.div>
      ))}

    </div>

  </section>
)
}

const styles = {
  projectsSection: {
    padding: '100px 20px',
    backgroundColor: '#111',
    color: 'white',
    textAlign: 'center'
  },

  heading: {
    fontSize: '3rem',
    marginBottom: '50px'
  },

  projectContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px'
  },

  card: {
   backgroundColor: '#1a1a1a',
  padding: '30px',
  width: '300px',
  borderRadius: '20px',
  transition: '0.3s',
  cursor: 'pointer',
  border: '1px solid #2a2a2a'
  },

  title: {
    fontSize: '1.5rem'
  },

  description: {
    marginTop: '15px',
    lineHeight: '1.6'
  }
}

export default Projects