async function register(req, res) {
    const {phone, password, full_name, email, address} = req.body;
    // kiểm tra xem thông tin đăng ký có hợp lệ không
    if (!phone && !password && !full_name && !email && !address) {
        return { status: false, message: 'Vui lòng điền đủ thông tin đăng ký!' };
    }
    if (!phone) {
        return { status: false, message: 'Vui lòng nhập số điện thoại!' };
    }
    if (!password) {
        return { status: false, message: 'Vui lòng nhập mật khẩu!' };
    }
    if (!full_name) {
        return { status: false, message: 'Vui lòng nhập họ tên!' };
    }
    if (!email) {
        return { status: false, message: 'Vui lòng nhập email!' };
    }
    if (!address) {
        return { status: false, message: 'Vui lòng nhập địa chỉ!' };
    }
}

module.exports = { register };