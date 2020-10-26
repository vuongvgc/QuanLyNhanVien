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
 * Func:Xử lý form khi thêm thông tin mới
 */
getEl("btnThem").addEventListener("click", function(){
    getEl("msnv").removeAttribute("disabled");
    getEl("formNhanVien").reset();
    // xử lý button 
    getEl("btnThemNV").style.display = "block"; 
    getEl("btnCapNhat").style.display = "none";

})
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
    // console.log(NV);
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
             <td>
                <button class="btn btn-danger" onClick=deleteNhanVien("${nv.maNV}")>Xóa</button>
                <button class="btn btn-success" onClick=updateNhanVien("${nv.maNV}") data-toggle="modal" data-target="#myModal">Cập Nhật</button>
             </td>
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
        hienThiDanhSach(DSNV.DSNV);
        
    }
    
}
/**
 *fun6: xóa nhân viên  
 * input: id onclick from button
 * out: xóa nhân viên
 */
function deleteNhanVien(id){
    // console.log(id);
    // DSNV.findId(id);
    // console.log(DSNV.findId(id));
    // let index = DSNV.DSNV.findIndex(el => el.maNV == id)
    // console.log(index)
    DSNV.deleteNV(id);
    setLocalStorage("mangNV",DSNV.DSNV);    // console.log(DSNV);
    hienThiDanhSach(DSNV.DSNV)
}
/**
 * Func7: update Nhân Viên
 * input: id
 * event: button update
 * out: update infor nhân viên
 */
function updateNhanVien(id){
    // console.log(id);
    // xử lý button 
    getEl("btnThemNV").style.display = "none"; 
    getEl("btnCapNhat").style.display = "block";
    let index = DSNV.findId(id);
    let NV;
    if(index !== -1){
        NV = DSNV.DSNV[index];
        // console.log(DSNV.DSNV[index]);
        // console.log(NV.hoTenNV)
        getEl("msnv").value = NV.maNV;
        getEl("msnv").setAttribute("disabled", true);
        getEl("name").value = NV.hoTenNV;
        getEl("email").value = NV.emailNV;
        getEl("password").value = NV.password;
        getEl("datepicker").value = NV.ngayLam;
        getEl("chucvu").value = NV.chucVuNV;

    }
    getEl("btnCapNhat").addEventListener("click", function(){
        DSNV.updateNV(giveInformation());
        setLocalStorage("mangNV",DSNV.DSNV);    // console.log(DSNV);
        hienThiDanhSach(DSNV.DSNV)
    })
}