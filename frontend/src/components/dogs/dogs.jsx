
import React,{useState,useEffect} from 'react'

function Dogs(){
    const [dogs,setDogs]=useState([]);
    const [load,setLoad]=useState(false);

    useEffect(()=>{
        
        getDogs();
    },[])

    const getDogs=async()=>{
        setLoad(true);
        try{
            const data=await fetch('https://dog.ceo/api/breed/hound/images');
            const response=await data.json();
            setDogs(response.message);
        }
        catch(e){
            
            alert("Pleaase Try Again Later")
        }
        finally{

            setLoad(false);
        }
    }

    const showdata=(val)=>{
        return(
            val.map((dog)=>(
            <>
                <div>
                    <img src={dog}/>
                </div>
            </>
        ))
        )
    }
    
    return(
        <>
        {
            load?
            (<>Loading...</>):
            dogs.length>0?
            showdata(dogs)
            :<>No Data</>
        }
        </>
    )
}

export default Dogs;