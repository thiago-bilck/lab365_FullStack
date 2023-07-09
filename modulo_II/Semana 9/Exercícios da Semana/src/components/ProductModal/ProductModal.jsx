function ProductModal({ name, price, description, features, imageUrl, id }) {

    return (  

<div className="modal fade" id={`${id}modal`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{name}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      
      <img src={imageUrl} className="card-img-top" alt="..." />
        <p className="card-text">{description}</p>
        <ul className="card-text">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        
          <p className="text-light text-center rounded bg-dark col-lg-3 p-2 ">R$: {price}</p>
        

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Adicionar ao carrinho</button>    
      </div>
    </div>
  </div>
</div>

    );
}

export default ProductModal;