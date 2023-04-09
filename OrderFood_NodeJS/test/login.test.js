// Phùng Xuân Đoan
const { login } = require('../login');

describe('login()', () => {
  test('Khi không điền thông tin sẽ trả về status false', async () => {
    const req = { body: {} };
    const res = await login(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng điền đủ thông tin đăng nhập!' });
  });
  test('Khi không điền số điện thoại sẽ trả về status false', async () => {
    const req = { body: { password : 'a12345678'} };
    const res = await login(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập số điện thoại!' });
  });
  test('Khi không điền mật khẩu sẽ trả về status false', async () => {
    const req = { body: { phone : '0977234014' } };
    const res = await login(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập mật khẩu!' });
  });
});