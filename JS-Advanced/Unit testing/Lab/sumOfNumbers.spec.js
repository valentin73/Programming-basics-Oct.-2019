import { sum } from './sumOfNumbers';
import { expect } from 'chai';

describe('sum tests', function(){
    it('should return NaN when the arg is a string', function (){
        const arg = 'test';
        const result = sum(arg);
        expect(result).to.be.NaN;
    })


})
