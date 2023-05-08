import Pais from '../../../Entities/Paises';
import { IPais, IPaisRepository, IserviceGetPais } from '../interfaces';

class GetPais implements IserviceGetPais {
  constructor(private repository: IPaisRepository) {}

  async execute(idpais: number): Promise<Array<Pais>> {
    const result = await this.repository.getPais(idpais);
    return result;
  }
}

export { GetPais };
