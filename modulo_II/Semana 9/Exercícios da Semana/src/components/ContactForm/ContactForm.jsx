import { useEffect, useState } from "react";

function FormComponent() {

  const [enableButton, setEnableButton] = useState(false)
  const [contactData, setContactData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInput = (e) => {
    setContactData({...contactData,[e.target.id]: e.target.value})
  };

  useEffect(() => {
    let validate = true;
    const data = Object.entries(contactData)

    for(const [key] of data){
      if(!contactData[key].length) {
        validate = false;
      }
    }

    if(!contactData.email.includes('@')) {
      validate = false;
    }

    if(!contactData.email.includes('.com')) {
      validate = false;
    }

    setEnableButton(validate);

  }, [contactData])





  return (
    <div className="container">
      <div className="row">
      <h1>Deixe o seu recado!</h1>
        <div className="col-lg-6">
          <label htmlFor="name"></label>
          <input type="text" placeholder="Digite seu nome..." className="w-100" id="name" onChange={handleInput}/>
        </div>
        <div className="col-lg-6">
          <label htmlFor="telefone"></label>
          <input type="number" placeholder="Digite seu telefone..." className="w-100" id="phoneNumber" onChange={handleInput}/>
        </div>
        <div className="col-lg-12 ">
      <label htmlFor="email"></label>
      <input type="email" placeholder="Digite seu email..." className="w-100" id="email" onChange={handleInput}/>
      </div>
      <div className="col-lg-12">
      <label htmlFor="message"></label>
      <textarea placeholder="Digite a sua mensagem" className="w-100" id="message" onChange={handleInput}></textarea>
      </div >
      <div className="col-lg-12 d-flex justify-content-end">
      <button type="submit" disabled={!enableButton}>Enviar</button>
      </div>
      </div>
    </div>
  );
}

export default FormComponent;
