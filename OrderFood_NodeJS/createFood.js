async function createFood(req, res) {
    const {name, imageUrl, price, category_name} = req.body;
    // kiểm tra xem thông tin đầu vào có hợp lệ không
    if (!name && !imageUrl && !price && !category_name) {
        return { status: false, message: 'Vui lòng điền đủ thông tin!' };
    }
    if (!name) {
        return { status: false, message: 'Vui lòng nhập tên sản phẩm!' };
    }
    if (!imageUrl) {
        return { status: false, message: 'Vui lòng nhập link ảnh sản phẩm!' };
    }
    if (!price) {
        return { status: false, message: 'Vui lòng nhập giá bán!' };
    }
    if (!category_name) {
        return { status: false, message: 'Vui lòng nhập tên loại sản phẩm!' };
    }
}

module.exports = { createFood };