import './index.css'
import { Component } from 'react'

class Who extends Component{
    state = {
        showMessage: false,
        showMessage1: false,
        showMessage2: false,
        showMessage3: false,
        mobileViewWidth: '50%'
      }

      onclickButton=()=>{
        this.setState(prevState => ({
            showMessage: !prevState.showMessage,
            mobileViewWidth: prevState.showMessage ? '50%' : '100%'
          }))
      }
      onclickButton1=()=>{
        this.setState(prevState => ({
            showMessage1: !prevState.showMessage1,
            mobileViewWidth: prevState.showMessage1 ? '50%' : '100%'
          }))
      }
      onclickButton2=()=>{
        this.setState(prevState => ({
            showMessage2: !prevState.showMessage2,
            mobileViewWidth: prevState.showMessage2 ? '50%' : '100%'
          }))
      }
      onclickButton3=()=>{
        this.setState(prevState => ({
            showMessage3: !prevState.showMessage3,
            mobileViewWidth: prevState.showMessage3 ? '50%' : '100%'
          }))
      }

    render(){  
        const {showMessage,showMessage1,showMessage2,showMessage3,mobileViewWidth} = this.state
        const image = showMessage ? "https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367428/close_v3p6v1.svg" :"https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367412/arrow_drop_down_luqvgp.svg"
        const altText = showMessage ? 'close-button'  :'arrow-drop-button'
        const image1 = showMessage1 ? "https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367428/close_v3p6v1.svg" :"https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367412/arrow_drop_down_luqvgp.svg"
        const altText1 = showMessage1 ? 'close-button'  :'arrow-drop-button'
        const image2 = showMessage2 ? "https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367428/close_v3p6v1.svg" :"https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367412/arrow_drop_down_luqvgp.svg"
        const altText2 = showMessage2 ? 'close-button'  :'arrow-drop-button'
        const image3 = showMessage3 ? "https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367428/close_v3p6v1.svg" :"https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695367412/arrow_drop_down_luqvgp.svg"
        const altText3 = showMessage3 ? 'close-button'  :'arrow-drop-button'
    return(
        <div className='explore-p'>
        <div className='explanding'>
          <h1 className='expand-para'>Why</h1>
          <div className='line-div'>
            <h1 className='expand-span-para'>choose</h1>
            <img className='who-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695177368/Vector_1_wbh8nq.png" alt="line"/>
          </div>
          <h1 className='expand-para'>?</h1>
          </div>
          <p className='explore-para'>We want you and your heart to be healthy so you can live a happy life!</p>
          <div className='div-women'>
            <div className='div'>
          <div className='learn'>
            <div className='learn1'>
          <div className='who-div'>
            <h1 className='who-head'>NABL Accredited Labs</h1>
            <p className='who-para'>Get accurate and safe results from our NABL-certified lab partners.  </p>
          </div>
          <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695198225/Ellipse_16_tysgnq.svg" alt="i"/>
          </div>
          <div className='learn1'>
          <div className='who-div1'>
            <h1 className='who-head'>Value experience</h1>
            <p className='who-para'>Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.</p>
          </div>
          <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199103/Ellipse_14_1_cgeuw4.svg" alt="i"/>
          </div>
          </div>
          <div className='learn'>
          <div className='learn1'>
          <div className='who-div2'>
            <h1 className='who-head'>Timely collections</h1>
            <p className='who-para'>We collect samples timely to prevent treatment delays and ensure your continued well-being.  </p>            
          </div>
          <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199114/Ellipse_13_ijbszx.svg" alt="i"/>
          </div>
          <div className='learn1'>
          <div className='who-div3'>
            <h1 className='who-head'>Transparency</h1>
            <p className='who-para'> Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.</p>
            </div>
            <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199123/Ellipse_15_wnpyag.svg" alt="i"/>
          </div>
          </div>

          <div className='mobile-view' style={{ height: mobileViewWidth }}>
            <div className='who-end'>
          <img className='who-end-img1' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695198225/Ellipse_16_tysgnq.svg" alt="i"/>
          <h1 className='who-head'>NABL Accredited Labs</h1>
          <button onClick={this.onclickButton} className='button-triangle'>
            <img src={image} alt={altText}/></button>
          </div>
          {showMessage&&<p className='who-para'>Get accurate and safe results from our NABL-certified lab partners.  </p>}
          </div>
          <div className='mobile-view' style={{ height: mobileViewWidth }}>
            <div className='who-end'>
          <img className='who-end-img1' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199103/Ellipse_14_1_cgeuw4.svg" alt="i"/>
          <h1 className='who-head'>Timely collections</h1>
          <button onClick={this.onclickButton1} className='button-triangle'>
            <img src={image1} alt={altText1}/></button>
          </div>
          {showMessage1&&<p className='who-para'>Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.</p>}
          </div>
          <div className='mobile-view' style={{ height: mobileViewWidth }}>
            <div className='who-end'>
          <img className='who-end-img1' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199114/Ellipse_13_ijbszx.svg" alt="i"/>
          <h1 className='who-head'>Value experience</h1>
          <button onClick={this.onclickButton2} className='button-triangle'>
            <img src={image2} alt={altText2}/></button>
          </div>
          {showMessage2&&<p className='who-para'>We collect samples timely to prevent treatment delays and ensure your continued well-being.</p>}
          </div>
          <div className='mobile-view' style={{ height: mobileViewWidth }}>
            <div className='who-end'>
          <img className='who-end-img1' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199123/Ellipse_15_wnpyag.svg" alt="i"/>
          <h1 className='who-head'>Transparency</h1>
          <button onClick={this.onclickButton3} className='button-triangle'>
            <img src={image3} alt={altText3}/></button>
          </div>
          {showMessage3&&<p className='who-para'>Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey. </p>}
          </div>

          
            </div>
            <img className='doctor' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199391/expressive-young-woman-posing-studio-removebg-preview-transformed_1_zvvbtc.png" alt="doctor"/>
            </div>
        </div>

    )
}
}
export default Who