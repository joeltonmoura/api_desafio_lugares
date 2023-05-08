import { promisify } from 'util';
import { IPais, IserviceSalvarImagem } from '../interfaces';
import path from 'path';
import fs, { createWriteStream } from 'fs';
import axios from 'axios';

class SalvarImagem implements IserviceSalvarImagem {
  async execute(urlImages: Array<IPais>): Promise<Array<IPais>> {
    const streamPipeline = promisify(require('stream').pipeline);
    const dir = path.join(__dirname, '../../../fotos');
    const errorFile = path.join(__dirname, '../../../fotos', 'errorUrls.txt');
    const errors: Array<string> = [];

    const FilesSalvos: Array<IPais> = [];

    if (!fs.existsSync(dir)) {
      console.log(dir);
      fs.mkdirSync(dir);
    }

    for (const urlImage of urlImages) {
      const imageName = path.basename(`${urlImage.pais}.png`);
      try {
        const response = await axios.get(urlImage.pathImage, { responseType: 'stream' });
        let pathFile = path.join(dir, imageName);
        await streamPipeline(response.data, createWriteStream(pathFile));
        console.log(`Arquivo ${imageName} salvo em ${dir}`);
        FilesSalvos.push({
          pais: urlImage.pais,
          pathImage: pathFile,
        });
      } catch (error) {
        console.log(`Erro ao salvar arquivo ${imageName}: ${error}`);
        errors.push(`Pais:${urlImage.pais}, Url: ${urlImage.pathImage}`);
      }
    }

    if (errors.length > 0) {
      const errorContent = errors.join('\n');
      fs.writeFileSync(errorFile, errorContent);
      console.log(`URLs com erro foram salvas em ${errorFile}`);
    }

    return FilesSalvos;
  }
}

export { SalvarImagem };
