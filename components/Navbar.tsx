import * as React from 'react';
import propType from 'prop-type';
import { Link } from 'react-router-dom';
export function Navbar(props) {
  // let setColors = (bg, col) => {
  //   props.theme(bg, col);
  // };

  // let changeColors = (bg, col) => {
  //   // props.theme(bg, col);
  //   props.currentColors.bgcolor = bg;
  //   props.currentColors.color = col;
  // };
  // let setColors = () => {
  //   let radios = document.querySelectorAll('.btnradio');
  //   for (let radion of radios) {
  //     radion.addEventListener('onClick', function (event) {
  //       let radioId = radion.id;
  //       if (radioId == 'btnradio1') {
  //         changeColors('red', 'white');
  //       } else if (radioId == 'btnradio2') {
  //         changeColors('blue', 'white');
  //       } else {
  //         changeColors('green', 'white');
  //       }
  //     });
  //   }
  // };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.viewMode} bg-${props.viewMode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-div="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home1">
                Home1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {props.viewMode === 'dark' && (
            <div
              className="btn-group mx-2"
              role="group"
              aria-div="Basic radio toggle button group"
            >
              <div
                className="circle"
                id="lbl1"
                style={{
                  height: '32px',
                  width: '32px',
                  backgroundColor: '#006699',
                  borderRadius: '15px',
                  margin: '2px',
                  border: '1px solid white',
                  cursor: 'pointer',
                }}
                onClick={() => props.theme('#006699', 'white')}
              ></div>

              <div
                className="circle"
                id="lbl2"
                onClick={() => props.theme('#333399', 'white')}
                style={{
                  height: '32px',
                  width: '32px',
                  backgroundColor: '#333399',
                  borderRadius: '15px',
                  margin: '2px',
                  border: '1px solid white',
                  cursor: 'pointer',
                }}
              ></div>

              <div
                className="circle"
                id="lbl3"
                onClick={() => props.theme('#4d0099', 'white')}
                style={{
                  height: '32px',
                  width: '32px',
                  backgroundColor: '#4d0099',
                  borderRadius: '15px',
                  margin: '2px',
                  border: '1px solid white',
                  cursor: 'pointer',
                }}
              ></div>
            </div>
          )}

          <div
            className={`form-check form-switch text-${
              props.viewMode === 'dark' ? 'light' : 'dark'
            }`}
          >
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <div className="form-check-div">Enable Dark Mode</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propsType = {
  title: propType.string,
  aboutText: propType.string,
};

Navbar.defaultProps = {
  title: 'Text Utils',
  aboutText: 'About Us',
};
