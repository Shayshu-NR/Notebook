import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Row, Container } from 'react-bootstrap'
import AddPage from './Components/AddPage'
import Footer from './Components/Footer'

function App() {
  const [showAddNote, setShowAddNote] = useState(false)

  return (
    <Router>
      <body>
        <br />
        <h2>Notebook</h2>
        <div style={{ height: 22 * 10 }} class="verticalLines"></div>
        <ul class="listItemClass">
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
        <Footer onAdd={() => setShowAddNote(!showAddNote)} showAddNote={showAddNote} />
        {showAddNote && <AddPage />}

      </body>
    </Router>
  );
}

export default App;
