import React, { useContext, useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import TextArea from "./componment/Textarea";
import FirebaseContext from "./context/firebase";

function TextEditor() {
    const {id} = useParams()
    const {firebase} = useContext(FirebaseContext)
    const [value, setValue] = useState('');
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
      
    }
    useState(() => {

        if(state === 0)
        {
            const getFirstData = async () =>
            {
                await getDataByDocId(id)
            }
            getFirstData()
            setState(2)
        }
        
    })

  

    return (
      

        <TextArea id={id}  values={value}/>
       
    )
}

export default TextEditor
