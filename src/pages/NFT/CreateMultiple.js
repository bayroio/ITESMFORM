import React, { useState } from 'react';
import axios from'axios';
import { Container } from 'react-bootstrap';

const Page = () => {

    const addressref = useState();
    const addressnftref = useState();
    const[NFTFile, setNFile]=useState();
  
    const UploadNFTFile=e=>{
        setNFile(e);
        console.log(e);
    }
  
  const submitform = async() => {
  
    //add data
    const f = new FormData();
    f.append("address", addressref.current.value);
    for(let i=0; i<NFTFile.length; i++){
        f.append("arrayfilenft", NFTFile[i]);
    }

  
    axios.defaults.headers[ process.env.React_App_ApiKeyName ] = process.env.React_App_ApiKeyValue;
    await axios.post(process.env.React_App_Endpoint + "/api/v1/CreateMultipleNFT", f, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(response=>{
        addressnftref.current.value = response.data;
        alert("NFT creado correctamente");
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
          <h3>Crear NFT</h3>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
              <label className="form-label col d-flex flex-row">Address</label>
              <input ref={addressref} type="text" className="form-control col" id="txtaddress"/>
          </div>        
          <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12" style={{"padding-top": "15px"}}>
              <label className="form-label col d-flex flex-row">Archivos</label>
              <input type="file" name="profileimage" className="form-control col" multiple onChange={(e)=>UploadNFTFile(e.target.files)}/>
          </div>
        </div>
        <div className="row" style={{"padding-top": "20px"}}>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-primary" onClick={submitform}>Guardar</button>
            </div>
        </div>

        <hr />

        {/* general data */}
        <div className="row" style={{"margin-top":"50px"}}>
            <h2>NFT</h2>
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <label className="form-label col d-flex flex-row">Address</label>
                <input ref={addressnftref} type="text" className="form-control col" id="txtaddress"/>
            </div>
        </div>

      </Container>
    </div>
  );
}


export default Page;
