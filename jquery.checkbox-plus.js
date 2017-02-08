// 定义checkbox的三种状态 为选中 1 不选中 0 半选 -1
+function ($) {
  'use strict';
  // 取值
  var getCheckboxStatus = function () {
    var $this = $(this);
    var checked = $this.prop("checked");
    var indeterminate = $this.prop("indeterminate");
    var result = 0;
    switch (true) {
      case ((indeterminate == true) && (checked === true)):
        result = -1;
        break;
      case ((indeterminate == true) && (checked === false)):
        result = -1;
        break;
      case ((indeterminate == false) && (checked === false)):
        result = 0;
        break;
      case ((indeterminate == false) && (checked === true)):
        result = 1;
        break;
      default:
        break;
    }
    return result
  }
  // 设置
  var setCheckboxStatus = function (value) {
    var $this = $(this);
    value = value + '';
    var checked = false;
    var indeterminate = false;
    switch (value) {
      case '1':
        checked = true;
        indeterminate = false;
        break;
      case '0':
        checked = false;
        indeterminate = false;
        break;
      case '-1':
        checked = false;
        indeterminate = true;
        break;
      default:
        break;
    }
    $this.prop('checked', checked).prop('indeterminate', indeterminate);
  }
  $.fn.getCheckboxStatus = getCheckboxStatus;
  $.fn.setCheckboxStatus = setCheckboxStatus;
}(jQuery);
