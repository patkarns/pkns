import resume from './Resume_Pat_K.pdf';

import './App.css';

function App() {
  return (
    <div>
      Hi! :)
      <a href={resume} download="Resume_Pat_Karns.pdf">Resume</a>
      < a href="mailto:karns.napat@gmail.com">karns.napat@gmail.com</a>

    </div>
  );
}

export default App;
