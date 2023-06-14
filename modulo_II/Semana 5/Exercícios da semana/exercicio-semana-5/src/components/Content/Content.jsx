import './Content.css'

function Content() {
  return (
    <div className="card-group m-3 mb-5">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body card1">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body card2">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body card3">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
