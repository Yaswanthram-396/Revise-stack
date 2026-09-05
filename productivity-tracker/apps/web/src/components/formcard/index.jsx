import React, { useState } from 'react';
import FormElement from '../form';

function TaskManager() {
  const [data,setData]=useState([]);

  const handleadd=(newdata)=>{

 const lastid =
    data.length > 0
      ? Math.max(...data.map((val) => Number(val.id)))
      : -1;
      const updated = [...data, { ...newdata, id: lastid + 1 }];
    setData(updated);
  }
  const handleDelete=(id)=>{
    console.log(id)
      setData(data.filter((val)=>val.id!==id))
  }

  return (
    <div className="App app-shell">
      <div className="app-header">
        <div>
          <p className="eyebrow">My Items</p>
          <h1>Dashboard</h1>
        </div>
      </div>

      <div style={{ background: "white", padding: "24px", borderRadius: "16px", marginBottom: "32px" }}>
        <FormElement onsbmit={handleadd}/>
      </div>

      <div className="card-grid">
      {
        data.length>0? data.map((val)=>(
          <div key={val.id} style={{ background: "white", padding: "20px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h1 style={{ margin: 0, fontSize: "1.25rem", color: "#1e293b" }}>{val.title || 'Untitled'}</h1>
            <p style={{ margin: 0, color: "#64748b", flexGrow: 1 }}>{val.description || 'No description provided.'}</p>
            <button onClick={()=>handleDelete(val.id)} style={{ alignSelf: "flex-start", background: "#ef4444", color: "white", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>Delete</button>
          </div>
        )) : <div className="empty-state">No data found</div>
      }
      </div>
    </div>
  );
}

export default TaskManager;