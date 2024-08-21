

const Banner = () => {
    return (
        <div style={{gap:'10%'}} className="d-flex  justify-content-center flex-md-row flex-column-reverse mt-5 align-items-center">
            <div className="d-flex flex-column" style={{ gap:'15px' , maxWidth:'398px'}}> 
                <h1>Navigating the digital landscape for success</h1>
                <p className="fw-bold">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <button style={{width:"max-content"}} className="btn bg-black  text-white">Book a consultation</button>
            </div>
            <div className="container">
                <img className="w-100 w-md-auto" src="/images/banner-img.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;