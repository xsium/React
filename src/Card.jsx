import reactlogo from './assets/react.svg'
export default function Card() {

  return (
    <>
    <h2 className="text-center m-5">
        Liste des TP React JS pour la formation CDA:
      </h2>

      <div className="container d-flex flex-row justify-content-start">
        <div className="container col-sm-10 col-md-4 col-lg-2 card mb-2 p-2">
          <div className="card-header d-flex justify-content-between">
            <div className="container">
              <h4 className="lh-1 card-title m-1 p-1">Exercice 1</h4>
              <h5 className="lh-1 card-subtitle text-black-50">React JS</h5>
            </div>
            <img className="w-25" src={reactlogo} alt="logo React" />
          </div>
          <div className="card-body">
            <p className="lh-1 card-text">
              TodoList React
            </p>
          </div>
          <div className='card-footer'>
            <div className="form-group mb-3 d-flex justify-content-end">
              <form action="exo0.html">
                <button
                  type="submit"
                  name="exo0"
                  className="btn btn-success"
                  value="1"
                >
                  Run Code
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
    </>
);
}