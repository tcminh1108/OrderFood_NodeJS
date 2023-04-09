//Trần Công Minh
const { register } = require('../register');

describe('register()', () => {
  test('Khi không điền thông tin sẽ trả về status false', async () => {
    const req = { body: {} };
    const res = await register(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng điền đủ thông tin đăng ký!' });
  });
  test('Khi không điền số điện thoại sẽ trả về status false', async () => {
    const req = { body: {
        password : 'a12345678',
        full_name : 'Trần Công Minh',
        email : 'minhtran1108@gmail.com',
        address : '4, đường số 4, Linh Xuân, Thủ Đức'
    } };
    const res = await register(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập số điện thoại!' });
  });
  test('Khi không điền mật khẩu sẽ trả về status false', async () => {
    const req = { body: {
        phone : '0919504570',
        full_name : 'Trần Công Minh',
        email : 'minhtran1108@gmail.com',
        address : '4, đường số 4, Linh Xuân, Thủ Đức'
    } };
    const res = await register(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập mật khẩu!' });
  });
  test('Khi không điền họ tên sẽ trả về status false', async () => {
    const req = { body: {
        phone : '0919504570',
        password : 'a12345678',
        email : 'minhtran1108@gmail.com',
        address : '4, đường số 4, Linh Xuân, Thủ Đức'
    } };
    const res = await register(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập họ tên!' });
  });
  test('Khi không điền email sẽ trả về status false', async () => {
    const req = { body: {
        phone : '0919504570',
        password : 'a12345678',
        full_name : 'Trần Công Minh',
        address : '4, đường số 4, Linh Xuân, Thủ Đức'
    } };
    const res = await register(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập email!' });
  });
  test('Khi không điền địa chỉ sẽ trả về status false', async () => {
    const req = { body: {
        phone : '0919504570',
        password : 'a12345678',
        full_name : 'Trần Công Minh',
        email : 'minhtran1108@gmail.com'
    } };
    const res = await register(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập địa chỉ!' });
  });
});