import { AtualizarPaisesController } from './controllers/AtualizarPaisesController';
import { PaisRepository } from './repositories/bd';
import { AutalizarPaisesBd } from './services/AutalizarPaisesBd';
import { ExtrairUlrBandeiras } from './services/ExtrairUlrBandeiras';
import { SalvarImagem } from './services/SalvarImagem';

const atualizarImagemPais = () => {
  const atulizarRepositore = new PaisRepository();
  const atulizarBd = new AutalizarPaisesBd(atulizarRepositore);
  const extrairUlr = new ExtrairUlrBandeiras();
  const salvarImagem = new SalvarImagem();
  const atualizarController = new AtualizarPaisesController({ atulizarBd, extrairUlr, salvarImagem });

  return atualizarController;
};

export { atualizarImagemPais };
