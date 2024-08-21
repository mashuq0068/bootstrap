const Services = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  return (
    // <div  className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-3">
    //   {data.map((product, i) => (
    //     <div className= "card col " key={i}     style={{ flex: '1 1 calc(25% - 1rem)', maxWidth: 'calc(25% - 1rem)' }} >
    //       <img
    //         src="https://via.placeholder.com/150"
    //         className="card-img-top"
    //         alt="Placeholder image"
    //       />
    //       <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">
    //           Some quick example text to build on the card title and make up
    //           the bulk of the cards content.
    //         </p>
    //         <a href="#" className="btn btn-primary">
    //           Go somewhere
    //         </a>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  <div className="container">
      <div  className="row g-3">
      {data.map((product, i) => (
      <div className="col-md-6 col-12 col-lg-4 col-xl-3" key={i}>
          <div  className= " card" >
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Placeholder image"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the cards content.
            </p>
            <a href="#" className="btn bg-black text-white">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

))}
    </div>
  </div>
  );
};

export default Services;
