//configuracion para conectarse a mongo bd u otra base de datos
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://JanJan594:130613Minsung@cluster0.xwedesz.mongodb.net/school_control?retryWrites=true&w=majority&appName=Cluster0")
.then(db => console.log('MongoDB is connected'))
.catch(err => console.error(err));

export default mongoose;