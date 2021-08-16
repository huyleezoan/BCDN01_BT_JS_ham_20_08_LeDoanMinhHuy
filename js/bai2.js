// Bài 2:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * tenKhachHang, soKW
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Tính tiền điện:
 * nếu soKW <=0 thì:
 *      tienDien = 0;
 * ngược lại nếu soKW <= 50 thì:
 *      tienDien = soKW * 500;
 * ngược lại nếu soKW <= 100 thì:
 *      tienDien = 50* 500 + (soKW - 50)*650;
 * ngược lại nếu soKW <= 200 thì:
 *      tienDien = 50*500 + 50*650 + (soKW - 100)*850;
 * ngược lại nếu soKW <= 350 thì:
 *      tienDien = 50*500 + 50*650 + 100*850 + (soKw - 200)*1100;
 * ngược lại thì:
 *      tienDien = 50*500 + 50*650 + 100*850 + 200*1100 + (soKW - 350)*1300;
 * nếu tienDien bằng 0 thì thông báo người dùng nhập sai
 * ngược lại thì tính tiền điện cho khách hàng
 * B3: Hiển thị kết quả lên UI
 * Khối 3:
 * Tính tiền điện
 */
function formatCash(str) {
  return str
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev;
    });
}
function TinhTienDien() {
  var tenKhachHang = document.getElementById('inputTenBai2').value;
  var soKW = parseFloat(document.getElementById('inputSoKW').value);
  var tienDien = 0;
  if (soKW <= 0) {
    tienDien = 0;
  } else if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW <= 100) {
    tienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  }
  var text = '';
  var formatTienDien = String(tienDien);
  formatTienDien = formatTienDien.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (tienDien == 0) {
    alert('Bạn đã nhập sai. Vui lòng nhập lại!');
  } else {
    text =
      'Tên chủ hộ: ' +
      tenKhachHang +
      '<br> Tiền điện tháng này là: ' +
      formatTienDien;
  }
  document.getElementById('txtBai2').innerHTML = text;
}
document.getElementById('btnBai2').onclick = TinhTienDien;
