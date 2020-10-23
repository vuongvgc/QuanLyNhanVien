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
    console.log(maNV, hoTenNV, email, password, ngaylam, chucvuNV)
    let NV = new NhanVien(maNV, hoTenNV, email, password, ngaylam, chucvuNV);
    console.log(NV)
}
let btn = getEl("btnThemNV")
btn.addEventListener("click", giveInformation)






/**
 * Func2: Lưu thông tin vào đối tượng nhân viên
 */