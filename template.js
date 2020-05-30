$(document).ready(function () {
    class Template{
        constructor(){
            this.String=[];
        }
        Encrypt(string){//plaintext as argument
            var str=string;//str stores the string
            var result="";//result will store the final ciphertext
            for(var i=0;i<string.length;i++){
                var n=str.charCodeAt(i);//n contains the character at i_th position of plaintext
                if((n>=65 && n<=90)){//if character is in lower_case
                    var res=String.fromCharCode(155-n);//applying atbash cipher encryption
                    result=result.concat(res);//concatenating the res to the resultant string result
                }
                else if((n>=97 && n<=122)){//if character in upper_case
                    var res=String.fromCharCode(219-n);//applying atbash cipher encryption
                    result=result.concat(res);//concatenating the res to the resultant string result
                }
                else{
                    result=result.concat(str[i]);//if any character other that alphabet, concatenate it to the result as it is
                }
            }
            return result;//return the ciphertext
        }
        Decrypt(string){//argument is ciphertext
            var str=string;//str stores the ciphertext
            var result="";//result will store the final plaintext
            for(var i=0;i<string.length;i++){
                var n=str.charCodeAt(i);//n contains the character at i_th position of plaintext
                if((n>=65 && n<=90)){//if character is in lower_case
                    var res=String.fromCharCode(155-n);//applying atbash cipher encryption
                    result=result.concat(res);//concatenating the res to the resultant string result
                }
                else if((n>=97 && n<=122)){//if character in upper_case
                    var res=String.fromCharCode(219-n);//applying atbash cipher encryption
                    result=result.concat(res);//concatenating the res to the resultant string result
                }
                else{
                    result=result.concat(str[i]);//if any character other that alphabet, concatenate it to the result as it is
                }
            }
            return result;//return the plaintext
        }
    }
    var template=new Template();//creating a new object of class Translate
    $("#p_t1").keydown(function () {//clicking on plaintext area
        $("#c_t1").val("");//value at ciphertext area becomes ""
    });
    $("#c_t1").keydown(function () {//clicking on ciphertext area
        $("#p_t1").val("");//value plaintext area becomes ""
    });
    $("#encrypt1").click(function () {// on clicking encrypt button
        var p_t = $("#p_t1").val();//variable p_t contains plaintext entered
        var c_t = template.Encrypt(p_t);//variable c_t stores the final ciphertext
        $("#c_t1").val(c_t);//element c_t1 stores the final ciphertext value
    });
    $("#decrypt1").click(function () {// on clicking decrypt button
        var c_t = $("#c_t1").val();//variable c_t stores the ciphertext
        var p_t=template.Decrypt(c_t);//variable p_t stores the decrypted ciphertext
        $("#p_t1").val(p_t);//element p_t1 stores the value of final plaintext
    });
});