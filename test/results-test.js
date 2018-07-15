let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);


describe('Results', () => {
  let results = chai.request.agent(app);

  let mockData = {
        season: '1',
        number: '1',
        name: 'mockTitle'
      }

  beforeEach((done) => {
    results
    .post('/code')
    .send(mockData)
    .end((err, res) => {
      done();
    });
  });

  it('shows the page title', () => {
    results
    .get('/results')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.contain('All the Silincon Valley episodes');
    });
  });

  it('shows the data from the JSON file', () => {
    results
    .get('/results')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.contain('mockTitle');
    });
  });

});
