function QuestionCard({ title, description, id}) {


  return (
    
     
  <div className="accordion-item">
    <h2 className="accordion-header" id={`h${id}`}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#c${id}`} aria-expanded="true" aria-controls={`c${id}`}>
        {title}
      </button>
    </h2>
    <div id={`c${id}`} className="accordion-collapse collapse" data-bs-parent={`#faq`} aria-labelledby={`h${id}`}>
      <div className="accordion-body">
        {description}
      </div>
    </div>
  </div>
  
  );
}

//PASSAR AQUI A PROPTYPES PARA VALIDAÇÃO


export default QuestionCard;
