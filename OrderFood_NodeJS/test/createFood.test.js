//Huỳnh Hải Đăng
const { createFood } = require('../createFood');

describe('createFood()', () => {
  test('Khi không điền thông tin sẽ trả về status false', async () => {
    const req = { body: {} };
    const res = await createFood(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng điền đủ thông tin!' });
  });
  test('Khi không điền tên sản phảm sẽ trả về status false', async () => {
    const req = { body: {
        imageUrl : 'https://cdn.tgdd.vn/2021/04/CookProduct/Comchienthapcam-1200x676.jpg',
        price : 35000,
        category_name : "Cơm"
    } };
    const res = await createFood(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập tên sản phẩm!' });
  });
  test('Khi không điền link hình ảnh sẽ trả về status false', async () => {
    const req = { body: {
        name : 'Cơm chiên thập cẩm',
        price : 35000,
        category_name : "Cơm"
    } };
    const res = await createFood(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập link ảnh sản phẩm!' });
  });
  test('Khi không điền họ tên sẽ trả về status false', async () => {
    const req = { body: {
        name : 'Cơm chiên thập cẩm',
        imageUrl : 'https://cdn.tgdd.vn/2021/04/CookProduct/Comchienthapcam-1200x676.jpg',
        category_name : "Cơm"
    } };
    const res = await createFood(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập giá bán!' });
  });
  test('Khi không điền email sẽ trả về status false', async () => {
    const req = { body: {
        name : 'Cơm chiên thập cẩm',
        imageUrl : 'https://cdn.tgdd.vn/2021/04/CookProduct/Comchienthapcam-1200x676.jpg',
        price : 35000,
    } };
    const res = await createFood(req);
    expect(res).toEqual({ status: false, message: 'Vui lòng nhập tên loại sản phẩm!' });
  });
});