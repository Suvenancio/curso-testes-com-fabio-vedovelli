const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Su',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Su&profession=developer');
  });
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Su',
      profession: 'developer',
      abilities: ['JS', 'React'],
    };

    expect(queryString(obj)).toBe(
      'name=Su&profession=developer&abilities=JS,React',
    );
  });
  it('should throw an error when an object is passsed as value', () => {
    const obj = {
      name: 'Su',
      profession: 'developer',
      abilities: {
        first: 'JS',
        second: 'React',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Su&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Su',
      profession: 'developer',
    });
  });
  it('should convert a query string a single key-value', () => {
    const qs = 'name=Su';
    expect(parse(qs)).toEqual({
      name: 'Su',
    });
  });
  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Su&abilities=JS,React';
    expect(parse(qs)).toEqual({
      name: 'Su',
      abilities: ['JS', 'React'],
    });
  });
});
