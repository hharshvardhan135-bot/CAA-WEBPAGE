import Header from './components/Header';
import Body from './components/Hero-section/Body'
import Impact from './components/Stats'
import Alignments from './components/Alignments'
import Model from './components/Model'
import Ritual from './components/Ritual'
import Blog from './components/Blogs'
import Form from './components/Form'
import Faq from './components/FAQ'
import './features/App.scss'
import Partner from './components/Partner';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'
function App() {
  return (
    <>

      <Header />
      <Body />

      <Impact />
      <Alignments />
      <Model />
      <Ritual />
      <Blog />
      <Form />
      <Faq />
      <Partner />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
