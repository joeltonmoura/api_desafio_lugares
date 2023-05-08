import Paises from '../../../Entities/Paises';
import { Visitas } from '../../../Entities/Visitas';
import { SqliteConnection } from '../../../database';
import { IGetLocal, IVistiasPaisRepository, IatualizarLocal, IvisitasCreate } from '../interfaces';

class VistiasPaisRepository implements IVistiasPaisRepository {
  async save(data: IvisitasCreate): Promise<Visitas> {
    try {
      const result = SqliteConnection.getRepository(Visitas).save(data);

      return result;
    } catch (error) {
      throw new Error(`Erro ao Salvar registro ${error}`);
    }
  }

  async getLocal(data: IGetLocal): Promise<Array<Visitas>> {
    try {
      let local = data.local === null ? null : `${data.local?.toLocaleUpperCase()}%`;
      const locais = await SqliteConnection.getTreeRepository(Visitas)
        .createQueryBuilder('visitas')
        .where('(upper(visitas.local) LIKE :local or :local IS NULL )', { local })
        .andWhere('(visitas.id = :id or :id  IS NULL )', { id: data.id })
        .andWhere('(visitas.paisid = :idpais or :idpais IS NULL)', { idpais: data.idpais })
        .orderBy(`substr(visitas.meta, 4, 4) || substr(visitas.meta, 1, 2)`, 'ASC')
        .getMany();

      return locais;
    } catch (error) {
      throw new Error(`Erro ao Salvar registro ${error}`);
    }
  }

  async atualizarLocal(data: IatualizarLocal): Promise<Visitas> {
    try {
      await SqliteConnection.getTreeRepository(Visitas).update(data.id, { local: data.local, meta: data.meta, updated_at: data.updated_at });
      const localAtualizado = await SqliteConnection.getTreeRepository(Visitas).find({ where: { id: data.id } });

      return localAtualizado[0];
    } catch (error) {
      throw new Error(`Erro ao Salvar registro ${error}`);
    }
  }
}

export { VistiasPaisRepository };
