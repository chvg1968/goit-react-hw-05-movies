import{j as s}from"./index-ea3a619e.js";import{P as i}from"./index-b05ce26d.js";function t({reviews:r}){return s.jsxs("div",{className:"reviews-list",children:[s.jsx("h1",{children:"Reviews"}),r.length>0?s.jsx("ul",{children:r.map(e=>s.jsxs("li",{children:[s.jsxs("p",{children:["Author: ",e.author]}),s.jsxs("p",{children:["Content: ",e.content]})]},e.id))}):s.jsx("h2",{children:"No reviews yet"})]})}t.propTypes={reviews:i.array.isRequired};export{t as default};