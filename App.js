import CMS from './CMS';
import Footer from './Footer';
import Top_Section from './Top_Section';
import './App.css';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FileComplaint from './FileComplaint';
import Mess from './Mess';

function App() {
  return (
    <>
      <BrowserRouter>
        <Top_Section />
        <CMS />
        <Dashboard />
        <Footer />

        <Switch>
          <Route exact path="/fileComplaint" element={<FileComplaint/>} /> 
          <Route exact path="/mess" element={<Mess/>} /> 
        </Switch>
      </BrowserRouter>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  );
}

export default App;
