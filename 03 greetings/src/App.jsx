import React, { useState, useEffect } from 'react';

function App() {
  // Set up state to hold the current time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Function to update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once after component mounts

  // Format time for display (hours:minutes:seconds)
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div style={styles.container}>
      <div style={styles.clock}>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  clock: {
    fontSize: '3rem',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
  }
};

export default App;
