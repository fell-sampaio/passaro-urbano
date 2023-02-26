import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject, switchMap, of, distinctUntilChanged, catchError, throwError } from 'rxjs';

import { OfertasService } from './../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(
    private ofertasService: OfertasService
  ) {  }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), // executa a ação do switchMap após 1s
      distinctUntilChanged(), // fazer pesquisa distinta
      switchMap((termo: string) => {
        if (termo.trim() === '') {
          // retornar um observable de array de ofertas vazio
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }),
      catchError(()=> {
        return of<Oferta[]>([]);
      }));
  };


  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  };

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}
