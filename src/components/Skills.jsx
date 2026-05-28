function Skills() {

  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Responsive Design',
    'Frontend Development'
  ]

  return (
    <section style={styles.skillsSection}>

      <h2 style={styles.heading}>
        My Skills
      </h2>

      <div style={styles.cardContainer}>

        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

const styles = {
  skillsSection: {
    padding: '100px 20px',
    backgroundColor: '#0f0f0f',
    color: 'white',
    textAlign: 'center'
  },

  heading: {
    fontSize: '3rem',
    marginBottom: '50px'
  },

  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  },

  card: {
    backgroundColor: '#1a1a1a',
    padding: '20px 40px',
    borderRadius: '15px',
    fontSize: '1.2rem',
    transition: '0.3s'
  }
}

export default Skills