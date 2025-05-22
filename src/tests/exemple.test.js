
import { sum, multi, login,combin ,stor, sub, div,storTal,sumAll} from '../exemple.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multi c*d', () => {
  expect(multi(5, 20)).toBe(100);
});

test('login works', () => {
  expect(login('elham', '12345')).toEqual({ namn: 'elham', lösenord: '12345' });
});

test('combin a+b',()=>{
	expect(combin('elham','bashari')).toBe('elhambashari');
});

test('sting kan be stor bokstav',()=>{
	expect(stor('elham')).toBe('ELHAM');
});

test('skilnad mellan x och y',()=>
{
	expect(sub(10, 6)).toBe(4);

});

test('dividerar mellan två tal',()=>{
	expect(div(80,8)).toBe(10);
})



test('det störtsta tal i en array',()=>{
	expect(storTal([1,2,3,5,7,8,9])).toBe(9);
})


test('summa alla tal i en array',()=>{
	expect(sumAll([1,2,3,4,5,])).toBe(15)
})