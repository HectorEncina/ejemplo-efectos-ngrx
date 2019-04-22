import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Appstate } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';

import * as fromUsuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor( private store: Store<Appstate> ) { }

  ngOnInit() {
    this.store.select('usuarios')
      .subscribe(usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      });

    this.store.dispatch( new fromUsuariosActions.CargarUsuarios());
  }

}
