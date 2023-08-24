// function App() {
//     return (<h1>Hola Mundo!!</h1>);
// }
// export default App;
//import { Fragment } from "react"
// function ReturnName(newMessage1) {
//   var message=newMessage1.message;
//   return message;
  
// }
// const newMessage = {
//   message: 'Hola Ikki',
//   title: 'Fernando'
// };

import PropTypes from 'prop-types';

export const FirstApp = ( {title, subtitle, name}) => {
 //console.log(props);


  return (
    <>
    <h1>{ title }</h1>
    <p>Soy un subtitulo {subtitle}</p>
    <p>{name}</p>
      </>

  )
}

FirstApp.propTypes ={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps ={
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo',
  name: 'Juan Carranza'
}