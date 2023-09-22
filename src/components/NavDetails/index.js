import './index.css'

function NavDetails(){
    return(
<div className='details-background'>
            <div className='deal'>
            <div className="detail-div">
                <h1 className='detail-head'>Fill in the details to get a call!</h1>
                <div className='person-div'>
                    <img className='person-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141412/person_afgon3.svg" alt="person"/>
                    <input className='person-input' placeholder='Full name'/>
                </div>
                <div className='person-div'>
                    <img className='person-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141808/call_hi8dic.svg" alt="number"/>
                    <input className='person-input' placeholder='Phone number'/>
                </div>
                <div className='person-div'>
                    <img className='person-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141815/distance_azoxok.svg" alt="location"/>
                    <input className='person-input' placeholder='Location'/>
                </div>
                <div className='details-align'>
                    <img className='check-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141911/check_igdd6s.svg" alt="check"/>
                    <p className='fill-para'>By continuing, you agree to our <span className='span-para'>T&C </span>and privacy policy</p>
                </div>
                    <button className='button-details'>Proceed</button>
            </div>
            <div>
            <button className='offer-button' >Get a Full Body Checkup <span className="offer-span">Now</span> at <span className='strike'>&#8377;5,999</span> <span className='offer-span1'>&#8377;999</span>
            </button>
            <button className='off-button'><span className='strike-one'>&#8377;5,999</span> <span className='offer-span2'>&#8377;999</span>70% OFF</button>
            </div>
            </div>
            <div className='doctor-div'>
            <div className='lab-one'>
              <div className='best-one'>
                <h1 className='best-details'>Best in class</h1>
                <img className='best-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695177368/Vector_1_wbh8nq.png" alt="line"/>
              </div>
              <h1 className='lab-details'>lab tests!</h1>
              </div>
            <div className='doctor-details'>
                <div>
                    <div className='container-div'>
                        <img className='container-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695180377/Ellipse_1_lwanlm.svg" alt="eclipse"/>
                        <p className='container-para'>Timely sample collection</p>
                    </div>
                    <div className='container-div1'>
                        <img className='container-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189799/Ellipse_2_lrtubn.svg" alt="eclipse1"/>
                        <p className='container-para'>Timely sample collection</p>
                    </div>
                    <div className='container-div2'>
                        <img className='container-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189928/Ellipse_3_zfqb5f.svg" alt="eclipse2"/>
                        <p className='container-para'>Timely sample collection</p>
                    </div>
                </div>
                <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695181601/download__1_-removebg-preview_cvxnh9.png" alt="doctor"/>
                
            </div>
            </div>
        </div>
    )
}

export default NavDetails