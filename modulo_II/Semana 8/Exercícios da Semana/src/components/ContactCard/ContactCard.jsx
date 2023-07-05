function ContactCard() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-itens-center">
        <div className="col-lg-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56577.20324674755!2d-48.5590126!3d-27.591198!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1688490111494!5m2!1spt-BR!2sbr"
            className="w-100"
            height="200"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="row">
        <div>
          <h1>Loja</h1>
        </div>
       </div>

       <div className="row">
        <div className="col-lg-6">
          <h5>Rua do centro, 200, Centro</h5>
            <h5>Florianópolis, Santa Catarina</h5>
        </div>
        <div className="col-lg-6">
          <h5>contato@suaempresa.com.br</h5>
            <h5>+55 (48) 99999-0000</h5>
        </div>
       </div>

       <small>Aberto de segunda à sexta das 8h às 18h</small>


    </div>
  );
}

export default ContactCard;
