import axios from 'axios';
import * as cheerio from 'cheerio';
import { IserviceExtrairUlrBandeiras, IPais } from '../interfaces';

class ExtrairUlrBandeiras implements IserviceExtrairUlrBandeiras {
  async execute(): Promise<Array<IPais>> {
    const url = 'https://www.sport-histoire.fr/pt/Geografia/Bandeiras_de_paises_do_mundo.php';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const urls: Array<IPais> = [];
    const tabela = $('#drapeaux');
    tabela
      .children('tbody')
      .children('tr')
      .map((i, el) => {
        const img = $(el).children('td').eq(0).find('img');
        const src = img.attr('data-src') || img.attr('src');
        const pais = $(el).children('td').eq(1).text();
        urls.push({ pais, pathImage: `https://www.sport-histoire.fr${src as string}` });
      })
      .get();
    return urls;
  }
}

export { ExtrairUlrBandeiras };
