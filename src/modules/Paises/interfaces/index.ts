import Pais from '../../../Entities/Paises';

type IPais = {
  pais: string;
  pathImage: string;
};

interface IPaisRepository {
  save(data: Array<IPais>): Promise<string>;
  getPais(idpais: number): Promise<Array<Pais>>;
}

// Intefaces Services
interface IserviceAtulizarPais {
  execute(paises: Array<IPais>): Promise<void>;
}

interface IserviceExtrairUlrBandeiras {
  execute(): Promise<Array<IPais>>;
}

interface IserviceSalvarImagem {
  execute(urlImages: Array<IPais>): Promise<Array<IPais>>;
}

interface IserviceGetPais {
  execute(idpais: number): Promise<Array<Pais>>;
}

interface IControllerAtualizarImagem {
  extrairUlr: IserviceExtrairUlrBandeiras;
  salvarImagem: IserviceSalvarImagem;
  atulizarBd: IserviceAtulizarPais;
}
export { IPaisRepository, IPais, IserviceAtulizarPais, IserviceExtrairUlrBandeiras, IserviceSalvarImagem, IControllerAtualizarImagem, IserviceGetPais };
