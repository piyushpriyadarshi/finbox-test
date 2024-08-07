// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import FileTree from './FileTree.jsx'
import data from './data.js';

function App() {
  console.log(data);

  return (
    <>
      <FileTree rootNode={data.root} />
    </>
  )
}

export default App
