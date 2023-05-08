import { Request, Response, NextFunction } from 'express';
import { IControllerLocal } from '../interfaces';

class ControllerCreateLocalVisita {
  constructor(private controllerLocal: IControllerLocal) {}
  async createLocal(request: Request, response: Response) {
    try {
      const { id, local, meta } = request.body;
      const pais = await this.controllerLocal.getPaisBd.execute(id);

      if (pais.length < 0) {
        return response.status(400).json({
          erro: `Não foi localizando nenhum pais com este ID: ${id}`,
        });
      }

      const existeLocal = await this.controllerLocal.getLocal.execute({ id: null, local, idpais: pais[0].id });
      if (existeLocal.length > 0) {
        return response.status(400).json({
          erro: `Local já cadastrado para este pais `,
        });
      }

      const newLocal = {
        local,
        pais: pais[0],
        meta,
      };
      const visita = await this.controllerLocal.saveLocal.execute(newLocal);

      response.status(200).json({ visita });
    } catch (error) {
      return response.status(500).json({
        error,
      });
    }
  }

  async getLocal(request: Request, response: Response) {
    try {
      let id: number | null = null;
      let local: string | null = null;
      let idpais: number | null = null;

      if (request.query.id !== undefined) {
        id = parseInt(request.query.id as string);
      }
      if (request.query.local !== undefined) {
        local = decodeURIComponent(request.query.local as string);
      }
      if (request.query.idpais !== undefined) {
        idpais = parseInt(request.query.idpais as string);
      }

      const existeLocal = await this.controllerLocal.getLocal.execute({ id: id, local, idpais });

      return response.status(200).json({
        local: existeLocal,
      });
    } catch (error) {
      return response.status(400).json({
        error,
      });
    }
  }

  async atualizarLocal(request: Request, response: Response) {
    try {
      const { id, meta, local } = request.body;
      const localAtualizado = await this.controllerLocal.atualizarLocal.execute({ id, meta, local, updated_at: new Date() });
      return response.status(200).json({
        local: localAtualizado,
      });
    } catch (error) {
      return response.status(400).json({
        error: `Erro ao consultar ${error}}`,
      });
    }
  }
}

export { ControllerCreateLocalVisita };
