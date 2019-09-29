import React from 'react';
import './assets/styles/App.scss';

function App() {
  return (
    <div id="main">
      <div className="container">
        <div className="jumbotron">
          <div className="self">
            <div className="avatar circle" style={{ backgroundImage: "url('justarya-picture.jpg')" }}></div>
            <div className="self--container">
              <div className="self--hi">Hi I'm</div>
              <div className="self--name">Just<b>Arya</b></div>
              <div className="self--description">Design . Developer</div>
            </div>
          </div>
          <div className="social-media">
            <div className="social-media--item">
              <a href="http://github.com/justarya/" target="_blank" rel="noopener noreferrer" className="link--github">&lt;github/&gt;</a>
            </div>
            <div className="social-media--item">
              <a href="http://medium.com/@justarya/" target="_blank" rel="noopener noreferrer" className="link--medium">Medium</a>
            </div>
            <div className="social-media--item">
              <a href="http://linkedin.com/in/justarya/" target="_blank" rel="noopener noreferrer" className="link--linkedin">Linked<b>In</b></a>
            </div>
        </div>
        </div>
      </div>
      {/* <div className="content">
        <div className="barholder bg-white"></div>
        <div className="content__card">
          <div className="container">
            <div id="mywork">
              <div className="title">
                myWork
              </div>
              <div className="work--list">
                <div className="work--item" style={{ backgroundImage: "url('https://placehold.co/600x400')" }}>
                  <p className="work--item__label">Test</p>
                </div>
                <div className="work--item" style={{ backgroundImage: "url('https://placehold.co/600x400')" }}>
                  <p className="work--item__label">Test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
