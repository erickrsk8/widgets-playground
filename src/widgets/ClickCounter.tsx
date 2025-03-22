import { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div style={styles.container}>
      <div style={styles.counter}>{count}</div>
      <button onClick={handleClick} style={styles.button}>
        Click Me
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Roboto, sans-serif',
  },
  counter: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#7b2cbf',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
} as const

export default ClickCounter
