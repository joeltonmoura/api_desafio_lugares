import axios from 'axios';
import * as cheerio from 'cheerio';
import { createWriteStream } from 'fs';
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';

type PaisUrl = {
  pais: string;
  url: string;
};

async function extrairUrlsBandeiras(url: string): Promise<Array<PaisUrl>> {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const urls: Array<PaisUrl> = [];
  const tabela = $('#drapeaux');
  tabela
    .children('tbody')
    .children('tr')
    .map((i, el) => {
      const img = $(el).children('td').eq(0).find('img');
      const src = img.attr('data-src') || img.attr('src');
      const pais = $(el).children('td').eq(1).text();
      urls.push({ pais, url: `https://www.sport-histoire.fr${src as string}` });
    })
    .get();
  return urls;
}

async function downloadImages(urlImages: Array<PaisUrl>): Promise<void> {
  const streamPipeline = promisify(require('stream').pipeline);
  const dir = path.join(__dirname, 'bandeiras');
  const errorFile = path.join(__dirname, 'errorUrls.txt');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const errors: Array<string> = [];

  for (const urlImage of urlImages) {
    const imageName = path.basename(`${urlImage.pais}.png`);
    try {
      const response = await axios.get(urlImage.url, { responseType: 'stream' });
      let pathFile = path.join(dir, imageName);
      await streamPipeline(response.data, createWriteStream(pathFile));
      console.log(`Arquivo ${imageName} salvo em ${dir}`);
    } catch (error) {
      console.log(`Erro ao salvar arquivo ${imageName}: ${error}`);
      errors.push(`Pais:${urlImage.pais}, Url: ${urlImage.url}`);
    }
  }

  if (errors.length > 0) {
    const errorContent = errors.join('\n');
    fs.writeFileSync(errorFile, errorContent);
    console.log(`URLs com erro foram salvas em ${errorFile}`);
  }
}

export { extrairUrlsBandeiras, downloadImages };
