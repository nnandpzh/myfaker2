/*
活动名称：店铺关注有礼
活动链接：店铺首页关注按钮
环境变量：jd_drawShopGift_argv // 活动参数，支持四种格式：”<shopId(店铺id)>_<venderId(店主id)>“ 或 ”<venderId(店主id)>“ 或 ”<shopId(店铺id)>“ 或 ”<活动店铺首页链接>“
        jd_drawShopGift_threads // 控制并发线程数（正整数），默认1
        jd_drawShopGift_interval // 自定义运行间隔时长（整数，单位毫秒），默认1000
        jd_drawShopGift_notify // 是否推送通知（true/false），默认不推送

高并发脚本，黑号领不到奖品
活动限制IP严重，建议使用代理，谨慎使用并发

7 7 7 7 *

*/

const $ = new Env('店铺关注有礼')
const jdCookie = require('./jdCookie')
const notify = require('./function/sendJDNotify')
const common = require('./function/jdCommon')

var iｉl='jsjiami.com.v7';const lI1i1Ii1=iil1l1i1;(function(lIiiiiI,IIlilIIi,IiiiIlll,l1iI1Iil,i1i1i1li,ilIl1l1l,illll11){return lIiiiiI=lIiiiiI>>0x3,ilIl1l1l='hs',illll11='hs',function(i1iiIIIi,IlliiiI1,lIlIi1il,llli1Ili,II1llili){const l1i11iIl=iil1l1i1;llli1Ili='tfi',ilIl1l1l=llli1Ili+ilIl1l1l,II1llili='up',illll11+=II1llili,ilIl1l1l=lIlIi1il(ilIl1l1l),illll11=lIlIi1il(illll11),lIlIi1il=0x0;const lii11I1i=i1iiIIIi();while(!![]&&--l1iI1Iil+IlliiiI1){try{llli1Ili=-parseInt(l1i11iIl(0x228,'35EC'))/0x1*(parseInt(l1i11iIl(0x28d,'xY1*'))/0x2)+-parseInt(l1i11iIl(0x22b,'oro!'))/0x3+-parseInt(l1i11iIl(0x276,'XR69'))/0x4+-parseInt(l1i11iIl(0x246,'(HOP'))/0x5*(-parseInt(l1i11iIl(0x395,'hKX@'))/0x6)+-parseInt(l1i11iIl(0x27c,'KgSG'))/0x7+parseInt(l1i11iIl(0x26f,'Fa#L'))/0x8+parseInt(l1i11iIl(0x302,'X$*2'))/0x9;}catch(IIiiil1l){llli1Ili=lIlIi1il;}finally{II1llili=lii11I1i[ilIl1l1l]();if(lIiiiiI<=l1iI1Iil)lIlIi1il?i1i1i1li?llli1Ili=II1llili:i1i1i1li=II1llili:lIlIi1il=II1llili;else{if(lIlIi1il==i1i1i1li['replace'](/[FGwTJdnUCBWkyVYpxg=]/g,'')){if(llli1Ili===IlliiiI1){lii11I1i['un'+ilIl1l1l](II1llili);break;}lii11I1i[illll11](II1llili);}}}}}(IiiiIlll,IIlilIIi,function(iili1lli,li1iI1iI,l1111li1,l1lI1li1,I1I1iII,l1IiIIiI,iIiIiiil){return li1iI1iI='\x73\x70\x6c\x69\x74',iili1lli=arguments[0x0],iili1lli=iili1lli[li1iI1iI](''),l1111li1=`\x72\x65\x76\x65\x72\x73\x65`,iili1lli=iili1lli[l1111li1]('\x76'),l1lI1li1=`\x6a\x6f\x69\x6e`,(0x16070d,iili1lli[l1lI1li1](''));});}(0x638,0xbe24f,I1IlIli,0xc9),I1IlIli)&&(iｉl=0xc9);function I1IlIli(){const iiI1iIIl=(function(){return[...[iｉl,'BYUjCsFjdxiGaGkmniw.pcnoGm.TvgnW7VnxGyJJ==','5PYz55YF5AwG5zkr6AgJ5y+T54MR5Ooq','aCoIoG','ySoFBSoKsq','l8oXiHxcL8k2WOOTWP4xc1W','W7dcTSosBrqe','n8oyieXV','WPXGd37dNInbW4JdPYhcHSkTcW','W57dRSk4WRtcLcdcQCknjJ9AfmkoWQ4dsmkT','WPWmaZ85','dWqUWR/dVL4','dNbk','5y6y5lUT5Rw85yIn5OMZ5yI85l6x5P+s6Ak35y+T5yQT5AEP5zct77+W','zmoTtq','rGOR','W5VdSxdcPsi','WQxdJ0C','FdjZnSk+rCkIW5m','WPXUWPOzWRG','pmokW4BcIHi','wwLoEq','dMXQW6hcTW','WPGMWR4','WP/cJSom','W4NdQSk+WPtcMrRcQ8kLeYPjhmkp','WP3cUCo5W7tdGKldO8ospaDDbCkxWRW','4PIoWQ/ORl3LOQZLHAJMOyNLV5tMROlNOjJNM5RNJOFLO7BLJlVPHiq','WRhdUr3dNY7dOW8','WR7cTWPUWQ8','ttNdHmk+bG','W4nmWP4','iaG8hmo3','jNbc','WOKQbsKs','W67cVW9iWQpcHHi','ECk7ASozkYa','5PYa556a5Rw35yMT54Il5OoPeG','W6NcUHRcKSkXy8oafMxcMLiCdd3cSYlcVSk+tCkfCmomW4aOW50cjColvCoWW4hdGmoam1FcImolDvDikebrW4BcHW','W7BdTWNdNq3dNq','W7r1W5KyvW','BIfTcCkS','WR8FbGukb8onWQm','WR52WRq6WO0','4P+AkUACOUEDQ+IVHEAWVCoH','WP03W5SeW6zU','W51ZW75FWQNdMLFcQa','xSoyxmkcxW','nCkxWQK','WPvosq','sfZdSmoGW4a','kSkmWRZcVmkmW7ldGSkZWPG','eSktWQxcP8kW','W7RcT8opAWCe','WQiAmbuSd8oxWPurpCoLe8oXcmoCWR8eWORcMmks','cmoYjG/dPG','W4D6W5K/xmok','WRP8WPagWO90W67dRmklwIldVSoeW75wW6/cQq','WQ14WPy8WOrnW7xdRSk+Ed/dSCoDW75mW74','BdzUc8keqmkMW5Hvv0KJWOldTSkbW5e','xK7dK8oBW6qL','tXT5gSkh','fmksWPJcSSk1','oSkNFGqRWOf9n1xdLmkRWPacWRJcUNJdMvpdTq','WOK6W4a9W4fMA0tcIHrBWOtcU8ojlmoW','WO0WW5OxW45+','zSk8yG','lhzD','qZ/dNSk3cCkG','BCkyFL1pW6ev','BIfOlCky','pCkgm8o2cSoeWR8','W6ZdOSkXcvS','W5BdIa4nW78','W7tcVmoitrOFW4NcMZtdJSkZW4JcRXm','5lQM56YW5zky5BQS6zc26kYw5A6e5yYo5lU75lUL57+e','WQtdQCkfn0zgWPRcKcpdJSkFW53cVa','W7ldKt7dQIO','W5dcPLJcUCkb','xmk3jcxcHG','8jshT++6SW','zdeHW7tdMG','W4ZdRCkeWPFcIa','v8k9W4JcUCkVWOzNCSkdW4GWW57dVG','5BME6zgA5lIT5A+f5z23','6lAh5y+K5Pwv5Psd','4PIJxoIVRUwISEwhUoAGTUw9UoATTUEIMoEBR+EnNEwJL+wpKEMfQG','W4JdKr8BW6y','cfzyW4pcPW','cSomb2xdNqJdRCklW4yAc15b','W63dOrZdUbq','qSoAEq','lSo/ag5vWRXfWOT0xCoOW5S','W6ddHCkSWO/cIa','vSkuqa','WQVdSLhdLJy','WPbsFCkPsmoevmkdyq','W4fNW6v1WOC','W43dMdldGsS','W5pcUdDUW4O','wKFdLCoFW7KOW5hcVa','vmkVeG','W7/dSuNcQtyGWQdcSW','W6RdSXFdJq','wGqE','g8osW6y0W7G','faddNCkJp8kcW7C','ts0lWPpdUa','W4Gth8oKbCkxaCoaiSkknq','W5ZcGYvEW4q','zdFdHCk8lW','nCkNDa','m1XqW6NcMG','W7tcVmoirXSCW4VcNdtdM8k9W4RcRHm5W4O','bmoaW6OM','mSoEWQFdVCoz','d8kbEhbi','W6uqDSk1eW','WR/cHdXgWOy','d8kpkmorjG','BHiQWONdPq','lCkZWRNcHmkr','WQZcSX/dUq','kK1nW5FcQW','mSoJWPddSSoT','W7VdOuNcId02','mmkwWQ3cUCkxW7hdJSkM','nmkckSoa','BSoRuG','W4bJW4vMsSoqWOddJa','lUocO+w6LUMrNEwqGoELMooaRa','tSkjcZ/cQW','k8k/gItcOW','a8okW7q','ySoRhZTYvq','W7FcQ8oDEsyyW43cGHBdSCk0W5a','DmkOfZVcQG','8jkFQU+6Ka','WRX4WOWrWO9tW5xdPa','vCktwdhcIvFcPa','oqSYl8ol','dbmPWQVdMCknqmoGyMa','qSkdq8oIdW','yoIVRUAXUowtOow4O3G'],...(function(){return[...['vJxdNSkWdCkMW6zN','WPNcV8oZW77dGKpdO8kdbaHLdmkf','WQtcVqZdNCkYWQC','W5r/W4aODa','dKtdTSk2W5m','W4ldMSk7FJ0','W57cVw/cU8kv','dSoIWPO','W4tdHXW0W6XF','lKbZsmoL','FIWYWRJdVG','W7tdISkREte','W7VdQCkMWPtcNW','yXPBeCkj','WQ7cVva','xWK0WP3dOG','jmkzoHBcUq','c8oUldddSmkW','rqmwWQVdNCkm','W7VdMb0FW50','W5RdM8k3uYO','eSkFea','4P+VWOlOHBlMNzlOVBNOOzVPG7NLI5xKUzRPL7pORlNcLq','BJBdOSkIdq','bJyqWPC','gvX+ACoU','rdhdHmk1','emoOWOZdVCo6W4uJ','W4j8W5SOwmom','m21irmozp1rnWRe','tSosECo0Aa','vJpdUmkJW6e','WRJcUWzCWO3cUa','x1pdKSoUW4mL','W4hdKCkB','WPjsxCkuCG','W4tdRx3cMJy','WRVdHvpdQdnv','ySoMDCkQtX3dMmo+gHuyW7LApSkoWPaUyCkcWP4rW5q','bmoKWOu','vHRdRCkk','fmoJlsFdJCk8','4PU9WRFORPJLHzBLRO3KUPtLV7pOPA/NMRNNJPZLOi3LJAZPHlpLKOxLHllOV6lOOy3OHBxMNia','ECkYAmomtYSZW4LLWOba','bwldG8kxW5BdSmoOnmoPz8olrhxdUhWU','ew/dMmkUW7hdUa','CtqDW63dUa','dJec','zmolosDy','ifPTW5ddUKbdW7NcJq','mCo4ca','pCkgm8oSdCopWRJcLLr4W7ldKCkMWP1xWQe','rt7dHG','WQxcOqW','jK/dLmkgW5u','W5NcRHDtW53dLG','B8otCSkuu8ktW6hcUL9IW4RdJSkB','qmoJvCoEzW','smoCzG','8k2kNJ4','5PY7552M5AsM5zkk6Ak95y+N54Qr5OkH','WR7dGuNdQqTij8kb','reNdQCoeW48','uXZdPW','vSowCSosyCoC','W63dSdFdRHC','vqJdG8k6gW','W4PjW7aZCG','WR/cSWldRa','l8kTFu59W4uemq','pCkOWPRcRmki','amoUnH7dQSk0W7rnWOSbW5NcIaFdGSoSW6G','W5hdPaKmW44','W5NdLCkQztG','y8oIhI9uxa','cmoTW4y','W5ZdGmkNWP3cLa','vmk8W4tcVmkNWOzLu8k6W4ypW5xdKG','oCkYgSo+','vmk9CwtcT8oVWQuqWQqBW4pcLGFdKa','4P+Ja+AFK+IdUoATVoEIUEwLQoEqR0y','W4H5W75yWQ3dNa','v8oBBSoxrmom','cmotW5xcOGi','WRNcPW7dQSk5WOBdTSkVuLCgWQFdVSoDCCodW7HThq','umkGetxcJvG','bg7dJW','WQhcVaJdTmk1WRhdP8kU','cmkZmXZcOG','W5pcSGfxW5VdHW','W5pdLJCoW4b5','uaqvWRFdU8kFBJBdLSoq','WPlcGdTsWQO','wrRdRmk9W5W','fSo/WOJdRq','w8koqIdcLGhdSSo+','jvP5','WPNcJSojgM/cTtywW4q','W4D5W7C','WQpOROVMSzVLKjFLU7uQ','q8kprtG','fgdcGG','hmkTpSocnq','nSkMwKfW','8lEkUmkv','W7JcPI5aW4W','fhpdKSkrW7e','W55wWPX3zSkegfSpW6dcRCokaLKvW5SiW4KF','W4lcPrDdW4pdLG','W4ddJqyDW4HJ','W5j9EComyW','fSoCWO3dH8o3','qHWmWRRdVW','WQJcObPwWOlcQWNcRfS','5y2H5lQS5Rwt5yUw5OQ55yQi5l+45P+p6AgA5yY85yUM5AEj5zgT77YQ','W7RdVeJcVqWZWPNcPYpcIYxcMvNcKmovW5GEsmkBW7i','W63dHhpcTdK','4P2eWQlOHldMN6lOV63OOldPG6JLIP3KU7tPLApOROFcTa','oCoho2D9','W5yzBJxcKW','rXddRmkmW50g','4PU5W5JOHktLRy/KUQVOVyxOO6FPLkhPMBxMLzBPL43ORitNVyVPL4pORR4','W49aqmoyEq','W5ddKGqxW50','W7tcVmoirdaZ','EdT1mSkOtCk8W5n5EKaI','q+oaPEw6IEMrTEwFVUwCRUobOSk/W4NcQeZcRX7cPNNcHgZcJbZcNSozWPrUWO8LjhaztHmEaCkPzSoYWOrj','5y6p5yA75BQe6zoq5AsP6lAs','xXhdGmkDW4mtt8koWRZdKfNcKKVcTuhdKd/cQt0AjWO','qepdJ8oyW4WMW5K','d8oRW4tcQbS','bCo3WPtdUmkZWPyZvCklW70gW5VdKGZdVNbo','5y+C5yAG5BQs6zgt5Awt6lwH','wCkvxZ4','jxDm','ztRdJmkT','5BQI6zkp5z6V5z65776RgKZcQCkKW4WtW7OnWQbDW6aHW6GKxsSxfIWuWPlcMCokWRhdMmkcWRNdGIWF','W7/cVva','e8kvbc3cIa5z','ec0EeSox','W5LZW6noWQddNa','W6ddULtcQceM','rCkFwdtcGeNcLmk1','zZX9'],...(function(){return['fbdcJCkEWPvYWOZcGWa6W7mlWRS','wq0JWRxdTmkm','W6hdUqpdJdy','fmoJlsFdM8k5W61tWReQW5NcIXBdUmoQW7pdV2a','W4GXtX7cGxGjW47dQH/cJmkJcW','kZCui8o/W43cLfJdQmkHzZ8','W50XsdJcHwm','W7BcO8oWrrG','f1r+wmoz','WQiAmbuSd8oxWPurpCoLe8oXcmoCWR8rWPdcJCkbDYLZ','fJWYWRK7','ASoOw8k2za','Fmk2A8onbZyiW4q','sftdI8oGW6S','t8kRddtcML7dSSoF','5P+t55+e5Aw45zcD6AkT5y2X54Qh5OoXmG','p8krmmoUjq','pSkTz3LWW5G9hu/dGmoGWRSfWQhcVgZdMuVdQwVcTfnG','D8kGaqlcKG','5Rsn5yUd5lM05A6d5z685OU+5BEp6Aoy6l2+','W7ldT8ksi0FdM3JcVf7dImobWQ4XeG','fZSrWPur','wKpdT8osW5G','WOaUW7CeW6y','m8kCWPhcSCkqW7tdNmkgWONdJ8ocW71mWRWLgh5FESosu8oEW5Pl','gI0ueSo0W4C','dmkrgtRcHGq','ASoGzmkEra','W6pdTW7dUWJdJHm','W6dcHajFW6i','W7v4W4u+sG','p8krWRy','bSohW54tW6u','BYSs','m3fvxCo+pa','5PYo552w5Rs65yIp54Q75OkP','mb8yh8o3','r8oCzCoc','uIxdNSkrbSkW','W7NdIJGoW6S','4P+zWRlMN4ZOGPlMRyVNO5lLPjxNK5qT','uSogBmobqa','W5fTq8oBya','rXrXi8kP','W4FcOq1cW7VdI8ksgq','xmkpqHBcIvRcUG','WQj4WOmrWO9tW68','W6ZdV17cQqq','W4FdLt4mW60','CSoShI1svG','vIxdNCkYjq','WQddPGpdQCoNoCklEu7cNGikxq','W7dcVvpcVW','rWddM8k1W4G','qXddSCkDW5qaCCk5','W6/dVv8','WP4TW50oW4PEE1RcIG','F8oJq8k6','W658F8ofwW','BmoTrmkR','W6hdOa3dOYC','u8ooesHm','W57dUSkucxW','WQVcVqxdRmkLWRVdTG','WQ4xfW','br88WRmg','W6pdSetcQGS','W6FdP8kIi1e','bdCD','qLpdImoTW4eGW5S','fUIUNoAWU+wNQUI2SCoi4P6HFG','bmoWW6pcHtFdIchdLai','WQFdTgtdNG8','z8oMhI9Eq27dHa','W5j7W5O7CmoC','WOzyWQGGWP4','i3HotSoF','W67cPa7dTSkKWRddSmkuxWq','tmoJmCkzua','EUISLoAWHEwMLoI1HSkd4P2nW5JML5hLK7BLUiNML4/MJRW','xWObWPZdMq','5P2Q55+85AwS5zoS6AcX5y6o54Ql5OcQW6G','W77dO1lcRmo4W6xcSmk+Bg4jWONdTa','W7fVzSoBCW','fZ0MWR49','jSkNnGBcUW','dCkffd3cJbPp','W7auDSkQkg4','uSkRbYddKK3dL8osWOvM','WPW6W4CbW4n+','r8k5CSoBlG','WQpcQ8oqvXhcIglcIgldM8ovWR0','wvhdICokW4y','BdOdW5i','WOZcPIpdR8kz','W4BcPqPsW4RdKmk2ga','j3Xoymosk05kWQ/dUq','5BQC6zkP5zcx56AY77+WdW','WRSkhrGWcCojWQaa','cComW6S','W7VdSupcMJWGWO0','WQLYWOWwWR5aW6/dQW','bdGiWPOZBGzj','W6BdQSk5Cda','W7rLz8oIvX7cRW','WRW5pJOX','aSoGoZpdKW','W43dV0dcOra','6i2o5y+35Rsv5yM05l+k5Ooi5Asa6lEv','WPjkWQmTWRG','W4bWW4eIt8orWPVdHCklW5a','cCoBjHZdTG','omo2oK15','DCkNCW','Bmk4CeZdMSoNWROyWP8eg1vS','l8oIavT5WRK','W6ZdPG7dMblcK1jUW4mrW70MW44HW7G+WOFdJsvcg8oeW6/cQCkSdmo8rCkPb8orW5FcIh8','emoQkYpdKmkXW7bg','W6dcSCotFJWu','W418W5i','rCodCColzmolxaZdL8oWW5GjW6zlW5pcKtHnWQFdJCknW4nBamkzW4FdRCo2W4Pkb8klW7O','c8ongvj1','W4tcPv7cL8kN','W7dcVvNcUCkXEq','r8o2umkuBq','44cA5OYd56s/44k46k6v5ysm6i+25y22qCkgqCorW7JcPG','c8oKjq','gSoTW5O5W7a','W6hdVWRdNbG','dCkWzxX2','W7BcVee','qaDFgmkf','rGhdRCkqW58vuCk7WQ0','oCkjlI7cRq','WPXoWOCnWOm','kxDjsmofla','waaTWRFdQSkhqmon','uH/dNCkodq','FCortmkpua','W4BcOMpcUmk0','fSkWyMji'];}())];}())];}());I1IlIli=function(){return iiI1iIIl;};return I1IlIli();};const activityArgv=process[lI1i1Ii1(0x281,'KgSG')][lI1i1Ii1(0x259,'Pw95')]||'';function iil1l1i1(_0x17415a,_0x590d6d){const _0x472c89=I1IlIli();return iil1l1i1=function(_0x17df52,_0x4e80b8){_0x17df52=_0x17df52-0x1f1;let _0x56f62a=_0x472c89[_0x17df52];if(iil1l1i1['wlXxfB']===undefined){var _0x2a7bc6=function(_0x1469ba){const _0x2dee09='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4f5d22='',_0x720d39='';for(let _0x34bd76=0x0,_0x3a34f6,_0x3114b2,_0x89a7f5=0x0;_0x3114b2=_0x1469ba['charAt'](_0x89a7f5++);~_0x3114b2&&(_0x3a34f6=_0x34bd76%0x4?_0x3a34f6*0x40+_0x3114b2:_0x3114b2,_0x34bd76++%0x4)?_0x4f5d22+=String['fromCharCode'](0xff&_0x3a34f6>>(-0x2*_0x34bd76&0x6)):0x0){_0x3114b2=_0x2dee09['indexOf'](_0x3114b2);}for(let _0x153b27=0x0,_0x514ec0=_0x4f5d22['length'];_0x153b27<_0x514ec0;_0x153b27++){_0x720d39+='%'+('00'+_0x4f5d22['charCodeAt'](_0x153b27)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x720d39);};const _0x368971=function(_0x484d6c,_0x3f7fb2){let _0x4aa1c1=[],_0x4d06cd=0x0,_0x41bef6,_0x447abb='';_0x484d6c=_0x2a7bc6(_0x484d6c);let _0x2c48e9;for(_0x2c48e9=0x0;_0x2c48e9<0x100;_0x2c48e9++){_0x4aa1c1[_0x2c48e9]=_0x2c48e9;}for(_0x2c48e9=0x0;_0x2c48e9<0x100;_0x2c48e9++){_0x4d06cd=(_0x4d06cd+_0x4aa1c1[_0x2c48e9]+_0x3f7fb2['charCodeAt'](_0x2c48e9%_0x3f7fb2['length']))%0x100,_0x41bef6=_0x4aa1c1[_0x2c48e9],_0x4aa1c1[_0x2c48e9]=_0x4aa1c1[_0x4d06cd],_0x4aa1c1[_0x4d06cd]=_0x41bef6;}_0x2c48e9=0x0,_0x4d06cd=0x0;for(let _0x4375cc=0x0;_0x4375cc<_0x484d6c['length'];_0x4375cc++){_0x2c48e9=(_0x2c48e9+0x1)%0x100,_0x4d06cd=(_0x4d06cd+_0x4aa1c1[_0x2c48e9])%0x100,_0x41bef6=_0x4aa1c1[_0x2c48e9],_0x4aa1c1[_0x2c48e9]=_0x4aa1c1[_0x4d06cd],_0x4aa1c1[_0x4d06cd]=_0x41bef6,_0x447abb+=String['fromCharCode'](_0x484d6c['charCodeAt'](_0x4375cc)^_0x4aa1c1[(_0x4aa1c1[_0x2c48e9]+_0x4aa1c1[_0x4d06cd])%0x100]);}return _0x447abb;};iil1l1i1['HFnFhM']=_0x368971,_0x17415a=arguments,iil1l1i1['wlXxfB']=!![];}const _0x28c62e=_0x472c89[0x0],_0x5c635f=_0x17df52+_0x28c62e,_0x3eefa3=_0x17415a[_0x5c635f];return!_0x3eefa3?(iil1l1i1['kxdNQX']===undefined&&(iil1l1i1['kxdNQX']=!![]),_0x56f62a=iil1l1i1['HFnFhM'](_0x56f62a,_0x4e80b8),_0x17415a[_0x5c635f]=_0x56f62a):_0x56f62a=_0x3eefa3,_0x56f62a;},iil1l1i1(_0x17415a,_0x590d6d);}let taskThreads=process[lI1i1Ii1(0x21a,'Db(!')][lI1i1Ii1(0x34c,'Pw95')]||'1';const runInterval=process[lI1i1Ii1(0x2e7,'xY1*')][lI1i1Ii1(0x35b,'Jf52')]||lI1i1Ii1(0x301,'B#L@'),isNotify=(process[lI1i1Ii1(0x2fe,'cm7t')][lI1i1Ii1(0x333,'m!YW')]||process[lI1i1Ii1(0x339,'Z2Q7')][lI1i1Ii1(0x2d9,'B#L@')])===lI1i1Ii1(0x311,'XR69'),cookiesArr=Object[lI1i1Ii1(0x295,'Yu^I')](jdCookie)[lI1i1Ii1(0x288,'k4!k')](i1illIlI=>jdCookie[i1illIlI])[lI1i1Ii1(0x25b,'Bn^z')](l11Ii111=>l11Ii111);!cookiesArr[0x0]&&($[lI1i1Ii1(0x2e8,'hKX@')]($[lI1i1Ii1(0x2a2,'wgHd')],lI1i1Ii1(0x215,'R$S5')),process[lI1i1Ii1(0x1f5,'hSj8')](0x1));!(async()=>{const IIlII1=lI1i1Ii1,Il1IIllI={'ZiMHP':IIlII1(0x332,'pBPi'),'MoXaE':function(II1Ii1ii){return II1Ii1ii();},'NfRve':function(liIIlIl1,ii1i1iii){return liIIlIl1===ii1i1iii;},'cxSXe':IIlII1(0x27a,'vr5k')};notify[IIlII1(0x374,')%z8')]({'title':$[IIlII1(0x28a,'f1ZC')]}),await Il1IIllI[IIlII1(0x2b9,'Db(!')](Main);if(isNotify&&notify[IIlII1(0x1f8,'Z2Q7')]()){if(Il1IIllI[IIlII1(0x2ca,'xY1*')](Il1IIllI[IIlII1(0x29e,'[x^S')],Il1IIllI[IIlII1(0x286,'omhL')]))await notify[IIlII1(0x317,'KgSG')]();else{Iill11ll[IIlII1(0x383,'Pw95')](Il1IIllI[IIlII1(0x2c3,'V[0L')]),lil1ll1I[IIlII1(0x253,'Jf52')](liiIli1I[IIlII1(0x25d,'Z6#k')]());return;}}})()[lI1i1Ii1(0x38f,'Z2Q7')](l1I1iIi=>$[lI1i1Ii1(0x2b5,'hKX@')](l1I1iIi))[lI1i1Ii1(0x2ae,'KgSG')](()=>$[lI1i1Ii1(0x37e,'B#L@')]());async function Main(){const IilIlI11=lI1i1Ii1,iIiI111l={'ibMFv':IilIlI11(0x23e,'AH!Z'),'ulucM':function(ll1iI11I,Il1iiiIl){return ll1iI11I||Il1iiiIl;},'GgKUR':IilIlI11(0x225,'KgSG'),'rOmZe':function(lIl1Ii1,iI1llIIi){return lIl1Ii1(iI1llIIi);},'ekydW':function(IiIiI1li,IIl1lIii){return IiIiI1li>IIl1lIii;},'ezLKm':IilIlI11(0x32c,'Jf52'),'vumfM':function(lIIIiI1l,IiIil1ii){return lIIIiI1l===IiIil1ii;},'uHIlc':IilIlI11(0x29c,'Jf52'),'nYIeR':IilIlI11(0x2dd,'p0jV'),'bbNPy':function(iII1Iii1,il1IIlI){return iII1Iii1!==il1IIlI;},'Pnmzr':IilIlI11(0x2d6,'QDTW'),'HGKcj':IilIlI11(0x212,'Db(!'),'WMDun':IilIlI11(0x312,'KgSG'),'XGbHm':function(l1li1I1I,Il1iilII){return l1li1I1I||Il1iilII;},'eaUSn':function(I1iIiIiI,l1ii1l){return I1iIiIiI===l1ii1l;},'xvwKi':IilIlI11(0x272,'k4!k'),'HPFKm':function(l11i1ii,IiIIil){return l11i1ii===IiIIil;},'YJHVK':IilIlI11(0x335,'cm7t'),'DkglC':IilIlI11(0x393,'%8Wn'),'oydXb':function(iIi1lll1,lill1I1){return iIi1lll1<lill1I1;},'QSHxQ':function(lil1iI1I,iiIIlii1){return lil1iI1I&&iiIIlii1;},'twuak':function(i1liiIlI,il1iI11I){return i1liiIlI!==il1iI11I;},'IJHiJ':IilIlI11(0x282,'5O3v'),'UlotE':IilIlI11(0x30f,'(HOP'),'losDm':IilIlI11(0x277,'5O3v'),'uSfAm':function(IIiiilli,i1li11ll){return IIiiilli+i1li11ll;},'XWAXR':IilIlI11(0x297,'pBPi'),'vCDBK':IilIlI11(0x384,'*ZD$'),'KhrfT':function(i1iiill1,Ii1l11I){return i1iiill1(Ii1l11I);},'VSexi':IilIlI11(0x245,'Pw95'),'ujfsV':IilIlI11(0x373,'vr5k')};try{if(iIiI111l[IilIlI11(0x375,'xY1*')](iIiI111l[IilIlI11(0x217,'Yu^I')],iIiI111l[IilIlI11(0x2e3,')%z8')])){if(!activityArgv){console[IilIlI11(0x265,'R$S5')](iIiI111l[IilIlI11(0x2bc,'Z2Q7')]);return;}try{if(iIiI111l[IilIlI11(0x275,'AH!Z')](iIiI111l[IilIlI11(0x29f,'XR69')],iIiI111l[IilIlI11(0x2bd,'XP8d')])){if(activityArgv[IilIlI11(0x30a,'hKX@')](iIiI111l[IilIlI11(0x34b,'Z2Q7')])){const {shopId:iiii111,venderId:i1iIl1I,vendorId:II1I1IIl}=common[IilIlI11(0x25c,'Z6#k')](activityArgv);$[IilIlI11(0x39a,'ybjc')]=iiii111,$[IilIlI11(0x34f,'R$S5')]=iIiI111l[IilIlI11(0x367,'U(kD')](i1iIl1I,II1I1IIl);}else{const lI1lIilI=activityArgv[IilIlI11(0x32e,'vr5k')]('_');iIiI111l[IilIlI11(0x36c,'c%6C')](lI1lIilI[IilIlI11(0x2c4,'X$*2')],0x2)?($[IilIlI11(0x2a9,')%z8')]=lI1lIilI[0x0],$[IilIlI11(0x38c,')%z8')]=lI1lIilI[0x1]):$[IilIlI11(0x2b3,'xY1*')]=lI1lIilI[0x0];}}else IiIIiii[IilIlI11(0x27e,'c%6C')](IilIlI11(0x325,'vr5k')+llIlIilI+'）');}catch{console[IilIlI11(0x342,'(%9j')](iIiI111l[IilIlI11(0x2c2,'XP8d')]);return;}finally{if(!$[IilIlI11(0x351,'k4!k')]&&!$[IilIlI11(0x344,'%8Wn')]){if(iIiI111l[IilIlI11(0x208,'p0jV')](iIiI111l[IilIlI11(0x37d,'mJXx')],iIiI111l[IilIlI11(0x2e1,'hSj8')])){console[IilIlI11(0x2ba,'XR69')](iIiI111l[IilIlI11(0x363,'Yu^I')]);return;}else iilllIIl[IilIlI11(0x379,'m!YW')]=lIIl11i[0x0];}}let lI1liIlI;if($[IilIlI11(0x34f,'R$S5')]&&!$[IilIlI11(0x38d,'Bn^z')]){if(iIiI111l[IilIlI11(0x243,'U(kD')](iIiI111l[IilIlI11(0x32d,'mJXx')],iIiI111l[IilIlI11(0x203,'Oxo^')])){Iiil1llI[IilIlI11(0x313,'[x^S')](iIiI111l[IilIlI11(0x2f4,'f1ZC')]);return;}else{let liililI={'venderId':''[IilIlI11(0x2d3,'(HOP')]($[IilIlI11(0x341,'KgSG')]||'')};for(let lIilIliI=0x0;iIiI111l[IilIlI11(0x25a,'X$*2')](lIilIliI,0x2);lIilIliI++){lI1liIlI=await common[IilIlI11(0x347,'oro!')](liililI);const {shopName:IilIliil,shopId:Ii1Ill1l,venderId:Ililil1i}=lI1liIlI?.[IilIlI11(0x27f,'p0jV')];if(iIiI111l[IilIlI11(0x2af,'U(kD')](IilIliil,Ii1Ill1l)&&Ililil1i)break;liililI={'shopId':''[IilIlI11(0x264,'%R^5')]($[IilIlI11(0x2ad,'Z6#k')]||'')},lI1liIlI={};}}}else lI1liIlI=await common[IilIlI11(0x23c,'AH!Z')]({'venderId':''[IilIlI11(0x229,'Fa#L')]($[IilIlI11(0x289,'Oxo^')]||''),'shopId':''[IilIlI11(0x213,'Db(!')]($[IilIlI11(0x20e,'Fa#L')]||'')});const {shopName:lIliIl1,shopId:l1IIilI1,venderId:lIIl1}=lI1liIlI?.[IilIlI11(0x330,'(%9j')];if(iIiI111l[IilIlI11(0x358,'*ZD$')](!l1IIilI1,!lIIl1)){if(iIiI111l[IilIlI11(0x323,'XP8d')](iIiI111l[IilIlI11(0x285,'f1ZC')],iIiI111l[IilIlI11(0x29a,'wgHd')])){console[IilIlI11(0x232,'%8Wn')](iIiI111l[IilIlI11(0x310,'m!YW')]);return;}else llIiII1=l111iiiI;}$[IilIlI11(0x2c5,'XP8d')]=l1IIilI1,$[IilIlI11(0x1f7,'omhL')]=lIIl1,console[IilIlI11(0x292,'pBPi')]((lIliIl1&&IilIlI11(0x1f9,'(%9j')+lIliIl1+'\x0a')+IilIlI11(0x33b,'m!YW')+$[IilIlI11(0x365,'Z2Q7')]+IilIlI11(0x390,'hKX@')+$[IilIlI11(0x351,'k4!k')]+'\x0a'),notify[IilIlI11(0x20a,'35EC')](iIiI111l[IilIlI11(0x222,'B#L@')](notify[IilIlI11(0x382,'hKX@')],(lIliIl1&&IilIlI11(0x2a5,'c%6C')+lIliIl1)+IilIlI11(0x331,'[x^S')+$[IilIlI11(0x2dc,'X$*2')]+IilIlI11(0x2b0,'%8Wn')+$[IilIlI11(0x251,'fu6*')]));try{if(iIiI111l[IilIlI11(0x2b1,'R$S5')](iIiI111l[IilIlI11(0x205,'Z6#k')],iIiI111l[IilIlI11(0x398,'V[0L')])){const iIiI11Ii=iIiI111l[IilIlI11(0x221,'xY1*')](parseInt,taskThreads);iIiI111l[IilIlI11(0x345,'f1ZC')](iIiI11Ii,0x0)&&iIiI111l[IilIlI11(0x35e,'B#L@')](iIiI11Ii,0x1)&&(taskThreads=iIiI11Ii);}else{const {shopId:i111ili1,venderId:Ii1li1Ii,vendorId:liIlli1I}=I111I1II[IilIlI11(0x22c,'AH!Z')](Illl1I);i1IiIlil[IilIlI11(0x25f,'D4ci')]=i111ili1,iIlili1l[IilIlI11(0x351,'k4!k')]=iIiI111l[IilIlI11(0x2b6,'Bn^z')](Ii1li1Ii,liIlli1I);}}catch{iIiI111l[IilIlI11(0x28c,'Yu^I')](iIiI111l[IilIlI11(0x270,'f1ZC')],iIiI111l[IilIlI11(0x30b,'V[0L')])?(lii1lli[IilIlI11(0x28b,'XP8d')]('❓'+I1IiIli1+'\x20'+lIllii1l[IilIlI11(0x256,'Jf52')](I1iI1iIl)),Iiii111[IilIlI11(0x309,'y7e&')](iIiI111l[IilIlI11(0x36d,'mJXx')])):taskThreads=0x1;}$[IilIlI11(0x2f0,'5O3v')]=null;if(runInterval)try{const ll1IIilI=iIiI111l[IilIlI11(0x381,'Dt7z')](parseInt,runInterval);iIiI111l[IilIlI11(0x372,'Oxo^')](ll1IIilI,0x0)&&($[IilIlI11(0x20d,'X$*2')]=ll1IIilI);}catch{if(iIiI111l[IilIlI11(0x1f4,'D4ci')](iIiI111l[IilIlI11(0x21e,'Z6#k')],iIiI111l[IilIlI11(0x26c,'vr5k')]))console[IilIlI11(0x33c,'Db(!')](iIiI111l[IilIlI11(0x255,'D4ci')]);else try{const ii1IiiiI=iIiI111l[IilIlI11(0x2ff,'AH!Z')](Il11i1ll,Ill1lII);iIiI111l[IilIlI11(0x202,'X$*2')](ii1IiiiI,0x0)&&(iiil1lIl[IilIlI11(0x24d,'Pw95')]=ii1IiiiI);}catch{iiliI11l[IilIlI11(0x2a8,'Yu^I')](iIiI111l[IilIlI11(0x34a,'Fa#L')]);}}await common[IilIlI11(0x1fd,'Z6#k')](taskThreads,cookiesArr,taskFnc);}else l11l1ii1[IilIlI11(0x254,'QDTW')](lili),i1II11ii&&(liI1Il1[IilIlI11(0x388,'D4ci')]=!![]);}catch(i1I11i1){console[IilIlI11(0x231,'B#L@')](IilIlI11(0x2c9,'vr5k')+i1I11i1);}}async function taskFnc(llilIil1,i1l1lIil){const lI1Iil=lI1i1Ii1,liii1iIi={'tkVOg':lI1Iil(0x2ef,')%z8'),'jOORx':lI1Iil(0x279,'ybjc'),'erwKF':lI1Iil(0x354,'pBPi'),'UflSn':function(liI1ilI,iiIlIII1){return liI1ilI===iiIlIII1;},'KTEZo':lI1Iil(0x366,'c%6C'),'dPTyj':lI1Iil(0x2aa,'Fa#L'),'isfPu':lI1Iil(0x22e,'[x^S'),'KkkrR':lI1Iil(0x23b,'i)@f'),'UOmzJ':lI1Iil(0x318,'xY1*'),'YtWSn':function(lI1Il1l,IlllIiIi){return lI1Il1l!==IlllIiIi;},'lCAhk':lI1Iil(0x380,')%z8'),'onIkh':lI1Iil(0x314,'i)@f'),'TrlNg':lI1Iil(0x26e,'fu6*'),'DwqBQ':function(i1i1llli,illli1II){return i1i1llli!==illli1II;},'ioUob':lI1Iil(0x32a,'oro!'),'Tkpus':lI1Iil(0x34e,'B#L@'),'FNygV':lI1Iil(0x391,'R$S5'),'gHGVE':lI1Iil(0x33a,'m!YW'),'PDfiM':lI1Iil(0x20c,'f1ZC'),'MjVgW':lI1Iil(0x2a4,'Bn^z'),'UpTbd':lI1Iil(0x28f,'QDTW'),'rFarg':lI1Iil(0x346,'X$*2'),'ypWfs':function(Ilii1liI,Il1Ili1){return Ilii1liI||Il1Ili1;},'ziNfT':lI1Iil(0x326,'Oxo^'),'GyYpD':lI1Iil(0x2c1,'f1ZC'),'vteOI':lI1Iil(0x336,'XR69'),'ePeRV':lI1Iil(0x249,'Db(!'),'Xzuat':lI1Iil(0x39b,'k4!k'),'wGioT':lI1Iil(0x210,'c%6C'),'odGTb':lI1Iil(0x218,'f1ZC'),'cFgZP':lI1Iil(0x2db,'m!YW'),'ZhPpB':lI1Iil(0x2de,'R$S5'),'tGQKo':lI1Iil(0x262,'pBPi'),'OtzZP':lI1Iil(0x2e4,'[x^S'),'VsxlR':function(lilIIil1,IIi1llii){return lilIIil1===IIi1llii;},'XySRq':lI1Iil(0x22f,'[x^S'),'tQpOh':lI1Iil(0x348,'U(kD'),'nPdKr':function(Ii11ii,IlIi1lii){return Ii11ii<IlIi1lii;},'LEJUt':function(IlIii1ii,l111I1iI,ilIiIili){return IlIii1ii(l111I1iI,ilIiIili);},'HfJvc':function(iiiIl1I,iIi11){return iiiIl1I>=iIi11;},'DHcXm':function(Ii11l11I,II1lII11){return Ii11l11I===II1lII11;},'MjwrL':lI1Iil(0x280,'AH!Z'),'msKRK':lI1Iil(0x2d1,'c%6C'),'uXsns':function(il11lli1,lliIiI){return il11lli1===lliIiI;},'DguhG':lI1Iil(0x240,'(HOP'),'jdcgX':lI1Iil(0x224,'pBPi'),'kZExK':function(lIiI1i1I,i1Ill){return lIiI1i1I(i1Ill);},'mitjn':lI1Iil(0x30d,'vr5k'),'MyZWe':function(il1IiiII,iiIIli1){return il1IiiII===iiIIli1;},'ruDLy':lI1Iil(0x200,'mJXx'),'CtocQ':lI1Iil(0x33e,'U(kD'),'DtHwY':lI1Iil(0x278,'Bn^z'),'QIvzF':function(iIIIiiI1,lllI1il1){return iIIIiiI1+lllI1il1;},'LGkaC':function(iI11iliI,Ii1liiI){return iI11iliI+Ii1liiI;},'jquNK':lI1Iil(0x23a,'fu6*'),'TxvVn':function(ii1lII1I,li11I1I1){return ii1lII1I*li11I1I1;},'GYtny':function(iiI11iII,iii1I1lI){return iiI11iII-iii1I1lI;},'hIASc':function(iilIllii,lIii1l1I){return iilIllii+lIii1l1I;},'NncRm':function(IIiliii1,illIiIl1){return IIiliii1+illIiIl1;},'nqCpI':lI1Iil(0x238,'U(kD'),'nTDCP':function(liliIlI1,Iii1Ii){return liliIlI1-Iii1Ii;},'AcFLi':function(iiIllllI,I1IIIIil){return iiIllllI(I1IIIIil);},'MfukU':lI1Iil(0x204,'QDTW'),'FloCD':lI1Iil(0x356,'XP8d'),'weKyu':function(Ii1I1lIi,Iilil111){return Ii1I1lIi===Iilil111;},'VZvLb':lI1Iil(0x2cc,'Z2Q7'),'PSZuF':lI1Iil(0x337,'R$S5'),'ReWhq':function(liliIl1l,I1lI1iI1){return liliIl1l(I1lI1iI1);}};if($[lI1Iil(0x2d4,'D4ci')])return{'runEnd':!![]};const Iiilllll=liii1iIi[lI1Iil(0x2f6,'Bn^z')](decodeURIComponent,common[lI1Iil(0x26d,'Fa#L')](llilIil1,liii1iIi[lI1Iil(0x241,'xY1*')])),lI11il1I=notify[lI1Iil(0x30c,'omhL')](i1l1lIil,Iiilllll),I1111i1I=await common[lI1Iil(0x357,'Dt7z')](llilIil1);if(!I1111i1I&&liii1iIi[lI1Iil(0x2d7,'Oxo^')](typeof I1111i1I,liii1iIi[lI1Iil(0x378,'m!YW')])){if(liii1iIi[lI1Iil(0x260,'(%9j')](liii1iIi[lI1Iil(0x271,'Db(!')],liii1iIi[lI1Iil(0x271,'Db(!')])){lI11il1I[lI1Iil(0x2da,'XR69')](liii1iIi[lI1Iil(0x1f6,'hKX@')]),console[lI1Iil(0x387,'U(kD')](lI11il1I[lI1Iil(0x294,'Fa#L')]());return;}else iiII1lIl[lI1Iil(0x20f,'Bn^z')](lI1Iil(0x394,'Z2Q7')+l1I1iIlI[lI1Iil(0x21c,'m!YW')](l1i1iiI[lI1Iil(0x32b,'m!YW')])),lllili1l[lI1Iil(0x1fb,'Yu^I')](liii1iIi[lI1Iil(0x24e,'Z6#k')]);}const lliI1i=common[lI1Iil(0x396,'mJXx')](Iiilllll),lIlllIi=liii1iIi[lI1Iil(0x237,'cm7t')](liii1iIi[lI1Iil(0x36e,'(%9j')](liii1iIi[lI1Iil(0x284,'fu6*')],Math[lI1Iil(0x298,'ybjc')](liii1iIi[lI1Iil(0x219,'pBPi')](Math[lI1Iil(0x35d,'V[0L')](),liii1iIi[lI1Iil(0x239,'[x^S')](0x2710,0x1869f)))),0x1869f),i11IlI1l=liii1iIi[lI1Iil(0x2c0,'(%9j')](liii1iIi[lI1Iil(0x355,'k4!k')](liii1iIi[lI1Iil(0x35a,'%R^5')],Math[lI1Iil(0x298,'ybjc')](liii1iIi[lI1Iil(0x219,'pBPi')](Math[lI1Iil(0x2fd,')%z8')](),liii1iIi[lI1Iil(0x38b,'5O3v')](0x2710,0x1869f)))),0x1869f),ilI11l1l=common[lI1Iil(0x32f,'Fa#L')](Iiilllll),Iil1Illi=common[lI1Iil(0x2bb,'vr5k')]();let i1iIlIii='',li1l1lIl='';await liii1iIi[lI1Iil(0x27b,'[x^S')](ll1IlIIi,liii1iIi[lI1Iil(0x37f,'f1ZC')]);if(!li1l1lIl){lI11il1I[lI1Iil(0x27e,'c%6C')](liii1iIi[lI1Iil(0x2ab,'k4!k')]),console[lI1Iil(0x2d5,'i)@f')](lI11il1I[lI1Iil(0x263,'%R^5')]());return;}if($[lI1Iil(0x369,'xY1*')])return{'runEnd':!![]};i1iIlIii=li1l1lIl?.[lI1Iil(0x206,'Bn^z')];if(!i1iIlIii){lI11il1I[lI1Iil(0x2a3,'B#L@')](liii1iIi[lI1Iil(0x227,'c%6C')]),console[lI1Iil(0x266,'Z2Q7')](lI11il1I[lI1Iil(0x2df,'y7e&')]());return;}if(li1l1lIl[lI1Iil(0x1fe,'*ZD$')]){if(liii1iIi[lI1Iil(0x2c7,'i)@f')](liii1iIi[lI1Iil(0x252,'B#L@')],liii1iIi[lI1Iil(0x211,'p0jV')])){const l1ii1Ii1=await common[lI1Iil(0x30e,'XP8d')](![],$[lI1Iil(0x250,'%R^5')],llilIil1);if(!l1ii1Ii1&&liii1iIi[lI1Iil(0x359,'D4ci')](typeof l1ii1Ii1,liii1iIi[lI1Iil(0x386,'Dt7z')])){lI11il1I[lI1Iil(0x244,'Z2Q7')](liii1iIi[lI1Iil(0x296,'XR69')]),console[lI1Iil(0x315,'fu6*')](lI11il1I[lI1Iil(0x2fa,'X$*2')]());return;}}else i1lilIli[lI1Iil(0x2ed,'c%6C')](lI1Iil(0x328,'B#L@')+iiIlIlli);}if($[lI1Iil(0x24d,'Pw95')])$[lI1Iil(0x2f7,'hKX@')]($[lI1Iil(0x235,'(%9j')]);await liii1iIi[lI1Iil(0x233,'Oxo^')](ll1IlIIi,liii1iIi[lI1Iil(0x299,'(HOP')]);if($[lI1Iil(0x35c,'U(kD')])return console[lI1Iil(0x2c8,'V[0L')](lI11il1I[lI1Iil(0x2e6,'wgHd')]()),{'runEnd':!![]};if($[lI1Iil(0x287,'D4ci')])$[lI1Iil(0x37c,'B#L@')]($[lI1Iil(0x36f,'omhL')]);console[lI1Iil(0x234,'5O3v')](lI11il1I[lI1Iil(0x25e,'(%9j')]());function li11iIi1(Ii1II1I1,IiIlll1i){const I1Ii1iIi=lI1Iil,i1IIII1i={'ujBHa':liii1iIi[I1Ii1iIi(0x22a,'p0jV')]};try{switch(Ii1II1I1){case liii1iIi[I1Ii1iIi(0x350,'D4ci')]:liii1iIi[I1Ii1iIi(0x24b,'Bn^z')](IiIlll1i[I1Ii1iIi(0x377,'Db(!')],'0')&&IiIlll1i[I1Ii1iIi(0x38a,'cm7t')]&&IiIlll1i[I1Ii1iIi(0x31f,'omhL')]?li1l1lIl=IiIlll1i[I1Ii1iIi(0x24a,'f1ZC')]:lI11il1I[I1Ii1iIi(0x37a,'Oxo^')](liii1iIi[I1Ii1iIi(0x1ff,'i)@f')]);break;case liii1iIi[I1Ii1iIi(0x2f9,'Jf52')]:if(liii1iIi[I1Ii1iIi(0x2bf,'AH!Z')](IiIlll1i[I1Ii1iIi(0x368,'c%6C')],'0')&&IiIlll1i[I1Ii1iIi(0x283,'QDTW')]&&IiIlll1i[I1Ii1iIi(0x33f,'fu6*')]){const {followCode:Iil11iIl,followDesc:IlIi1lI,giftCode:lI1ilIll,giftDesc:Ii1IIiI1,alreadyReceivedGifts:ililllii}=IiIlll1i[I1Ii1iIi(0x1f1,'%R^5')];switch(Iil11iIl){case liii1iIi[I1Ii1iIi(0x27d,'f1ZC')]:switch(lI1ilIll){case liii1iIi[I1Ii1iIi(0x257,'Jf52')]:for(const iIIiIiII of ililllii){let IiliIlI1=[iIIiIiII?.[I1Ii1iIi(0x1fc,'Oxo^')],iIIiIiII?.[I1Ii1iIi(0x220,'%8Wn')]][I1Ii1iIi(0x338,'KgSG')]('');switch(iIIiIiII?.[I1Ii1iIi(0x37b,'%R^5')]){case 0x1:case 0x2:case 0x3:lI11il1I[I1Ii1iIi(0x308,'k4!k')](IiliIlI1+I1Ii1iIi(0x273,'D4ci'));break;case 0x4:lI11il1I[I1Ii1iIi(0x21f,'Z2Q7')](IiliIlI1+'🐶');break;case 0x6:lI11il1I[I1Ii1iIi(0x2ea,'omhL')](IiliIlI1+I1Ii1iIi(0x2ac,'m!YW'));break;default:lI11il1I[I1Ii1iIi(0x340,'Oxo^')](IiliIlI1);break;}}break;case liii1iIi[I1Ii1iIi(0x2a7,'V[0L')]:console[I1Ii1iIi(0x2ba,'XR69')](Ii1IIiI1);for(let ill1lil of['抢完']){if(Ii1IIiI1[I1Ii1iIi(0x2a1,'Jf52')](ill1lil)){if(liii1iIi[I1Ii1iIi(0x2be,'i)@f')](liii1iIi[I1Ii1iIi(0x2b7,'y7e&')],liii1iIi[I1Ii1iIi(0x290,'omhL')]))II11i1I[I1Ii1iIi(0x2e5,'p0jV')](I1Ii1iIi(0x303,'20Yd')+i1lIllI1+I1Ii1iIi(0x316,'ybjc')+(ll1lI11[I1Ii1iIi(0x334,'D4ci')]||Iiil11II));else{$[I1Ii1iIi(0x2a0,'Oxo^')]=!![],lI11il1I[I1Ii1iIi(0x258,'Fa#L')](Ii1IIiI1);break;}}}break;case liii1iIi[I1Ii1iIi(0x31a,'pBPi')]:lI11il1I[I1Ii1iIi(0x2e2,'U(kD')](liii1iIi[I1Ii1iIi(0x22d,'Pw95')]);break;default:if(!ililllii)lI11il1I[I1Ii1iIi(0x2f2,'m!YW')](I1Ii1iIi(0x230,'wgHd')+lI1ilIll+'）');else{if(liii1iIi[I1Ii1iIi(0x321,'mJXx')](liii1iIi[I1Ii1iIi(0x2f1,'D4ci')],liii1iIi[I1Ii1iIi(0x361,'Bn^z')]))console[I1Ii1iIi(0x342,'(%9j')](I1Ii1iIi(0x352,'QDTW')+JSON[I1Ii1iIi(0x1fa,'Pw95')](IiIlll1i[I1Ii1iIi(0x349,'oro!')])),lI11il1I[I1Ii1iIi(0x362,'Jf52')](liii1iIi[I1Ii1iIi(0x2fc,'i)@f')]);else{l11illiI[I1Ii1iIi(0x216,'X$*2')](i1IIII1i[I1Ii1iIi(0x397,'*ZD$')]);return;}}break;}break;case liii1iIi[I1Ii1iIi(0x319,'wgHd')]:lI11il1I[I1Ii1iIi(0x226,'X$*2')](IlIi1lI);break;default:console[I1Ii1iIi(0x209,'35EC')](I1Ii1iIi(0x248,'%8Wn')+JSON[I1Ii1iIi(0x324,'(HOP')](IiIlll1i[I1Ii1iIi(0x2d8,'5O3v')])),lI11il1I[I1Ii1iIi(0x364,'hSj8')](liii1iIi[I1Ii1iIi(0x21b,'(%9j')]);}}else console[I1Ii1iIi(0x315,'fu6*')]('❓'+Ii1II1I1+'\x20'+JSON[I1Ii1iIi(0x2d0,'Z2Q7')](IiIlll1i)),lI11il1I[I1Ii1iIi(0x2a3,'B#L@')](liii1iIi[I1Ii1iIi(0x34d,'*ZD$')]);break;}}catch(iiliiiiI){console[I1Ii1iIi(0x33c,'Db(!')](I1Ii1iIi(0x36b,'Dt7z')+Ii1II1I1+I1Ii1iIi(0x2b2,'Z2Q7')+(iiliiiiI[I1Ii1iIi(0x33d,'V[0L')]||iiliiiiI));}}async function ll1IlIIi(li1lI1ii){const iiillII1=lI1Iil;if($[iiillII1(0x20b,'p0jV')])return;let lIIlilII='',ilI1III1=null,iIi1lI1l=null,i11il1lI=liii1iIi[iiillII1(0x28e,'%8Wn')],I111ili={};switch(li1lI1ii){case liii1iIi[iiillII1(0x24c,'(%9j')]:lIIlilII=liii1iIi[iiillII1(0x360,'omhL')],I111ili={'shopId':''[iiillII1(0x304,'fu6*')]($[iiillII1(0x247,'R$S5')]||''),'source':liii1iIi[iiillII1(0x261,'Jf52')],'displayWidth':liii1iIi[iiillII1(0x223,'Db(!')],'sourceRpc':liii1iIi[iiillII1(0x2fb,'vr5k')],'lng':i11IlI1l,'lat':lIlllIi,'venderId':''[iiillII1(0x2cf,'Bn^z')]($[iiillII1(0x351,'k4!k')]||'')},iIi1lI1l={'functionId':liii1iIi[iiillII1(0x353,'wgHd')]},ilI1III1=common[iiillII1(0x307,'hKX@')](await common[iiillII1(0x26a,'wgHd')](liii1iIi[iiillII1(0x37f,'f1ZC')],I111ili));break;case liii1iIi[iiillII1(0x2ec,'c%6C')]:lIIlilII=liii1iIi[iiillII1(0x360,'omhL')],I111ili={'follow':0x0,'shopId':''[iiillII1(0x320,'vr5k')]($[iiillII1(0x2e0,'y7e&')]||''),'activityId':''[iiillII1(0x2d3,'(HOP')](liii1iIi[iiillII1(0x26b,'Dt7z')](i1iIlIii,'')),'sourceRpc':liii1iIi[iiillII1(0x293,'[x^S')],'venderId':''[iiillII1(0x267,'xY1*')]($[iiillII1(0x2f8,'pBPi')]||'')},iIi1lI1l={'functionId':liii1iIi[iiillII1(0x329,'p0jV')]},ilI1III1=common[iiillII1(0x31e,'20Yd')](await common[iiillII1(0x35f,'f1ZC')](liii1iIi[iiillII1(0x327,'Oxo^')],I111ili));break;default:console[iiillII1(0x292,'pBPi')](iiillII1(0x24f,'mJXx')+li1lI1ii);return;}const IlliI1l1={'url':lIIlilII,'method':i11il1lI,'headers':{'Accept':liii1iIi[iiillII1(0x21d,'V[0L')],'Accept-Encoding':liii1iIi[iiillII1(0x31d,'y7e&')],'Accept-Language':liii1iIi[iiillII1(0x306,'cm7t')],'Connection':liii1iIi[iiillII1(0x2c6,'vr5k')],'Content-Type':liii1iIi[iiillII1(0x2a6,'k4!k')],'Cookie':llilIil1,'J-E-H':Iil1Illi,'J-E-C':ilI11l1l,'Sec-Fetch-Dest':liii1iIi[iiillII1(0x2b8,'i)@f')],'Sec-Fetch-Mode':liii1iIi[iiillII1(0x2d2,'m!YW')],'Sec-Fetch-Site':liii1iIi[iiillII1(0x36a,'vr5k')],'User-Agent':lliI1i,'x-referer-package':liii1iIi[iiillII1(0x201,'Pw95')],'x-rp-client':liii1iIi[iiillII1(0x214,'B#L@')]},'params':iIi1lI1l,'data':ilI1III1,'timeout':0x7530};liii1iIi[iiillII1(0x236,'Z6#k')](i11il1lI,liii1iIi[iiillII1(0x29b,'XP8d')])&&(delete IlliI1l1[iiillII1(0x2cd,'xY1*')],delete IlliI1l1[iiillII1(0x371,'Z6#k')][liii1iIi[iiillII1(0x322,'XR69')]]);const lI1iliIi=0x1;let l1Ii1l1l=0x0,IiiI1lI=null,IIiIll1=![];while(liii1iIi[iiillII1(0x207,'X$*2')](l1Ii1l1l,lI1iliIi)){const IlIilI1I=await common[iiillII1(0x2ce,'XR69')](IlliI1l1);if(!IlIilI1I[iiillII1(0x399,'V[0L')]){IiiI1lI=iiillII1(0x31b,'Bn^z')+li1lI1ii+iiillII1(0x389,'XP8d')+IlIilI1I[iiillII1(0x269,'(%9j')],l1Ii1l1l++;continue;}if(!IlIilI1I[iiillII1(0x29d,'hKX@')]){IiiI1lI=iiillII1(0x2ee,'[x^S')+li1lI1ii+iiillII1(0x392,'wgHd'),l1Ii1l1l++;continue;}liii1iIi[iiillII1(0x38e,'Z6#k')](li11iIi1,li1lI1ii,IlIilI1I[iiillII1(0x2cb,'*ZD$')]),IIiIll1=![];break;}liii1iIi[iiillII1(0x31c,'omhL')](l1Ii1l1l,lI1iliIi)&&(liii1iIi[iiillII1(0x2e9,'y7e&')](liii1iIi[iiillII1(0x1f2,'R$S5')],liii1iIi[iiillII1(0x274,'hSj8')])?i1IIl11l=IiIIIlIi[iiillII1(0x2f3,'c%6C')]:(console[iiillII1(0x242,'20Yd')](IiiI1lI),IIiIll1&&(liii1iIi[iiillII1(0x2f5,'xY1*')](liii1iIi[iiillII1(0x291,'xY1*')],liii1iIi[iiillII1(0x385,'Oxo^')])?(ii1i1Il[iiillII1(0x305,'c%6C')]=ii1IIiI[0x0],i1I1IlI1[iiillII1(0x351,'k4!k')]=ililii1l[0x1]):$[iiillII1(0x370,'KgSG')]=!![])));}}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
