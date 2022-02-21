//libs
import React from 'react';
import ReactDOM from 'react-dom';
//comps

import Image from './componets/Image';
import Header from './componets/Header';
import Welcome from './componets/Welcome';
//styles
import './scss/index.scss';
//data
import fields from './data/content.json';

//misc
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        {/* START - INTRO */}
        <div className="container pb-5 elevate-2">
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Welcome />
            </div>
          </div>

          <div className="bg bg--welcome">
            <Image
              src={fields.welcome.backgroundImage}
              alt={fields.restaurant.name}
            />
          </div>
        </div>
        {/* END - INTRO */}

        {/* START - CATEGORIES */}
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12">
              <h4>{fields.category.heading}</h4>
            </div>
          </div>
        </div>
        {/* END - CATEGORIES */}
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
