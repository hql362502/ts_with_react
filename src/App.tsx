import React, {useState, } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import LikeButtom  from './components/LikeButtom';
import MouseTracker from './components/MouseTracker';
import useUrlLoader from './hooks/useUrlLoader';
import './App.css';
interface Ishow{
  message: string;
  status: string;
}
interface IThemeProps {
  [key : string] : {color: string, background: string}
}
const themes : IThemeProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)
function App() {
  const [show, setShow] = useState(true);
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random', [show]);
  const data_result = data as Ishow;
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? <p>🐕正在加载中</p>: <img src={data_result && data_result.message}></img>}
        <Hello message="Hello World"/>
        <button onClick={()=>{setShow(!show)}}>Tracker taggle</button>
        {/* { show && <MouseTracker/>} */}
        <LikeButtom/>
        
      </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
