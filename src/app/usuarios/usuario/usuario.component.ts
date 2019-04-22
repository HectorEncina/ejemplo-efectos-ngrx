import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appstate } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromUsuarioActions from '../../store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  loading: boolean;
  error: any;

  constructor( private route: ActivatedRoute,
               private store: Store<Appstate> ) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        const id = params.id;

        this.store.dispatch( new fromUsuarioActions.CargarUsuario(id) );

      });

    this.store.select('usuario')
        .subscribe( usuario => {
          this.usuario = usuario.user;
          this.loading = usuario.loading;
          this.error = usuario.error;
        });
  }

}
