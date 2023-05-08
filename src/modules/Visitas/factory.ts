import { PaisRepository } from '../Paises/repositories/bd';
import { GetPais } from '../Paises/services/GetPais';
import { ControllerCreateLocalVisita } from './controllers/ControllerCreateLocalVisita';
import { VistiasPaisRepository } from './repositories/bd';
import { AtulizarLocalService } from './services/AtulizarLocalService';
import { CreateLocalService } from './services/CreateLocalService';
import { GetlLocalService } from './services/GetLocalService';

const local = () => {
  const vistiasPaisRepository = new VistiasPaisRepository();
  const paisRepository = new PaisRepository();
  const getPais = new GetPais(paisRepository);
  const createLocalService = new CreateLocalService(vistiasPaisRepository);
  const getLocal = new GetlLocalService(vistiasPaisRepository);
  const atualizarLocal = new AtulizarLocalService(vistiasPaisRepository);
  const controllerCreateLocalVisita = new ControllerCreateLocalVisita({ getPaisBd: getPais, saveLocal: createLocalService, getLocal, atualizarLocal });

  return controllerCreateLocalVisita;
};

export { local };
