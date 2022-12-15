import './App.css';
import Form from './components/Form';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className='bg-slate-800 py-8 mb-10 text-white text-4xl rounded'>Expense Tracker</h1>
        {/* Grid Colunms */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Graph */}
          <Graph></Graph>
          {/* Transaction */}
          <Form></Form>


        </div>
      </div>
    </div>
  );
}

export default App;
