"use strict";(self["webpackChunkqian_yue_web"]=self["webpackChunkqian_yue_web"]||[]).push([[99],{99:function(a,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(252);function i(a,e,n,i,t,s){const o=(0,r.up)("Accordion");return(0,r.wg)(),(0,r.j4)(o,{data:t.data,prefix:t.prefix},null,8,["data","prefix"])}var t=n(577);const s={class:"accordion",id:"accordionExample"},o=["id"],c=["onClick","data-bs-target","aria-controls"],d=["id","aria-labelledby"],p={class:"accordion-body"},m={class:"table table-dark"},l=(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"#"),(0,r._)("th",{scope:"col"},"指令名稱"),(0,r._)("th",{scope:"col"},"指令描述"),(0,r._)("th",{scope:"col"},"指令參數")],-1),u={scope:"row"},g={key:0},b={key:1};function _(a,e,n,i,_,k){return(0,r.wg)(),(0,r.iD)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data,((a,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"accordion-item",key:e},[(0,r._)("h2",{class:"accordion-header",id:"log"+a.version},[(0,r._)("button",{onClick:e=>a.closed=!a.closed,class:(0,t.C_)(["accordion-button",{collapsed:a.closed}]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#log"+e,"aria-expanded":"true","aria-controls":"log"+e},(0,t.zw)(a.name),11,c)],8,o),(0,r._)("div",{id:"log"+e,class:(0,t.C_)(["accordion-collapse collapse",{collapsed:!a.closed}]),"aria-labelledby":"log"+a.version,"data-bs-parent":"#accordionExample"},[(0,r._)("div",p,[(0,r._)("table",m,[(0,r._)("thead",null,[(0,r._)("h2",null,(0,t.zw)(a.name),1),l]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.data,((a,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[(0,r._)("td",u,(0,t.zw)(e+1),1),(0,r._)("td",null,(0,t.zw)(n.prefix+a.name),1),(0,r._)("td",null,(0,t.zw)(a.description),1),a.params?((0,r.wg)(),(0,r.iD)("td",g,(0,t.zw)(a.params),1)):((0,r.wg)(),(0,r.iD)("td",b,"無"))])))),128))])])])],10,d)])))),128))])}var k={name:"Accordion",props:{prefix:{type:String,default:"/"},data:{type:Array}}},w=n(789);const E=(0,w.Z)(k,[["render",_]]);var f=E,M=JSON.parse('[{"name":"一般指令","closed":true,"data":[{"name":"help","description":"查看機器人指令表","params":"[類別: String]"},{"name":"info","description":"查看機器人資訊","params":"[成員: MEMBER] [原因: String]"},{"name":"say","description":"讓機器人說話","params":"[內容: String]"},{"name":"embed","description":"發送嵌入訊息","params":"[標題: String] [內容: String]"},{"name":"ps","description":"發送嵌入圖片訊息","params":"[圖片網址: String] [標題: String] [內容: String]"},{"name":"line","description":"分隔線","params":""},{"name":"poll","description":"投票是或否","params":"[內容: MEMBER]"}]},{"name":"查詢指令","closed":true,"data":[{"name":"guild","description":"查看群組資訊","params":""},{"name":"user","description":"查看用戶資訊","params":"[user: MEMBER]"},{"name":"avatar","description":"查看用戶頭像","params":"[user: MEMBER]"},{"name":"invite","description":"得到機器人的邀請網址","params":"[Bot: BOT]"},{"name":"skin","description":"查看minecraft皮膚","params":"[name: String]"},{"name":"mcprofile","description":"查看minecraft資料","params":"[name: String]"},{"name":"server","description":"查看Minecraft伺服器狀態圖","params":"[ip: String]"}]},{"name":"管理指令","closed":true,"data":[{"name":"setc","description":"創建指令頻道","params":""},{"name":"sets","description":"創建建議頻道","params":""},{"name":"sgic","description":"一個自動更新的伺服器資訊","params":"[頻道: TextChannel]"},{"name":"clear","description":"刪除訊息","params":"[數量: int] [user: MEMBER] "},{"name":"kick","description":"Kick","params":"[user: MEMBER] [reason: String]"},{"name":"ban","description":"BAN","params":"[user/id: int] [reason: String]"},{"name":"unban","description":"Unban","params":"[id: int]"},{"name":"nick","description":"更改暱稱","params":"[user: MEMBER] [nick: String]"},{"name":"slowmode","description":"慢速模式","params":"[秒: int]"},{"name":"lock","description":"鎖定頻道","params":""},{"name":"unlock","description":"解除鎖定頻道","params":""}]},{"name":"娛樂指令","closed":true,"data":[{"name":"nitro","description":"Nitro產生","params":""},{"name":"htg","description":"Google教學","params":"[文字: String]"},{"name":"color","description":"隨機顏色產生","params":""}]},{"name":"其他指令","closed":true,"data":[{"name":"","description":"","params":"[內容: MEMBER]"}]},{"name":"查詢指令","closed":true,"data":[{"name":"","description":"","params":"[內容: MEMBER]"}]},{"name":"音樂指令","closed":true,"data":[{"name":"play","description":"撥放音樂","params":"[曲目: String]"},{"name":"skip","description":"跳過音樂需要投票","params":""},{"name":"stop","description":"停止播放","params":""}]}]'),S={components:{Accordion:f},data(){return{prefix:"/",data:M}}};const y=(0,w.Z)(S,[["render",i]]);var h=y}}]);
//# sourceMappingURL=99.b3f26cdc.js.map