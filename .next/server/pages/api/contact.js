"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const { name, email, company, message } = req.body;
    if (!name || !email || !company || !message) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbx0ShDr7rJ4hgOXbEie4xruUZgGlKSMntcErJZTL3dDgX-ekQ3prNlWxGRzKF8m1ZLh/exec", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                company,
                message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        if (result.status === "success") {
            return res.status(200).json({
                message: "Contact saved successfully"
            });
        } else {
            throw new Error("Failed to save contact");
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(777));
module.exports = __webpack_exports__;

})();