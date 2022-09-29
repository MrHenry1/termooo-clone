SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: false,
 /* packages: {
    "./src": {
      main: './app.js',
      defaultExtension: 'js'
    }
  },*/
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@latest/umd/react.development.js',
    'react-dom': 'react-dom@latest/umd/react-dom.development.js',
    'react-is': 'react-is@latest/umd/react-is.production.min.js',
    'styled-components': 'styled-components@latest/dist/styled-components.min.js',
    'toast': 'react-hot-toast@2.2.0/dist/react-hot-toast.esm.js',
    'framer-motion': 'framer-motion@latest/dist/framer-motion.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./index.js')
  .catch(console.error.bind(console));
