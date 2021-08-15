import React, { useContext, useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FirebaseContext from "../context/firebase";

function TextArea({id, values}) {
    const {firebase} = useContext(FirebaseContext)
    const [value, setValue] = useState(values);
    const [state, setState] = useState(0)
  
    async function getDataByDocId(docId)
    {
        const result = await firebase.firestore().collection('docs').doc(docId).get()
        if(result.data()=== undefined)
        {
            setValue('')
        }else{

            setValue(result.data().name)
        }
       return result.data()
    }
    if(state === 0)
    {
        getDataByDocId(id)
        setState(2)
    }
   
    useEffect( () =>
    {
          const   updateData = async  () =>{

             await firebase.firestore().collection("docs").doc(id).set({
                 name:value
                })
            }
            
            if(value !=='')
            {

                updateData()
            }
        },[value])

  
      

    return (
        <div className="w-full h-full" >
        <ReactQuill theme="snow" value={value}   onChange={setValue}/>
        </div>
    )
}

export default TextArea
