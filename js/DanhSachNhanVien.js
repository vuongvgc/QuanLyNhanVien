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
    
}