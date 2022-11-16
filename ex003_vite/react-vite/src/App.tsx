import { useState } from "react";
const App = () => {
  const [show, setShow] = useState(false);
  const showText = () => {
    // setShow(!show)
    if(show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div>
      <button onClick={showText}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show === true &&
       <div>
          bla bla bal
        </div>
      }

      
    </div>
  );
}

export default App;