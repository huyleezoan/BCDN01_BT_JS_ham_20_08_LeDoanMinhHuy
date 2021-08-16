// Bài 4:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * loaiKhachHang, maKhachHang, soKenhCaoCap, soKetNoi
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * # Với loaiKhachHang la nhaDan thì:
 * tienCap = phiXuLyHoaDon + phiDVCoBan + soKenhCaoCap*phiThueKhenhCC;
 * # Voi loaiKhachHang la doanhNghiep thì:
 * nếu soKetNoi <=10 thì
 *      phiDVCoBan = 75;
 * ngược lại thì
 *      phiDVCoBan = 75 + (soKetNoi -10)*5;
 * tienCap = phiXuLyHoaDon + phiDVCoBan + soKenhCaoCap*50;
 */
function LuaChonKH() {
  var loaiKhachHang = document.getElementById('loaiKhachHang').value;
  if (loaiKhachHang == 'doanhNghiep')
    document.getElementById('divKetNoi').style.cssText = 'display:block';
  else {
    document.getElementById('divKetNoi').style.cssText = 'display:none  ';
  }
  return loaiKhachHang;
}
function TinhTienCap() {
  var loaiKhachHang = LuaChonKH();
  var maKhangHang = document.getElementById('inputMaKH').value;
  var soKenhCaoCap = parseInt(document.getElementById('inputKenhCC').value);
  var soKetNoi = parseInt(document.getElementById('inputSoKetNoi').value);
  var phiXuLyHoaDon, phiDVCoBan, phiThueKhenhCC;
  phiXuLyHoaDon = phiDVCoBan = phiThueKhenhCC = 0;
  if (loaiKhachHang == 'nhaDan') {
    phiXuLyHoaDon = 4.5;
    phiDVCoBan = 20.5;
    phiThueKhenhCC = 7.5;
  } else {
    phiXuLyHoaDon = 15;
    if (soKetNoi <= 10) {
      phiDVCoBan = 75;
    } else {
      phiDVCoBan = 75 + (soKetNoi - 10) * 5;
    }
    phiThueKhenhCC = 50;
  }
  var tienCap = phiXuLyHoaDon + phiDVCoBan + phiThueKhenhCC * soKenhCaoCap;
  document.getElementById('txtBai4').innerHTML =
    'Mã khác hàng: ' + maKhangHang + '<br>Tiền cáp: ' + tienCap.toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
}
document.getElementById('btnBai4').onclick = TinhTienCap;
document.getElementById('loaiKhachHang').onclick = LuaChonKH;
