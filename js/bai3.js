// Bài 3:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * tenCaNhan, tongThuNhapNam, soNgPhuThuoc
 * Khối 2:
 * B1: Tạo biến và lấy giá tị từ form
 * B2: Tính thu nhập chịu thuế:
 * thuNhapChiuThue = tongThuNhapNam - 4000000 - soNgPhuThuoc * 1600000;
 * B3: Tính thuế:
 * nếu thuNhapChiuThue <= 0 thì in "người ta nhập sai"
 * ngược lại nếu thuNhapChiuThue <= 60 thì
 *      tienThue = thuNhapChiuThue*0.05;
 * ngược lại nếu thuNhapChiuThue <= 120 thì
 *      tienThue = thuNhapChiuThue*0.1;
 * ngược lại nếu thuNhapChiuThue <= 210 thì
 *      tienThue = thuNhapChiuThue*0.15;
 * ngược lại nếu thuNhapChiuThue <= 384 thì
 *      tienThue = thuNhapChiuThue*0.2;
 * ngược lại nếu thuNhapChiuThue <= 624 thì
 *      tienThue = thuNhapChiuThue*0.25;
 * ngược lại nếu thuNhapChiuThue <= 960 thì
 *      tienThue = thuNhapChiuThue*0.3;
 * ngược lại thì
 *      tienThue = thuNhapChiuThue*0.35;
 * B4: Xuất kết quả lên UI
 * Khối 3:
 * Tính thuế thu nhập cá nhân
 */
function TinhThueThuNhapCaNhan() {
  const trieu = 1000000;
  var ten = document.getElementById('inputTenBai3').value;
  var tongThuNhapNam = parseFloat(
    document.getElementById('inputTongThuNhapNam').value
  );
  var soNgPhuThuoc = parseInt(
    document.getElementById('inputSoNgPhuThuoc').value
  );
  var thuNhapChiuThue = tongThuNhapNam - 4 * trieu - soNgPhuThuoc * 1.6 * trieu;
  var tienThue = 0;
  if (thuNhapChiuThue <= 0) {
    tienThue = 0;
  } else if (thuNhapChiuThue <= 60 * trieu) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120 * trieu) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210 * trieu) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384 * trieu) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624 * trieu) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960 * trieu) {
    tienThue = thuNhapChiuThue * 0.3;
  } else {
    tienThue = thuNhapChiuThue * 0.35;
  }
  var text = '';
  var formatTienThue = String(tienThue);
  formatTienThue = formatTienThue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (tienThue == 0) {
    alert('Bạn đã nhập sai. Xin vui lòng nhập lại!');
  } else {
    text =
      'Tên cá nhân: ' + ten + '<br> Tiền thuế : ' + formatTienThue + ' VND';
  }
  document.getElementById('txtBai3').innerHTML = text;
}
document.getElementById('btnBai3').onclick = TinhThueThuNhapCaNhan;
