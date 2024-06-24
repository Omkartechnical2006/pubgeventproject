            let a = document.getElementsByClassName("item");
            let rImg = localStorage.getItem("rewardImg");
            let msg = "your reward has been processed...";
            for(let item of a){
            (item.firstChild).addEventListener('click',(e)=>{
                let img = (e.target.currentSrc);
                if(!rImg || rImg===undefined){
                    window.location.href=`/rewardclaim?rewardimg=${img}`;
                }else{
                    alert(msg);
                }
            });
        }
            const claimreward=(e)=>{
                let img = e.previousSibling.src;
                if(!rImg || rImg===undefined){
                    window.location.href=`/rewardclaim?rewardimg=${img}`;
                }else{
                    alert(msg);
                }
            }
        