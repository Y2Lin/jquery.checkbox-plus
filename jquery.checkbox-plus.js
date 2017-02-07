// 定义checkbox的三种状态 为选中 1 不选中 0 半选 -1
+function ($) {
  'use strict';
  // 取值
  var getCheckboxStatus = function () {
    var $this = $(this);
    var checked = $this.prop("checked");
    var indeterminate = $this.prop("indeterminate");
    var result = 0;
    if (indeterminate === true) {
      result = -1;
    } else if (checked === true) {
      result = 1;
    }
    return result
  }
  // 设置
  var setCheckboxStatus = function (value) {
    var $this = $(this);
    value = value + '';
    var checked = false;
    var indeterminate = false;
    if (value === '1') {
      checked = true;
      indeterminate = false;
    } else if (value === '0') {
      checked = false;
      indeterminate = false;
    } else if (value === '-1') {
      checked = false;
      indeterminate = true;
    }
    $this.prop('checked', checked).prop('indeterminate', indeterminate);
  }
  $.fn.getCheckboxStatus = getCheckboxStatus;
  $.fn.setCheckboxStatus = setCheckboxStatus;
}(jQuery);
