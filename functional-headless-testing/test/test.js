const client = require('./../client');
const expect = require('chai').expect;

//  Test for selenium and phantomjs

// describe('Test Github.com', () => {
//   before((done) => {
//    client.init().url('https://github.com', done);
//   });

//   describe('Check Github homepage', () => {
//     it('should see the correct title', (done) => {
//       client.getTitle((err,title) => {
//         expect(title).to.have.string('GitHub');
//         done();
//       })
//     })

//     it('should contain some body', (done) => {
//       client.getText('p', (err,para) => {
//         expect(para).to.have.string('you can uncheck available for hire in your account settings or use the button.');
//         done();
//       })
//     })
//   })

//   after((done)=> {
//     client.end();
//     done();
//   })
// })

describe('Test example.com', function(){
  before(function(done) {
      client.init().url('http://example.com', done);
  });

  describe('Check homepage', function(){
      it('should see the correct title', function(done) {
          client.getTitle(function(err, title){
              expect(title).to.have.string('Example Domain');
              done();
          });
      });

      it('should see the body', function(done) {
          client.getText('p', function(err, p){
              expect(p).to.have.string(
                  'for illustrative examples in documents.'
              );
              done();
          })
      });
  });

  after(function(done) {
      client.end();
      done();
  });
});