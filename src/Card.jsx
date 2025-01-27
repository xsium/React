import './Card.css'
export default function Card({pseudo, mail, image, description}) {

  return (
    <>
    <article className='card'> 
        <div className="container card">
          <div className="card-header d-flex justify-content-between">
            <div className="container">
              <h2 className="lh-1 card-title">{pseudo}</h2>
              <h3 className="lh-1 card-subtitle text-black-50">{mail}</h3>
            </div>
            <img className="w-25" src={image} alt="image" />
          </div>
          <div className="card-body">
            <p className="lh-1 card-text">
              {description}
            </p>
          </div>
        </div>

    </article>
    </>
);
}