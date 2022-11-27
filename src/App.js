import React, { useState } from 'react';
import axios from'axios';


function App() {
  const mailRef = useState();  
  const nameRef = useState();  
  const firstsurnameRef = useState();  
  const secondsurnameRef = useState();   
  const[varfiles, setFiles]=useState();

  const UploadFile=e=>{
    setFiles(e);
  }


  const submitform = async() => {

    //add data
    const f = new FormData();
    f.append("correo", mailRef.current.value);
    f.append("nombre", nameRef.current.value);
    f.append("primerapellido", firstsurnameRef.current.value);
    f.append("segundoapellido", secondsurnameRef.current.value);
    f.append("file", varfiles[0]);

    await axios.post("http://localhost:3001/api/v1/step", f, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(response=>{
      console.log(response.data);
    }).catch(error=>{
      console.log(error);
    });

  };

  return(
    <div style={{"padding":"15px"}}>
      {<img className="d-flex flex-row-reverse" src='https://ieomsociety.org/ieom/wp-content/uploads/2022/05/TEC-logo-300x79.png'/> }

      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
            <label className="form-label col d-flex flex-row">Correo</label>
            <input ref={mailRef} type="text" className="form-control col" id="txtmail"/>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
            <label className="form-label col d-flex flex-row">Nombre</label>
            <input ref={nameRef} type="text" className="form-control col" id="txtname"/>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12">
            <label className="form-label col d-flex flex-row">Primer Apellido</label>
            <input ref={firstsurnameRef} type="text" className="form-control col" id="txtfirstsurname"/>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
            <label className="form-label col d-flex flex-row">Segundo Apellido</label>
            <input ref={secondsurnameRef} type="text" className="form-control col" id="txtsecondsurname"/>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12" style={{"padding-top": "15px"}}>
            <input type="file" name="file" className="form-control col" onChange={(e)=>UploadFile(e.target.files)}/>
        </div>
    </div>

      
      <div className="row" style={{"padding-top": "20px"}}>
          <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary" onClick={submitform}>Guardar</button>
          </div>
      </div>

    </div>
  )
}

export default App;
