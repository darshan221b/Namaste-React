import { useState, useEffect } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("USEEFFECT");
    // const timer = setInterval(() => {
    //   console.log("Hello world");
    // }, 1000);

    return () => {
        // clearInterval(timer);
        console.log("UseEffect return");   // unmounting phase
    }
  }, []);

  // useEffect(() => {
  //     console.log("Count 1");
  // }, [count]);

  // useEffect(() => {
  //     console.log("Count 2");
  // }, [count2]);

  return (
    <div>
      <h2>Profile Page from function</h2>
      <h3> Count : {count}</h3>
      <button onClick={() => setCount(1)}> counters </button>
      <button onClick={() => setCount2(1)}> counters2 </button>
    </div>
  );
};

export default Profile;
