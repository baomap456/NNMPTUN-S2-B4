function slugHandler(str) {
  if (!str) return '';
  
  // 1. Chuyển về chữ thường
  str = str.toLowerCase();

  // 2. Xóa dấu Tiếng Việt (Normalize NFD và xóa các ký tự combine)
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 3. Xử lý chữ Đ/đ riêng (vì normalize không xử lý triệt để chữ đ)
  str = str.replace(/[đĐ]/g, "d");

  // 4. Xóa các ký tự đặc biệt, chỉ giữ lại chữ, số và khoảng trắng
  // Ví dụ: "iPhone 15 Pro Max!!!" -> "iphone 15 pro max"
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // 5. Thay khoảng trắng bằng dấu gạch ngang
  str = str.replace(/(\s+)/g, "-");

  // 6. Xóa gạch ngang ở đầu và cuối chuỗi (nếu có)
  str = str.replace(/^-+|-+$/g, "");

  return str;
}

module.export = 
{
    slugHandler
}