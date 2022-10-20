import app from './app.js'
import { PORT } from "./config.js"

app.listen(PORT);

console.log("npm se está ejecutando en el puerto", PORT);