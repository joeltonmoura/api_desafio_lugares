import Paises from '../../../Entities/Paises';
import { Visitas } from '../../../Entities/Visitas';
import { IserviceGetPais } from '../../Paises/interfaces';

type IvisitasCreate = {
  local: string;
  pais: Paises;
  meta: string;
};

type IGetLocal = {
  id: number | null;
  local: string | null;
  idpais: number | null;
};

type IatualizarLocal = {
  id: number;
  local: string;
  meta: string;
  updated_at: Date;
};

interface IVistiasPaisRepository {
  save(data: IvisitasCreate): Promise<Visitas>;
  getLocal(data: IGetLocal): Promise<Array<Visitas>>;
  atualizarLocal(data: IatualizarLocal): Promise<Visitas>;
}

interface IserviceCreatelocal {
  execute(data: IvisitasCreate): Promise<Visitas>;
}

interface IserviceGetLocal {
  execute(data: IGetLocal): Promise<Array<Visitas>>;
}

interface IserviceAtualizarLocal {
  execute(data: IatualizarLocal): Promise<Visitas>;
}
interface IControllerLocal {
  getPaisBd: IserviceGetPais;
  saveLocal: IserviceCreatelocal;
  getLocal: IserviceGetLocal;
  atualizarLocal: IserviceAtualizarLocal;
}

export { IVistiasPaisRepository, IvisitasCreate, IserviceCreatelocal, IControllerLocal, IGetLocal, IserviceGetLocal, IatualizarLocal, IserviceAtualizarLocal };
