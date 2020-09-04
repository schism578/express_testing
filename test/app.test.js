const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
    it('should return a message from GET /', () => {
        return supertest(app)
            .get('/')
            .expect(200, 'Goodbye Express!');
    });
  });

  describe('GET /quotient', () => {
    it('8/4 should be 2', () => {
        return supertest(app)
            .get('/quotient')
            .query({ a: 8, b: 4 })
            .expect(200, '8 divided by 4 is 2');
    });
  });

  it(`should return 400 if 'a' is missing`, () => {
        return supertest(app)
            .get('/quotient')
            .query({ b: 4 })
            .expect(400, 'Value for a is needed');
        });

        describe('GET /generate endpoint', () => {
            it('should generate an array of 5', () => {
              return supertest(app)
                .get('/generate') // invoke the endpoint
                .query({ n: 5 }) // send the query string ?n=5
                .expect(200)  // assert that you get a 200  OK status
                .expect('Content-Type', /json/)
                .then(res => {
                  // make sure you get an array
                  expect(res.body).to.be.an('array');
                  // array must not be empty
                  expect(res.body).to.have.lengthOf.at.least(1);
                  // this assertion fails
                  expect(res.body).to.include.members([1,2,3,4,5]);
                  //Below can replace two lines above...
                //expect(res.body).to.be.an('array').that.have/include.members([1,2,3,4,5]);                });
            })
          });
        })

        {/*When comparing arrays of objects it is necessary to use .deep in the chain. For instance the following assertion:

            expect([ { x: 5 } ]).to.include({ x: 5 });

            fails with the message

            AssertionError: expected [ { x: 5 } ] to include { x: 5 }

            because object comparison is necessary to perform this check. Adding .deep to the chain solves this issue.

            expect([ { x: 5 } ]).to.deep.include({ x: 5 });*/}

            describe('GET /frequency endpoint', () => {
                it('should count frequency of characters', () => {
                  return supertest(app)
                    .get('/frequency') // invoke the endpoint
                    .query({ count: 1 }) // send the query string ?n=5
                    .expect(200)  // assert that you get a 200  OK status
                    .expect('Content-Type', /json/)
                    .then(res => {
                      // make sure you get an array
                      expect(res.body).to.be.an('string');
                      // array must not be empty
                      expect(res.body).to.have.lengthOf.at.least(1);
                      // this assertion fails
                      expect(res.body).to.include([1,2,3,4,5]);
                    })
                });
              })