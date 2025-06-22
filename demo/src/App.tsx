import { Navbar } from 'qt-ui';
  import 'qt-ui/dist/style.css';

  function App() {
    return (
      <div className="p-4">
        <Navbar logoText="qt-ui Demo" onClick={() => alert('Menu clicked!')} logoClassName="text-green-500 text-white" />
      </div>
    );
  }

  export default App;