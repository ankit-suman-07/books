import './App.css';

import Navbar from './components/navbar/Navbar';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';

import { BookProvider } from './context/booksContext';
import ThemedComponent from './ThemedComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Table />
      <Footer />
      <ThemedComponent />
    </div>
  );
}

export default App;
