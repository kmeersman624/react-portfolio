import React from 'react'

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
                <a href= "katie4682@yahoo.com">katie4682@yahoo.com</a>
                <br />
                © 2020 Kate Meersman brand. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
