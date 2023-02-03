import db from "../firebaseConfig/fireBaseConfiguration";
import { useEffect, useState } from "react";

 const DisplayData =()=>{
    const [data,setData]= useState([])

    useEffect(() => {
        Fetchdata();
    }, []); 
    
    const Fetchdata = ()=>{
        db.collection("skills").get().then((querySnapshot) => {
            console.log(querySnapshot)
            querySnapshot.forEach(element => {
                var data = element.data();
                setData(arr => [...arr , data]);
            });
        })
    }
    console.log(data);
    
}

export default DisplayData

