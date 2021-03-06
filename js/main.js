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
    // xử lý kiểm tra thông tin 
    let isValid = true;
    let validationCheckForm = new ValidationCheckForm();
    // debugger;
    // kiểm tra mã nhân viên : nhân viên không được rỗng và trùng 
    isValid &= validationCheckForm.isFill(NV.maNV,"tbMaNV", "Không được để trống" ) && validationCheckForm.isIdSame(NV.maNV, DSNV.DSNV,"tbMaNV", "mã  nhân viên bị trùng")    
    // isValid mới   = isValid cũ & validationCheckForm
    // kiểm tra tên 
    isValid &= validationCheckForm.isFill(NV.hoTenNV,"tbTen", "Không được để trống" )  && validationCheckForm.isNameHaveNumber(NV.hoTenNV,"tbTen", "Tên không được chứa số" ) 
    // kiểm tra email
    isValid &= validationCheckForm.isFill(NV.emailNV,"tbEmail", "Không được để trống" ) && validationCheckForm.checkEmail(NV.emailNV, "tbEmail", "Email không hợp lệ:")
    // kiểm tra password 
    isValid &= validationCheckForm.isFill(NV.password,"tbMatKhau", "Không được để trống" ) && validationCheckForm.checkPassword(NV.password, "tbMatKhau", "PassWord không hợp lệ", 6, 8)
    // kiểm tra ngày làm 
    isValid &= validationCheckForm.isFill(NV.ngayLam,"tbNgay", "Không được để trống" ) 
    // kiểm tra chức vụ 
    isValid &= validationCheckForm.checkChucVu("chucvu","tbChucVu", "Không được để trống")  
    // tất cả thông tin nhân viên đều hợp lệ 
    console.log(isValid)
    if(isValid == true) {
        DSNV.addNV(NV);
        setLocalStorage("mangNV",DSNV.DSNV);    // console.log(DSNV);
        hienThiDanhSach(DSNV.DSNV);
        getEl("formNhanVien").reset();
    }
    
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
    // xóa nhân viên 
    DSNV.deleteNV(id);
    // lưu trử lại
    setLocalStorage("mangNV",DSNV.DSNV);    // console.log(DSNV);
    // hiển thị lại 
    hienThiDanhSach(DSNV.DSNV)
}

/**
 * Func7: update Nhân Viên
 * event: click button update
 * input: id
 * out: update information nhân viên
 */
function updateNhanVien(id){
    // console.log(id);
    // xử lý button 
    getEl("btnThemNV").style.display = "none"; 
    getEl("btnCapNhat").style.display = "block";
    let index = DSNV.findId(id);
    let NV;
    // hiển thị thông tin lên modal 
    if(index !== -1){
        NV = DSNV.DSNV[index];
        // console.log(DSNV.DSNV[index]);
        getEl("msnv").value = NV.maNV;
        getEl("msnv").setAttribute("disabled", true);
        getEl("name").value = NV.hoTenNV;
        getEl("email").value = NV.emailNV;
        getEl("password").value = NV.password;
        getEl("datepicker").value = NV.ngayLam;
        getEl("chucvu").value = NV.chucVuNV;

    }
    // cập nhật thông tin 
    getEl("btnCapNhat").addEventListener("click", function(){
        // cập nhât 
        DSNV.updateNV(giveInformation());
        // lưu lại 
        setLocalStorage("mangNV",DSNV.DSNV);
        // hiển thị lại     
        hienThiDanhSach(DSNV.DSNV)
    })
}
/**
 * Func8: search Nhân Viên : 
 * event: click button search
 * input: id
 * out: update information nhân viên
 */
getEl("btnTimNV").addEventListener("click", function(){
    let keySearch = getEl("searchName").value.trim();
    // console.log(keySearch);
    if(keySearch != ""){
        let SearchDSNV = DSNV.searchNhanVien(keySearch);
        hienThiDanhSach(SearchDSNV)
    }else {
        hienThiDanhSach(DSNV.DSNV)
    }
})

// thử sử dụng replace xóa khoảng cách trước vào sau của chuổi nếu từ khóa có khoảng cách ở giữa

/**
 * Func8: search Nhân Viên : 
 * event: change input search
 * input: id
 * out: update information nhân viên
 */
// keyup: đè xong dỡ ra
// keydown: đè xong 
getEl("searchName").addEventListener("keyup", function(){
    let keySearch = getEl("searchName").value.trim();
    // console.log(keySearch);
    let SearchDSNV = DSNV.searchNhanVien(keySearch);
    hienThiDanhSach(SearchDSNV);
})
