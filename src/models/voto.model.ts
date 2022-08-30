import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Voto extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  FechaHora: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Voto>) {
    super(data);
  }
}

export interface VotoRelations {
  // describe navigational properties here
}

export type VotoWithRelations = Voto & VotoRelations;
