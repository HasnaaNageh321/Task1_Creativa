import logo from "./logo.svg";
import "./App.css";
import ClassCopmponent from "./Components/ClassComponent/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent/FunctionComponent";
import FunctionalProps from "./Components/FunctionalProps/FunctionalProps";
import ClassComponentProps from './Components/ClassProps/ClassComponentProps'
import TwoStateWithComponent from "./Components/TwoStateWithComponent/TwoStateWithComponenr";
function App() {
  return (
    <div className="App">
      {/* <ClassCopmponent/>
      <FunctionComponent/> 
      <FunctionalProps Name="Jane Doe" Age={28} University="Harvard University" Specialization="Computer Science">
        <button>Contact</button>
      </FunctionalProps>
      <ClassComponentProps CourceOne="React" CourceTwo="JavaScript">
      <button>Contact</button>
      </ClassComponentProps>*/}
      <TwoStateWithComponent/>
    </div>
  );
}

export default App;
