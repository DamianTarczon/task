import './App.scss'

function App() {

  return (
    <div className="App">
      <div className='first-section'>
        <div className='title-component'>
          <p className='first-text'>How It Work</p>
          <p className='second-text'>A Simple, Proven Way to Boost Your Team Performance.</p>
          <p className='third-text'>Most popular type of partnership Malta. The limited Liability is, in fact, the only type of company allowed by Companies.</p>
        </div>
        <div className='content-with-img-component'>
          <div className='content'>
            <div className='button'>
              <div className='button-img-and-title'>
                <img src='../public/assets/fingerprint.svg'/>
                <p>Install the App</p>
              </div>
              <p className='button-text'>Big, small, online, offline, local or international. Size doesn't matter. We work on diverse projects for top brands.</p>
            </div>
          </div>
          <div className='img'><img src='../public/assets/phone.svg'/></div>
        </div>
      </div>
    </div>
  )
}

export default App
