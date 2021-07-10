var cccn = document.getElementsByClassName("college-course-content")[0];
            var cccnm = document.getElementsByClassName("college-courses-content-main")[0];
            var cccv = document.getElementsByClassName("college-course-content-v")[0];
            var cccvm = document.getElementsByClassName("college-courses-content-main-v")[0];
            var ccct = document.getElementsByClassName("college-course-content-t")[0];
            var ccctm = document.getElementsByClassName("college-courses-content-main-t")[0];
            var cccp = document.getElementsByClassName("college-course-content-p")[0];
            var cccpm = document.getElementsByClassName("college-courses-content-main-p")[0];
            var spn = document.getElementsByTagName("span1");
            var gen = document.getElementsByClassName("divgeneral1");
            var mq = window.matchMedia("(max-width: 800px)")
            if (mq.matches){
                function videosclick(){
                    cccn.style.display = "none"
                    cccv.style.display = "";
                    ccct.style.display = "none";
                    cccp.style.display = "none";
                }
                function notesclick(){
                    cccn.style.display = ""
                    cccv.style.display = "none";
                    ccct.style.display = "none";
                    cccp.style.display = "none";
                }
                /*function papersclick(){
                    cccn.style.display = "none"
                    cccv.style.display = "none";
                    ccct.style.display = "";
                    cccp.style.display = "none";
                }
                function testsclick(){
                    cccn.style.display = "none"
                    cccv.style.display = "none";
                    ccct.style.display = "none";
                    cccp.style.display = "";
                }*/
            }
            else{
                function videosclick(){
                    cccn.style.display = "none"
                    cccv.style.display = "";
                    ccct.style.display = "none";
                    cccp.style.display = "none";
                }
                function notesclick(){
                    cccn.style.display = ""
                    cccv.style.display = "none";
                    ccct.style.display = "none";
                    cccp.style.display = "none"; 
                }
                /*function papersclick(){
                    cccn.style.display = "none"
                    cccv.style.display = "none";
                    ccct.style.display = "";
                    cccp.style.display = "none";
                }
                function testsclick(){
                    cccn.style.display = "none"
                    cccv.style.display = "none";
                    ccct.style.display = "none";
                    cccp.style.display = "";
                }*/
            }
            function papersclick() {
                alert("Sorry, it is under construction");
            }
            function testsclick(){
                alert("Sorry, it is under construction");
            }