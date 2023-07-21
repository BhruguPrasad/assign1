import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [feeling, setFeeling] = useState("");
  const [work, setWork] = useState("");
  const [issue, setIssue] = useState("");
  let [hello, setHello] = useState();
  console.log(hello)

  const handleSubmit = () => {
    let data = { feel: `${feeling}`, work: `${work}`, issue: `${issue}` };
    setHello(data)
    console.log(data)
  };
  return (
    <div className="App">
      <h1>Your Problem</h1>
      <div className="mainform">
        <h2>How is your feeling right now?</h2>
        <input
          type="text"
          placeholder="Feeling"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        />
        <h2>What do you do?</h2>
        <input
          type="text"
          placeholder="Work"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <h2>What is the issue you facing today?</h2>
        <input
          type="text"
          placeholder="Issues"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h1>Solution</h1>
      {
        (hello) ? <h2>You are feeling {hello.feel} right now. Your mood is {hello.work}.The issue faces are {hello.issue}. You have to do 1 minute meditation for this.</h2> : <h2></h2>
      }
    </div>
  );
}

export default App;
