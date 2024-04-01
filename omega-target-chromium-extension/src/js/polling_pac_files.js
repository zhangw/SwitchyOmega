LongPollingPacFiles = (function(){
  var OmegaTarget = require('omega-target');
  return LongPollingPacFiles;
  function LongPollingPacFiles(){
    fetch("http://localhost:9991/poll/v2rayU/pac/proxy.js")
    .then(function(response){
      if(!response.ok){
        throw new Error("Polling failed: " + response.statusText);
      }
      return response.text();
    }).then(function(data){ 
      console.log("Polling data:", data);
      // 更新PAC配置
      window.OmegaOptions.updateProfile(null, true);
      console.log("PAC configuration updated.");
      // 继续长轮询
      setTimeout(LongPollingPacFiles, 2500);
    }).catch(function(error){
      console.error("Polling error:", error);
      // 可选：在一段时间后重试
      // 10秒后重试
      setTimeout(LongPollingPacFiles, 10000);
    });
  }
})();
LongPollingPacFiles();