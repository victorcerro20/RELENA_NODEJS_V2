
const app = express();

const apiRoutes = require('../routes/api');

// Middlewares y configuraciones de Express

app.use(express.json());

// Rutas de la API
app.use('/api', apiRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
