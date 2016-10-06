/**
 * Created by JOYyuan on 16/6/10.
 */
$(document).ready(function(){
    solidChange();

});
function solidChange(){
    $('input').focus(
        function(){
            $(this).css('border-bottom','0.055rem solid #b7b7b7');
        }).blur(
        function(){
            $(this).css('border-bottom','0.11rem solid #ccc');
        });
}
