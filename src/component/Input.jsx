    import React, { useState } from 'react';
import Counter from './Counter';

    const Input= () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [submitted, setSubmitted] = useState(false);
      const [token, setToken] = useState(null);
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password })
            });
      
            const data = await response.json();
      
            if (response.ok) {
              const jwt = data.token;
              localStorage.setItem('token', jwt); // Store token
              setToken(jwt);
              setSubmitted(true);
            } else {
              alert('Login failed: ' + data.message);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
     
    
    
    return (
        
<div >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
           
          />
        </div>
        <div >
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Counter email={email} token={token} />
    </div>
    );
}
export default Input;
