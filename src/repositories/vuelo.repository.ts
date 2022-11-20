import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Vuelo, VueloRelations} from '../models';

export class VueloRepository extends DefaultCrudRepository<
  Vuelo,
  typeof Vuelo.prototype.id,
  VueloRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Vuelo, dataSource);
  }
}
