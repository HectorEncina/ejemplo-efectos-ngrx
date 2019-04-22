import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface Appstate {
    usuarios: reducers.UsuariosState;
    usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<Appstate> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
};
