var expect = require('chai').expect;
var _ = require('lodash');
var linearSearch = require('./LinearSearch');

var n;

describe('선형 검색', function () {
  before(function (done) {
    // [1, 2, ..., 9999, 1000000]
    n = _.range(1, 1000001, 1);

    return done();
  });

  it('1을 반환한다.', function () {
    expect(linearSearch(n, 1)).to.equal(1);
  });

  it('500000을 반환한다.', function () {
    expect(linearSearch(n, 500000)).to.equal(500000);
  });

  it('null을 반환한다.', function () {
    expect(linearSearch(n, 1000001)).to.equal(null);
  });
});