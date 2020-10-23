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
 * func2: Lưu thông tin vào đối tượng nhân viên
 * Event click button give information
 */
let DSNV = new DanhSachNhanVien();
getLocalStorage();
let btnAdd = getEl("btnThemNV")
btnAdd.addEventListener("click", function(){
    let NV = giveInformation();
    console.log(NV)
    DSNV.addNV(NV);
    setLocalStorage("mangNV",DSNV.DSNV);    // console.log(DSNV);
    hienThiDanhSach(DSNV.DSNV)
});
/**
 * Func3: hiển thị thông tin nhân viên trên table
 * in: mảng DSNV
 * out: hiển thị trên table
 */
function hienThiDanhSach(DSNV) {
    let content = "";
    DSNV.map(nv => {
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
/**
 *fun4: Lưu danh sách xuống localstorage
 * input:keyname, arr
 * out: save in local storage JSON
 */
function setLocalStorage(keyName, arr){
    localStorage.setItem(keyName, JSON.stringify(arr))
}
/**
 *fun5: Lấy danh sách từ localstorage 
 * input: JSON
 * out: Arr
 * method
 */
function getLocalStorage(){
    if(localStorage.getItem("mangNV") !== null){
        let ds = JSON.parse(localStorage.getItem("mangNV"))
        DSNV.DSNV = ds;
        hienThiDanhSach(DSNV.DSNV)
    }
    
}