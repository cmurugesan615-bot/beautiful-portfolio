function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>MoniDev</h1>

      <ul style={styles.navLinks}>

  <li>
    <a href="#home" style={styles.link}>
      Home
    </a>
  </li>

  <li>
    <a href="#projects" style={styles.link}>
      Projects
    </a>
  </li>

  <li>
    <a href="#contact" style={styles.link}>
      Contact
    </a>
  </li>

</ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: '#111',
    color: 'white'
  },

  logo: {
    fontSize: '2rem'
  },

  navLinks: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    cursor: 'pointer'
  },

  link: {
    textDecoration: 'none',
    color: 'white'
  }
}

export default Navbar