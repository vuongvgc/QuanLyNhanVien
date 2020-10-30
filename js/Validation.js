/**
 * Create class Validation to check data form
 */
function ValidationCheckForm (){
    /**
     * Kiểm tra rổng
     * input: {dữ liệu từ input id} value 
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message  
     * output: Boolean
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
    /**
     * Kiểm tra mã nhân viên có bị trùng không ?
     * input: {dữ liệu từ input id} value 
     * input: {mãng nhân viên} mangNV 
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message  
     * output: Boolean
     */
    this.isIdSame = function(value, mangNV, spanID, message){
        let result = mangNV.some((el) => 
            el.maNV == value)
        // console.log(result);
        if(result === true){
            // mảng bị trùng 
            getEl(spanID).innerHTML = message;
            getEl(spanID).style.display = "block";
            return false
        }else {
            getEl(spanID).innerHTML = " ";
            getEl(spanID).style.display = "none"
            return true
        }
    }
    /**
     * Kiểm tra tên
     * input: {dữ liệu từ input id} value 
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message  
     * output: Boolean
     */
    this.isNameHaveNumber = function(value, spanID,message) {
        // let regex = new RegExp("([0-9A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ']+\\s?\\b){2,}");
        var regex = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
              "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
              "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
          );
        console.log(regex.test(value))
        console.log(value);
        if(regex.test(value)){
            // nếu sai
            // thông báo lỗi và hiển thị 
            getEl(spanID).innerHTML = " ";
            getEl(spanID).style.display = "none"
            // trả về true false 
            return true
        }else{
            // nếu đúng
            // xóa thông báo lỗi và ẩn đi 
            getEl(spanID).innerHTML = message;
            getEl(spanID).style.display = "block";
            // trả về true false 
            return false
        }
    }
    /**
     * Kiểm tra Email
     * input: {dữ liệu từ input id} value 
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message  
     * output: Boolean
     */
    this.checkEmail = function(value, spanID, message){
        console.log(message);
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(value.match(regex)){
            getEl(spanID).innerHTML = " ";
            getEl(spanID).style.display = "none";
            return true
        }else {
            getEl(spanID).innerHTML = message ;
            getEl(spanID).style.display = "block"
            return false;
        }
    }
    /**
     * Kiểm tra độ dài password
     * input: {dữ liệu từ input id} value 
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message
     * input: min max  
     * output: Boolean
     */
    this.checkPassword = function(value, spanID, message, min, max){
        if(value.length >= min && value.length <= max){
            getEl(spanID).innerHTML = " ";
            getEl(spanID).style.display = "none";
            return true
        }else {
            getEl(spanID).innerHTML = message ;
            getEl(spanID).style.display = "block"
            return false;
        }
    }
    /**
     * Kiểm tra độ dài password
     * input: lấy id để check index của option
     * input: {id thông báo} spanID  
     * input: {tin nhắn thông báo} message
     * input: min max  
     * output: Boolean
     * description: không so sánh cụm từ vì dễ bị đổi.  nên sử dụng SelectedID để lấy index nếu index lớn hơn 0 thì đúng
     */
    this.checkChucVu = function(selectID, spanID, message){
        if(getEl(selectID).selectedIndex != 0){
            getEl(spanID).innerHTML = " ";
            getEl(spanID).style.display = "none";
            return true
        }else {
            getEl(spanID).innerHTML = message ;
            getEl(spanID).style.display = "block"
            return false;
        }
    }
}