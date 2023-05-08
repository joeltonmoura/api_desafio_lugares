import { Visitas } from '../../../Entities/Visitas';
import { IVistiasPaisRepository, IserviceAtualizarLocal, IatualizarLocal } from '../interfaces';

class AtulizarLocalService implements IserviceAtualizarLocal {
  constructor(private repository: IVistiasPaisRepository) {}
  async execute(data: IatualizarLocal): Promise<Visitas> {
    console.log(data);
    const visita = this.repository.atualizarLocal(data);

    return visita;
  }
}

export { AtulizarLocalService };
