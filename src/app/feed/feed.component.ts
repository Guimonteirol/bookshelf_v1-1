import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { Dashboard } from './../modelosInterface/dashboard';
import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, catchError, of, fromEvent, tap, filter, distinctUntilChanged, debounceTime, } from 'rxjs';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements AfterViewInit, OnInit {

  cards$!: Observable<Dashboard[]>;
  results$?: Observable<Dashboard[]>;

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );


  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          const query = this.searchInput.nativeElement.value;
          if (query) {
            this.results$ = this.dashboardService.search(query);
          } else {
            this.results$ = undefined;
          }
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.cards$ = this.dashboardService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      }),
      delay(500)
    );
  }

}

