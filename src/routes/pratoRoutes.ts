import { Router } from "express";
import { PratoController } from "../controllers/pratoController";
import { authMiddleware } from "../middlewares/auth";

const pratoRouter = Router();
const prato = new PratoController();

pratoRouter.use(authMiddleware);

/**
 * @swagger
 * components:
 *  schemas:
 *      Prato:
 *          type: object
 *          required:
 *              - nome
 *              - preco
 *              - desc
 *          properties:
 *              nome:
 *                  type: string
 *                  description: nome do prato
 *              preco:
 *                  type: number
 *                  description: preço do prato
 *              desc:
 *                  type: string
 *                  description: descrição do prato
 */

/**
 * @swagger
 * /prato:
 *  get:
 *      summary: Lista todos os pratos
 *      tags: [Pratos]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *          200:
 *              description: Lista de pratos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Prato'
 *          401:
 *              description: Token não informado
 */
pratoRouter.get("/", (req, res) => prato.get(req, res));

/**
 * @swagger
 * /prato:
 *  post:
 *      summary: Criar um prato
 *      tags: [Pratos]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *               application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Prato'
 *      responses:
 *          201:
 *              description: Prato criado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Prato'
 *          401:
 *              description: Token não informado
 */
pratoRouter.post("/", (req, res) => prato.create(req, res));

/**
 * @swagger
 * /prato/{id}:
 *  put:
 *      summary: Atualiza um prato
 *      tags: [Pratos]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *      requestBody:
 *          required: true
 *          content:
 *               application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nome:
 *                              type: string
 *                          preco:
 *                              type: number
 *                          desc:
 *                              type: string
 *      responses:
 *          200:
 *              description: Prato atualizado com sucesso
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Prato'
 *          404:
 *              description: Prato não encontrado
 *          401:
 *              description: Token não informado
 */
pratoRouter.put("/:id", (req, res) => prato.update(req, res));

export default pratoRouter;
