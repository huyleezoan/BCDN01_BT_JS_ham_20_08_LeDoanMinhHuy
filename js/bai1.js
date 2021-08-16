// Bài 1:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * diemMon1,diemMon2,diemMon3,doiTuong,khuVuc,diemChuan
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Tình điểm tổng kết:
 * diemUiTien = diemKhuVuc + diemDoiTuong
 * diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUiTien;
 * B3: Xét đậu rớt
 * Nếu diemTongKet >= diemChuan thì đậu
 * ngược lại thì rớt
 * B4: Hiển thị kết quả lên UI
 * Khối 3:
 * Xuất kết quả đậu rớt
 */
function TinhDauRot() {
  var diemChuan = parseFloat(document.getElementById('inputDiemChuan').value);
  var diemKhuVuc = parseFloat(document.getElementById('inputKhuVuc').value);
  var diemDoiTuong = parseFloat(document.getElementById('inputDoiTuong').value);
  var diemMon1 = parseFloat(document.getElementById('inputMon1').value);
  var diemMon2 = parseFloat(document.getElementById('inputMon2').value);
  var diemMon3 = parseFloat(document.getElementById('inputMon3').value);
  var diemUiTien = diemKhuVuc + diemDoiTuong;
  var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUiTien;
  var text = '';
  if (diemTongKet >= diemChuan) {
    text = 'Wow! Chúc mừng bạn đã đậu với kết quả: ' + diemTongKet;
  } else {
    text ='Bạn đã rớt. Tổng điểm: ' + diemTongKet;
  }
  document.getElementById('txtBai1').innerHTML = text;
}
document.getElementById('btnBai1').onclick = TinhDauRot;
