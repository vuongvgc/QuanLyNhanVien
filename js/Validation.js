/**
 * Create class Validation to check data form
 */
function ValidationCheckForm (){
    /**
     * Kiểm tra rổng
     * @param {dữ liệu từ inpit} value 
     * @param {tbMaNV} spanID 
     * @param {thông báo lỗi} message 
     */
    this.isFill = function(value, spanID,message) {
        if(value == ""){
            // nếu sai
            // thông báo lỗi và hiển thị 
            getEl(spanID).innerHTML = message;
            getEl(spanID).style.display = "block";
            // trả về true false 
            return false
        }else {
            // nếu đúng
            // xóa thông báo lỗi và ẩn đi 
            getEl(spanID).innerHTML = " ";
            getEl(spanID).style.display = "none"
            // trả về true false 
            return true
        }
    }
}