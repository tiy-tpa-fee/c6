import React from 'react'
import './style.sass'

class App extends React.Component {

  render () {
    return <div>
      <header>
        <img src="http://www.foodphotosite.com/images/vegetables/pickle/dill-pickles-01.jpg" height="200" alt=""/>
        <h1>We are Sassy</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
      </header>
      <main>
        <div>
          <h3>Software</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div>
          <h3>Software</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div>
          <h3>Software</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div>
          <h3>Software</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
      </main>
      <footer>
        <p>
          <img src="https://lh3.googleusercontent.com/jc7dnYq7K3fAtp4Qqp557UP_rgy3Q8DtzVZJKOOUXQEdmTsihBTaUTm46JJaagJQ9as=w300" height="22" alt="One List Logo" />
          <strong>Annoucement</strong> Meet <a href="http://one-list.surge.sh">One List</a> the next Pickle of Awesome.
        </p>
        <p className="copyright">&copy; 2016 Pickles of Awesome.</p>
      </footer>
    </div>
  }
}

export default App
