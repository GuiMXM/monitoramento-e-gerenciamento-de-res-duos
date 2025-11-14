import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    // Este teste vai falhar pois não temos rota GET /
    // Vamos testar nossa rota /relatorio
    return request(app.getHttpServer())
      .get('/relatorio')
      .expect(200); // Espera que a rota de relatório funcione
  });
});