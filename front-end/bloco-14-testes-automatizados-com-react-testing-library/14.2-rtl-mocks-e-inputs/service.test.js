const service = require('./service');
describe('funcionamento da função',() =>{
  it('Retorna o número esperado',()=>{
    service.random = jest.fn().mockReturnValue(10);
    expect(service.random()).toBe(10)
    expect(service.random).toHaveBeenCalled()
    expect(service.random).toHaveBeenCalledTimes(1)

  })
})