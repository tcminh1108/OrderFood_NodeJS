async function login(req, res) {
    const {phone, password} = req.body;
    // kiểm tra xem thông tin đăng nhập có hợp lệ không
    if (!phone && !password) {
        return { status: false, message: 'Vui lòng điền đủ thông tin đăng nhập!' };
    }
    if (!phone) {
        return { status: false, message: 'Vui lòng nhập số điện thoại!' };
    }
    if (!password) {
        return { status: false, message: 'Vui lòng nhập mật khẩu!' };
    }
}s

module.exports = { login };