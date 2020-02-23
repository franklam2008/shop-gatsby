// import React from "react"
import React from 'react';
// import styled from "styled-components"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

export default function Header({ siteTitle }) {
  //  const [test, setTest] = useState(false);

  // change state on scroll
  // useEffect(() => {
  //   console.log('test');
    
  // }, [test]);
  // function testFunc(){
  //   setTest(!test)
  // }
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h3>
          <Link
            to="/shop/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Shop
          </Link>
        </h3>
        {/* <h1 onClick={()=>testFunc()}>test</h1> */}
      </div>
    </header>
  )
}
