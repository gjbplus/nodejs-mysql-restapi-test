import express from 'express';
import paisesRoutes from './routes/paises.routes.js'
import figuritasRoutes from './routes/figuritas.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json())
app.use(indexRoutes);
app.use('/api', paisesRoutes);
app.use('/api', figuritasRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
})

export default app;