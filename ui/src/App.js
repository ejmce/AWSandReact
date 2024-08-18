import './App.css';
import resumeA from './ResumeA.jpg';
import resumeB from './ResumeB.jpg';

function App() {
  return (
    <div>
      <div className="App">
        <h1>
          Quick React Website
        </h1>
        <div>
          <p>Hello Principal, I am Elmer McElmeel.</p>
          <p>This is a website made with React.js hosted by AWS</p>
          <p>I decided to throw this together on 08/17/2024, to help show some additional React and AWS knowledge</p>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1-l_Vs4OI5tIwRETorZtrJS75Cl_VGnJ4/view?usp=sharing" class="App-link">Resume On Google Docs</a>
        </div>
          <img src={resumeA} alt="ResumeA" width="800" height="900" />
          <div>
            <img src={resumeB} alt="ResumeB" width="800" height="900" />
          </div>     
      </div>
    </div>
  );
}

export default App;
