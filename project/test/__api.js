var expect = require('expect');
var server = require('../src/server.js');
// Overwrites request with supertest module
var request = require('supertest');
describe('API', function(){
  var server;
  beforeEach(function(){
    server = require('../src/server.js');
  });

  afterEach(function(){
    server.close();    
  });


  it('Should probably load, somehow', function(){
    expect('daisy').toBe('daisy');
  });
});
