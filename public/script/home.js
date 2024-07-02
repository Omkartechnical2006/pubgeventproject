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
                let msgshow = document.getElementsByClassName("msgshow");
                let names = ["ROMAN", "Baap AAya", "HellStoRM", "Dark CAMPER", "{Legend}", "MONSTER", "$KING$", "*[DEAD KILLER]*", "CRIMINAL01", "DEVIL", "DESTROYER", "MR. LEGEND"];
                let nameln = names.length;
                function getTime(){
                let msgShowTimes =[500,700,1000,1200,1500,1700,2000,3000,3500,3900,4200]
                let chooseTime = Math.floor(Math.random()*(msgShowTimes.length));
                return msgShowTimes[chooseTime];
            }
                setInterval(() => {
                    getTime();
                    let ssName = Math.floor(Math.random() * nameln);
                    let crrTime = new Date();
                    let crrHour = crrTime.getHours();
                    let crrMinute = crrTime.getMinutes();
                    let crrSec = crrTime.getSeconds();
                    msgshow[0].innerHTML = ` <span style="color:red;">${names[ssName]}</span> recieved succesfully their reward! <span style="color:white;">${crrHour+":"+crrMinute+":"+crrSec}</span>`;
                }, getTime());