import React, { useState } from 'react';
import axios from'axios';
import { Container } from 'react-bootstrap';

const Page = () => {
  const addressref = useState();
  const mailRef = useState();  
  const nameRef = useState();  
  const firstsurnameRef = useState();  
  const secondsurnameRef = useState();   
  const[profileimage, setPIFile]=useState();
  const[backgroundimage, setBIFile]=useState();
  
  
  const UploadProfileImage=e=>{
    setPIFile(e);
  }
  
  const UploadBackgroudImage=e=>{
    setBIFile(e);
  }
  
  const submitform = async() => {
  
    //add data
    const f = new FormData();
    f.append("address", addressref.current.value);
    f.append("correo", mailRef.current.value);
    f.append("nombre", nameRef.current.value);
    f.append("primerapellido", firstsurnameRef.current.value);
    f.append("segundoapellido", secondsurnameRef.current.value);
    f.append("profileimage", profileimage[0]);
    f.append("backgroundimage", backgroundimage[0]);
  
  
    axios.defaults.headers[ process.env.React_App_ApiKeyName ] = process.env.React_App_ApiKeyValue;
    await axios.post(process.env.React_App_Endpoint + "/api/v1/UpdateUniversalProfile", f, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(response=>{
        alert("Datos actualizados correctamente");
        console.log(response.data);
    }).catch(error=>{
        alert("Servicio no disponible, por favor intente más tarde");
        console.log(error);
    });
  
  };
  
  return(
    <div style={{"padding":"25px"}}>
      <Container>
        <div className="row" style={{"margin-bottom":"25px"}}>
          <h3>Actualizar Universal Profile</h3>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12">
              <label className="form-label col d-flex flex-row">Address</label>
              <input ref={addressref} type="text" className="form-control col" id="txtaddress"/>
          </div>
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
              <label className="form-label col d-flex flex-row">Profile Image</label>
              <input type="file" name="profileimage" className="form-control col" onChange={(e)=>UploadProfileImage(e.target.files)}/>
          </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12" style={{"padding-top": "15px"}}>
              <label className="form-label col d-flex flex-row">Background Image</label>
              <input type="file" name="backgroundimage" className="form-control col" onChange={(e)=>UploadBackgroudImage(e.target.files)}/>
          </div>
        </div>

        <div className="row" style={{"padding-top": "20px"}}>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-primary" onClick={submitform}>Guardar</button>
            </div>
        </div>



      </Container>
    </div>
  );
}


export default Page;