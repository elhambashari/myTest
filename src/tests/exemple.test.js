
import { sum, multi, login,combin ,stor, sub} from '../exemple.js';

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
	expect((sub(10,6)).toBe(4));
});