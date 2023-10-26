import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Steps from './components/Steps';
import { FormDataProvider } from './FormDataContext';

function App() {
  return (
    <div className="App">
      <FormDataProvider>
      <Steps/>
      </FormDataProvider>
    </div>
  );
}

export default App;
