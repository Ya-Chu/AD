function IdriverLabel(){
            const title = document.querySelector("#Idive_mode").value;
            let tags = document.getElementsByClassName("driverInput");
            let labelAI = document.querySelector("#labelAI");
            let labelBI = document.querySelector("#labelBI");
            let labelCI = document.querySelector("#labelCI");

            if(title.length === 0){
                const str="請先選擇驅動方式才能填寫欄位"
                labelAI.textContent = str; 
                labelBI.textContent = str;
                labelCI.textContent = str; 
                for(let i=0;i<tags.length;i++){tags[i].readOnly = true;}
            }            
            else {   
                if(title=="聯軸器"){                
                    labelAI.textContent = title; 
                    labelBI.textContent = `${title}（馬達端軸徑）`;
                    labelCI.textContent = `${title}（葉輪端軸徑）`;
                }
                else if(title=="皮帶式"){
                    labelAI.textContent = title;
                    labelBI.textContent = `${title}（馬達端）`;
                    labelCI.textContent = `${title}（葉輪端）`;
                }else if(title=="NA"){
                    labelAI.textContent = "直結";
                    labelBI.textContent = `${title}（馬達端）`;
                    labelCI.textContent = `${title}（葉輪端）`;
                }else{                
                    labelAI.textContent = "其他";
                    labelBI.textContent = "其他（馬達端）";
                    labelCI.textContent = '其他（葉輪端）';
                }                
                for(let i=0;i<tags.length;i++){
                    tags[i].readOnly = false;
                }
                document.getElementById("ICoupling_belt_dd").focus();  
            }
        }