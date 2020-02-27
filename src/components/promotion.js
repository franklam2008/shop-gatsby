import React from "react"
//pages
//css
import styled from "styled-components"
//assets
const PromotionCon = styled.div`
background-color:var(--baseGreen);
  text-align:center;
  color:var(--baseWhite);
  padding:2px 0;
`

export default function Promotion() {

  return (
    <PromotionCon>
      FREE DOMESTIC SHIPPING ON ORDERS OVER $29
    </PromotionCon>
  )
}
