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
            getEl(spanID).innerHTML = message;
            getEl(spanID).style.display = "block";
            // trả về true false 
            return false
        }else{
            // nếu đúng
            // xóa thông báo lỗi và ẩn đi 
            getEl(spanID).innerHTML = " ";
            getEl(spanID).style.display = "none"
            // trả về true false 
            return true
        }
    }
}