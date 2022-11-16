import React, { Component } from 'react';

class UserInfo extends Component{
    mailRef = React.createRef();
    nameRef = React.createRef();
    firstsurnameRef = React.createRef();
    secondsurnameRef = React.createRef();

    handleData = (e) => {
        e.preventDefault();

        //Send the info to main
        this.props.Info(this.mailRef.current.value, this.nameRef.current.value, this.firstsurnameRef.current.value, this.secondsurnameRef.current.value);
    }

    render() {
        return (
            <div style={{"padding":"15px"}}>
                <img className="d-flex flex-row-reverse" src='https://ieomsociety.org/ieom/wp-content/uploads/2022/05/TEC-logo-300x79.png'/>

                <form onSubmit={this.handleData} style={{"padding-top": "50px"}}>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                            <label className="form-label col d-flex flex-row">Correo</label>
                            <input ref={this.mailRef} type="text" className="form-control col" id="txtmail"/>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                            <label className="form-label col d-flex flex-row">Nombre</label>
                            <input ref={this.nameRef} type="text" className="form-control col" id="txtname"/>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                            <label className="form-label col d-flex flex-row">Primer Apellido</label>
                            <input ref={this.firstsurnameRef} type="text" className="form-control col" id="txtfirstsurname"/>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                            <label className="form-label col d-flex flex-row">Segundo Apellido</label>
                            <input ref={this.secondsurnameRef} type="text" className="form-control col" id="txtsecondsurname"/>
                        </div>
                    </div>

                    <div className="row" style={{"padding-top": "20px"}}>
                        <div className="d-flex flex-row-reverse">
                            <input type="submit" className="btn btn-primary" value="Guardar" />
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default UserInfo;