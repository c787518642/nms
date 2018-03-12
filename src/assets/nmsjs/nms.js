// var toFormData =  (obj)=> {
//     let FormDataStr = "";
//     for (let i of Object.keys(obj)) {
//         FormDataStr += i + "=" + obj[i] + "&"
//     }
//     return FormDataStr.slice(0, -1)
// }
"use strict";

var toFormData = function toFormData(obj) {
    var FormDataStr = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            FormDataStr += i + "=" + obj[i] + "&";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return FormDataStr.slice(0, -1);
};
