import { Visitas } from '../../../Entities/Visitas';
import { IGetLocal, IVistiasPaisRepository, IserviceGetLocal } from '../interfaces';

class GetlLocalService implements IserviceGetLocal {
  constructor(private repository: IVistiasPaisRepository) {}

  async execute(data: IGetLocal): Promise<Array<Visitas>> {
    try {
      const visita = this.repository.getLocal(data);
      return visita;
    } catch (error) {
      throw new Error(`Erro ao buscar Local: ${error}`);
    }
  }
}

export { GetlLocalService };
