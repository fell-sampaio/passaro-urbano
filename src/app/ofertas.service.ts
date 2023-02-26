import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { firstValueFrom, Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { URL_API } from './app.api';
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

  constructor(
    private http: HttpClient
  ) {  }

  public async getOfertas(): Promise<Oferta[]> {
    return await firstValueFrom(this.http.get(`${URL_API}/ofertas?destaque=true`))
    .then((resposta: any) => resposta);
  }

  public async getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return await firstValueFrom(this.http.get(`${URL_API}/ofertas?categoria=${categoria}`))
    .then((resposta: any) => resposta);
  }

  public async getOfertaPorId(id: number): Promise<Oferta> {
    return await firstValueFrom(this.http.get(`${URL_API}/ofertas?id=${id}`))
    .then((resposta: any) => resposta.shift());
  }

  public async getComoUsarOfertaPorId(id: number): Promise<string> {
    return await firstValueFrom(this.http.get(`${URL_API}/como-usar?id=${id}`))
    .then((resposta: any) => resposta.shift().descricao)
  }

  public async getOndeFicaOfertaPorId(id: number): Promise<string> {
    return await firstValueFrom(this.http.get(`${URL_API}/onde-fica?id=${id}`))
    .then((resposta: any) => resposta.shift().descricao)
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(map((resposta: any) => resposta), retry(10))
  }
}
