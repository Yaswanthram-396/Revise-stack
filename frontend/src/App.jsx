// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Testcard from "./components/testCard";

const App = () => {
  const [data1, setdata] = useState([]);
  const [pagenate, setPagenate] = useState([]);
  const [pages, setpages] = useState(0);
  const [currpage, setcurr] = useState(1);

  const getdata = async () => {
    try {
      const fetchdata = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await fetchdata.json();
      setdata(data);
      setpages(data.length / 10);
      const newdata = data.length === 0 ? [] : data.slice(0, 10);
      setPagenate(newdata);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleNext = () => {
    if (currpage >= pages) return;

    const nextPage = currpage + 1;

    setcurr(nextPage);

    const data = data1.slice((nextPage - 1) * 10, nextPage * 10);

    setPagenate(data);
  };

  const handlePrev = () => {
    if (currpage <= 1) return;

    const prevPage = currpage - 1;

    setcurr(prevPage);

    const data = data1.slice((prevPage - 1) * 10, prevPage * 10);

    setPagenate(data);
  };

  const dataDelete = (id) => {
    console.log("id", id);
    const newdata = pagenate.filter((val) => val.id !== id);

    setPagenate(newdata);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Content dashboard</p>
          <h1>Story board</h1>
        </div>

        <div className="pagination">
          <button onClick={handlePrev} disabled={currpage <= 1}>
            Prev
          </button>
          <span>
            {currpage} of {pages}
          </span>
          <button onClick={handleNext} disabled={currpage >= pages}>
            Next
          </button>
        </div>
      </header>

      <main className="card-grid">
        {pagenate.map((val) => (
          <Testcard key={val.id} data={val} dataDelet={dataDelete} />
        ))}
      </main>
    </div>
  );
};

export default App;
