
import React from 'react';
import {getAge } from '../src/functions/getAgeFromDate'

//const ageFunc = require('../src/app/functions/getAgeFromDate');

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
  });


  describe('get age', ()=>{
     // console.log('ok',getAge);
      it('should return 28', ()=>{
          let dateOfbird = new  Date(1991,6, 14);;
          expect(getAge(dateOfbird)).toBe(28);
      })
  });


  describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });