import {Entity, model, property} from '@loopback/repository';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha_Inicio: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_Inicio: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha_Fin: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_Fin: string;

  @property({
    type: 'string',
    required: true,
  })
  asientos_Vendidos: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_Piloto: string;

  @property({
    type: 'string',
    required: true,
  })
  ruta: string;

  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
