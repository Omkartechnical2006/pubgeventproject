            let rewardimg = localStorage.getItem("rewardImg");
            let msg = document.getElementsByClassName("msg")[0];
            let image = document.getElementById("image");
            let progress = document.getElementById("rewardstatus");
            if (!rewardimg) {
                document.getElementsByClassName("order")[0].style.display="none";
            } else {
                msg.style.display = 'none';
                image.src = rewardimg;
                progress.innerText = "Your reward has been Processed....";
            }
