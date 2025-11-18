//punto de arranque de servidor, importar base de datos y configuraicon de srvidor
//inicilizar sefvidor
import "./database.js";
import app from "./app.js";

//Strat server
app.listen(app.get('port'), () => console.log("Server listenign on port " + app.get('port')));//aqui arrancamos el servidor