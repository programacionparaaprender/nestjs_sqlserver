
import { environment } from './environments/environment.dev';

module.exports = {
    type: environment.type,
    url: environment.url,
    //type: 'mysql',
    //url: 'mysql://root:@localhost:3306/bankingdddnest',//process.env.BANKING_DDD_NEST_MYSQL,
    migrationsRun: true,
    logging: true,
    timezone: '+0',
    bigNumberStrings: false,
    entities: environment.configuracion.entities,
    //entities: [process.env.ENVIRONMENT == 'prod' ? '**/infrastructure/persistence/typeorm/entities/*.js' : 'dist/**/infrastructure/persistence/typeorm/entities/*.js'],
    //migrations: [process.env.ENVIRONMENT == 'prod' ? 'common/infrastructure/persistence/typeorm/migrations/*.js' : 'dist/common/infrastructure/persistence/typeorm/migrations/*.js'],
    cli: {
      //migrationsDir: process.env.ENVIRONMENT == 'prod' ? 'common/infrastructure/persistence/typeorm/migrations' : 'src/common/infrastructure/persistence/typeorm/migrations',
    },
  };