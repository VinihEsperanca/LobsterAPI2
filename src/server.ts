import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import { connectDatabase } from "./config/database";
import pratoRouter from "./routes/pratoRoutes";
import authRouter from "./routes/AuthRoutes";

const app = express();
app.use(express.json());

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use("/api/pratos", pratoRouter);
app.use("/auth", authRouter);

// Inicialização do servidor
const PORT = 3001;

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`📚 Swagger docs at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco:", error);
  }
};

startServer();
