//en este archivo va expres y lo configuramos todo al servidor pura configuracion
//toda config de serv
import express from 'express'; 
import morgan from 'morgan'; //para ver las peticiones
import ejs from 'ejs';
import studentsRouter from "./routes/students.routes.js" ;
import teachersRouter from "./routes/teachers.routes.js";
import subjectsRouter from "./routes/subjects.routes.js";

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');//aqui se le enviaa la vista del codigo html, ocmfihurar el motor de vustas
app.set("views", "./src/views");//esto es para que encuentre el docuemnto

//Middlerwares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/students', studentsRouter); 
app.use('/api/teachers', teachersRouter);
app.use('/api/subjects', subjectsRouter);

export default app;