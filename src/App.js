import { useState } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [rnd, setRnd] = useState();
  const [role, setRole] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [amount, setAmount] = useState("");


  return (
    <>
      <div className="w-screen border border-black" >
        <form className="flex p-2" >
          <div className="border border-black mx-2">
            <input type="text" name="player" onChange={(e) => { setPlayer1(e.target.value) }} placeholder="Enter your player1 name" />
            <input type="text" value={player1} readOnly={true} />
          </div>

          <div className="border border-black mx-2">
            <input type="text" name="player" onChange={(e) => { setPlayer2(e.target.value) }} placeholder="Enter your player2 name" />
            <input type="text" value={player2} readOnly={true} />

          </div>

          <div className="border border-black mx-2">
            <input type="text" name="player" onChange={(e) => { setPlayer3(e.target.value) }} placeholder="Enter your player3 name" />
            <input type="text" value={player3} readOnly={true} />
          </div>

          <div className="border border-black mx-2">
            <input type="text" name="player" onChange={(e) => { setPlayer4(e.target.value) }} placeholder="Enter your player4 name" />
            <input type="text" value={player4} readOnly={true} />
          </div>
        </form>
        
      <div className="flex" >
        <div className="border border-black  w-full h-24 flex items-center justify-center" >
          <div className="border border-black w-16 h-20 text-center ">Role 1</div>
        </div>
        <div className="border border-black  w-full h-24 flex items-center justify-center" >
          <div className="border border-black w-16 h-20 text-center ">Role 1</div>
        </div>
        <div className="border border-black  w-full h-24 flex items-center justify-center" >
          <div className="border border-black w-16 h-20 text-center ">Role 1</div>
        </div>
        <div className="border border-black  w-full h-24 flex items-center justify-center" >
          <div className="border border-black w-16 h-20 text-center ">Role 1</div>
        </div>

      </div>
      </div>


      <button className="p-2 rounded-md bg-indigo-600">Distribute</button>
    </>
  );


}

export default App;
