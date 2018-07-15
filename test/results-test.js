let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);


describe('Results', () => {
  let results = chai.request.agent(app);


  it('shows the page title', () => {
    results
    .get('/results')
    .end((err, res) => {
      res.should.have.status(200);
      res.text.should.contain('All the Silincon Valley episodes');
    });
  });

});
