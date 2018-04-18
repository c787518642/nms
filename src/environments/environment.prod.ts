/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  getPath: () => {
    if (location.protocol == "https:") {
      return "https://172.100.30.163:8478"
    }
    else {
      return "http://172.100.30.163:8079"
    }
  },
  error: (status) => { if (status == 302) { location.href = "./" }  else { alert("异常错误") } }
};
