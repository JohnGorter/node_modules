import '../paper-styles-classes.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<style>
/* Mixins */

/* [paper-font] */
body {
  font-family: 'Roboto', 'Noto', sans-serif;
  -webkit-font-smoothing: antialiased;  /* OS X subpixel AA bleed bug */
}

/* [paper-font=display2] */
h1 {
  font-size: 45px;
  font-weight: 400;
  letter-spacing: -.018em;
  line-height: 48px;
}

/* [paper-font=display1] */
h2 {
  font-size: 34px;
  font-weight: 400;
  letter-spacing: -.01em;
  line-height: 40px;
}

/* [paper-font=headline] */
h3 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -.012em;
  line-height: 32px;
}

/* [paper-font=subhead] */
h4 {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

/* [paper-font=body2] */
h5, h6 {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

/* [paper-font=button] */
a {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.018em;
  line-height: 24px;
  text-transform: uppercase;
}

/* Overrides */

body, a {
  color: #212121;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0 0 20px 0;
}

h1, h2, h3, h4, h5, h6, a {
  text-rendering: optimizeLegibility;
}

a {
  text-decoration: none;
}

</style>`;

document.head.appendChild($_documentContainer);
