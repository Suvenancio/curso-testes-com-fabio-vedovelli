const { sum } = require('./calculator')
it('deve somar 2 e 2 e o resultado deve ser 4', () => {
    expect(sum(2,2)).toBe(4);
});
it('deve somar 2 e 2 mesmo se um dos valores for uma string,e o resultado deve ser 4', () => {
    expect(sum('2','2')).toBe(4);
});
it('deve dar erro se os valores inseridos não puderem ser somados', () => {
    expect(() => {sum('','2')}).toThrowError();
    expect(() => {sum(['2','2'])}).toThrowError();
    expect(() => {sum({})}).toThrowError();
    expect(() => {sum()}).toThrowError();
});