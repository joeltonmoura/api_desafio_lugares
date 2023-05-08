import { IPaisRepository, IPais } from './../interfaces';
import { SqliteConnection } from '../../../database';
import { Pais } from '../../../Entities/Paises';

class PaisRepository implements IPaisRepository {
  async save(data: Array<IPais>): Promise<string> {
    try {
      const result = await SqliteConnection.getRepository(Pais).save(data);
      if (result.length > 0) {
        return 'Registros Savlos';
      } else {
        return 'Nehum Registro Salvo';
      }
    } catch (error) {
      throw new Error(`Erro ao Salvar registro ${error}`);
    }
  }

  async getPais(idpais: number): Promise<Array<Pais>> {
    const pais = await SqliteConnection.getRepository(Pais).find({ where: { id: idpais } });

    return pais;
  }
}

export { PaisRepository };
