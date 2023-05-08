import { IControllerAtualizarImagem } from './../interfaces';
import { Request, Response } from 'express';

class AtualizarPaisesController {
  constructor(private atualizarPais: IControllerAtualizarImagem) {}

  async handle(request: Request, response: Response) {
    try {
      const urls = await this.atualizarPais.extrairUlr.execute();
      const paises = await this.atualizarPais.salvarImagem.execute(urls);
      await this.atualizarPais.atulizarBd.execute(paises);
      response.status(200).json({ ok: true });
    } catch (error) {
      response.status(500).json({ error: `Erro ao Atualizar imagem: ${error}` });
    }

    response.status(200);
  }
}

export { AtualizarPaisesController };
