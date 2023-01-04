import React, { useState } from 'react';
import axios from'axios';
import { Container } from 'react-bootstrap';

const Page = () => {

    const addressref = useState();
    const mailRef = useState();
    const nameRef = useState();
    const profileRef = useState();
    const backgroundRef = useState();
    const nftRef = useState();
    
    const submitform = async() => {
        const f = new FormData();
        f.append("address", addressref.current.value);

        axios.defaults.headers['x-api-key'] = 'OvuLdc8Gb4xoSMAlfGOGnI3ZFGWJolcpNLothX2ASCdFahmJBTea7ieMMwJLFdXs';
        await axios.post("http://localhost:3001/api/v1/GetUniversalProfile", f, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(response=>
            {
                //console.log("https://2eff.lukso.dev/ipfs/" + response.data[1].value.LSP3Profile.profileImage[0].url);
                mailRef.current.value = response.data[1].value.LSP3Profile.description;
                nameRef.current.value = response.data[1].value.LSP3Profile.name;
                profileRef.current.src = "https://2eff.lukso.dev/ipfs/" + response.data[1].value.LSP3Profile.profileImage[0].url;
                backgroundRef.current.src = "https://2eff.lukso.dev/ipfs/" + response.data[1].value.LSP3Profile.backgroundImage[0].url;
                
                let resultnft = "";
                for(let i=0; i < response.data[3].value.length; i++){
                    resultnft = resultnft + response.data[3].value[i] + '\n';
                }
                
                console.log(resultnft);
                nftRef.current.value = resultnft;
                 
            }
        ).catch(error=>{
            console.log(error);
        });
    };
  
  return (
    <div style={{"padding":"25px"}}>
      <Container>
        <div className="row" style={{"margin-bottom":"25px"}}>
          <h3>Get Universal Profile</h3>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
              <label className="form-label col d-flex flex-row">Address</label>
              <input ref={addressref} type="text" className="form-control col" id="txtaddress"/>
          </div>
        </div>
        
        <div className="row" style={{"padding-top": "20px"}}>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-primary" onClick={submitform}>Obtener</button>
            </div>
        </div>

        <hr />

        {/* general data */}
        <div className="row" style={{"margin-top":"50px"}}>
            <h2>Datos Generales</h2>
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <label className="form-label col d-flex flex-row">Correo</label>
                <input ref={mailRef} type="text" className="form-control col" id="txtmail"/>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <label className="form-label col d-flex flex-row">Nombre</label>
                <input ref={nameRef} type="text" className="form-control col" id="txtname"/>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <label className="form-label col d-flex flex-row">Imagen de Perfil</label>
                <img ref={profileRef} id="txtprofileimage" alt="profile"/>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <label className="form-label col d-flex flex-row">Fondo de Perfil</label>
                <img ref={backgroundRef} id="txtbackgroundimage" alt="background"/>
            </div>
        </div>

        <div className="row" style={{"margin-top":"50px"}}>
            <h2>NFT</h2>
            <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12">
                <label className="form-label col d-flex flex-row">NFT</label>
                <textarea ref={nftRef} type="text" className="form-control col" id="txtnft" style={{"min-height":"100px"}}/>
            </div>
        </div>


      </Container>
    </div>
  );
}


export default Page;