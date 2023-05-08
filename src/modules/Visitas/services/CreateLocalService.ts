import { Visitas } from '../../../Entities/Visitas';
import { IVistiasPaisRepository, IserviceCreatelocal, IvisitasCreate } from '../interfaces';

class CreateLocalService implements IserviceCreatelocal {
  constructor(private repository: IVistiasPaisRepository) {}
  async execute(data: IvisitasCreate): Promise<Visitas> {
    const visita = this.repository.save(data);

    return visita;
  }
}

export { CreateLocalService };
