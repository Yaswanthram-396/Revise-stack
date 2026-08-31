import React, { useState } from 'react';
import './App.css';
import FormElement from './components/form';
import TaskManager from './components/formcard/index.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dogs from './components/dogs/dogs';
import Recipes from './components/Recipes/recipes';
import Recipe from './components/recipe/recipe';
import Books from './components/books/books';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<TaskManager/>}/>
        <Route path='/dogs' element={<Dogs/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/:id' element={<Recipe/>}/>
        <Route path='/books' element={<Books/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;



// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Testcard from "./components/testCard";

// const App = () => {
//   const [data1, setdata] = useState([]);
//   const [pagenate, setPagenate] = useState([]);
//   const [pages, setpages] = useState(0);
//   const [currpage, setcurr] = useState(1);

//   const getdata = async () => {
//     try {
//       const fetchdata = await fetch(
//         "https://jsonplaceholder.typicode.com/posts",
//       );
//       const data = await fetchdata.json();
//       setdata(data);
//       setpages(data.length / 10);
//       const newdata = data.length === 0 ? [] : data.slice(0, 10);
//       setPagenate(newdata);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   const handleNext = () => {
//     if (currpage >= pages) return;

//     const nextPage = currpage + 1;

//     setcurr(nextPage);

//     const data = data1.slice((nextPage - 1) * 10, nextPage * 10);

//     setPagenate(data);
//   };

//   const handlePrev = () => {
//     if (currpage <= 1) return;

//     const prevPage = currpage - 1;

//     setcurr(prevPage);

//     const data = data1.slice((prevPage - 1) * 10, prevPage * 10);

//     setPagenate(data);
//   };

//   const dataDelete = (id) => {
//     console.log("id", id);
//     const newdata = pagenate.filter((val) => val.id !== id);

//     setPagenate(newdata);
//   };

//   return (
//     <div className="app-shell">
//       <header className="app-header">
//         <div>
//           <p className="eyebrow">Content dashboard</p>
//           <h1>Story board</h1>
//         </div>

//         <div className="pagination">
//           <button onClick={handlePrev} disabled={currpage <= 1}>
//             Prev
//           </button>
//           <span>
//             {currpage} of {pages}
//           </span>
//           <button onClick={handleNext} disabled={currpage >= pages}>
//             Next
//           </button>
//         </div>
//       </header>

//       <main className="card-grid">
//         {pagenate.map((val) => (
//           <Testcard key={val.id} data={val} dataDelet={dataDelete} />
//         ))}
//       </main>
//     </div>
//   );
// };

// export default App;
