import { useState } from "react";
import Count from "./components/Count";
import Plus from "./components/plus";
import Restart from "./components/restart";
import Minus from "./components/minus";
function App() {
  const [display,setDisplay] = useState(0)
  const [check,setCheck] = useState(false)
  return (
    <>
    <div className="w-85 h-70 border m-auto mt-30 text-center">
      <Count display = {display} check = {check}/>
      <div className="relative top-40 ">
      <Plus plus = {() => setDisplay((el) => el + 1)} setCheck = {setCheck}/>
      <Restart restart = {() => setDisplay(0)}/>
      <Minus minus = {()=>setDisplay((el) => el-1)} setCheck = {setCheck}/>
        </div>
    </div>
    </>
  );
}

export default App;
