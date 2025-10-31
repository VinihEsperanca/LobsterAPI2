import { Request, Response } from "express";
import { PratoService } from "../services/PratoService";

export class PratoController {
    private pratoService: PratoService;

    constructor() {
        this.pratoService = new PratoService();
    }

    async get(req: Request, res: Response): Promise<Response> {
        try {
            const pratos = await this.pratoService.getAllPratos();
            return res.json(pratos);
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, preco, desc } = req.body;
            const novoPrato = await this.pratoService.createPrato({ nome, preco, desc });
            return res.status(201).json(novoPrato);
        } catch (error: any) {
            if (error.message === 'Prato já existe') {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { nome, preco, desc } = req.body;

            const pratoAtualizado = await this.pratoService.updatePrato(id, { nome, preco, desc });

            if (!pratoAtualizado) {
                return res.status(404).json({ error: 'Prato não encontrado' });
            }

            return res.json(pratoAtualizado);
        } catch (error: any) {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
