import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return(
    <div>
      <MesaVerde />
    </div>
  )
}
export default ColoradoStateParks;