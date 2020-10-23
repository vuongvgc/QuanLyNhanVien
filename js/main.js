/**
 * Quản Lý nhân Viên
 */
/**
 * func:rút gọn cú pháp getID
 */
function getEl(id){
    return document.getElementById(id)
}

/**
 * Func1: tạo hàm lấy thông tin từ form
 * event: sau khi click button
 */
function giveInformation(){
    let maNV = getEl("msnv").value;
    let hoTenNV = getEl("name").value;
    let email = getEl("email").value;
    let password = getEl("password").value;
    let ngaylam = getEl("datepicker").value;
    let chucvuNV = getEl("chucvu").value;
    // console.log(maNV, hoTenNV, email, password, ngaylam, chucvuNV)
    // thể hiện của đối tượng nhân viên
    let NV = new NhanVien(maNV, hoTenNV, email, password, ngaylam, chucvuNV);
    // console.log(NV);
    return NV
}

/**
 * Event click button give information
 * Lưu thông tin vào đối tượng nhân viên
 */
let DSNV = new DanhSachNhanVien();
let btn = getEl("btnThemNV")
btn.addEventListener("click", function(){
    let NV = giveInformation();
    console.log(NV)
    DSNV.addNV(NV);
    console.log(DSNV);
    hienThiDanhSach(DSNV.DSNV)
});
/**
 * Func2: hiển thị thông tin
 */
function hienThiDanhSach(DSSV) {
    let content = "";
    DSSV.map(nv => {
       content  += `
       <tr>
            <td>${nv.maNV}</td>
            <td>${nv.hoTenNV}</td>
            <td>${nv.emailNV}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVuNV}</td>
        </tr>
       ` 
    })
    getEl("tableDanhSach").innerHTML = content;
}