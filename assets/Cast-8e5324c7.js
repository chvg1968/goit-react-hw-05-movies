import{j as s}from"./index-ea3a619e.js";import{P as i}from"./index-b05ce26d.js";function r({cast:a}){return s.jsxs("div",{className:"cast-list",children:[s.jsx("h2",{children:"Cast"}),a.length>0?s.jsx("ul",{className:"cast-grid",children:a.map(e=>s.jsxs("li",{className:"cast",children:[s.jsx("img",{src:`https://image.tmdb.org/t/p/w200${e.profile_path}`,alt:e.name}),s.jsx("span",{children:e.name})]},e.id))}):s.jsx("p",{children:"No profile yet"})]})}r.propTypes={cast:i.array.isRequired};export{r as default};
