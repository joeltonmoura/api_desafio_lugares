import { IPais, IPaisRepository, IserviceAtulizarPais } from '../interfaces';

class AutalizarPaisesBd implements IserviceAtulizarPais {
  constructor(private repository: IPaisRepository) {}

  async execute(paises: Array<IPais>): Promise<void> {
    this.repository.save(paises);
  }
}

export { AutalizarPaisesBd };
