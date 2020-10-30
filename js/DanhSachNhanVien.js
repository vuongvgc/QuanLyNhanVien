/**
 * Danh sách nhân viên
 */
function DanhSachNhanVien(){
    this.DSNV  = [],
    this.addNV = function(NV){
        this.DSNV.push(NV)
    }
    this.findId = function(id) {
       return this.DSNV.findIndex(el => el.maNV == id);
    }
    this.deleteNV = function(id){
        this.DSNV.splice(this.findId(id), 1)
    }
    this.updateNV = function(nv){
        let index = this.findId(nv.maNV);
        if(index != -1){
            this.DSNV[index] = nv
        }
    }
}
/**
 * Giải lập trường hợp: 
 * Khách hàng đang có sẵn 
 * không nên thêm vào dễ gây lỗi hư hệ thống
 * nên vậy ta sử dụng prototype để "TRỪU TƯỢNG" lớp đối tượng
 */
/**
 * Protype: chứa toàn bộ 
 * thuộc tính và  phương thức của đối tượng
 * sử dụng prototype ta có thể thêm thuộc tính và phương thức
 * của lớp đối tượng mà không sữa trực tiếp trong lớp đối tượng
 */
DanhSachNhanVien.prototype.searchNhanVien = function(keywords){
    // mảng kết quả tìm kiếm
    let mangKQ = [];
    this.DSNV.map((item,index) => {
        keywords = keywords.toLowerCase();
        hoTenNV = item.hoTenNV.toLowerCase();
        // sử dụng index để trả về vị trí đầu tiên của keywords trong chuổi 
        if(hoTenNV.indexOf(keywords) != -1){
            mangKQ.push(item);
        }else {
            console.log("không tìm được");
        }
    })
    console.log(mangKQ);
    return mangKQ;
}