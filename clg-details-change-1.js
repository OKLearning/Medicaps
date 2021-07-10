var body = document.getElementsByClassName("hp-acontent")[0];
var main = document.getElementsByClassName("hp-body-content")[0];
var ccs1 = document.getElementsByClassName("college-course-sub")[0];
var ccsm1 = document.getElementsByClassName("college-courses-sub-main")[0];
var ccs2 = document.getElementsByClassName("college-course-sub-bsc")[0];
var ccsm2 = document.getElementsByClassName("college-courses-sub-main-bsc")[0];
var ccs3 = document.getElementsByClassName("college-course-sub-2")[0];
var ccsm3 = document.getElementsByClassName("college-courses-sub-main-2")[0];
var ccs4 = document.getElementsByClassName("college-course-sub-2-p")[0];
var ccsm4 = document.getElementsByClassName("college-courses-sub-main-2-p")[0];
var mq = window.matchMedia("(max-width: 800px)")
if (mq.matches){
    /*function mtechclick(){
        body.style.height = "705px";
        main.style.height = "545px";
        ccs1.style.display = "none";
        ccs2.style.display = "";
        ccs2.style.top = "0px";
        ccsm2.style.top = "0px";
        ccs3.style.display = "none";
        ccs4.style.display = "none";
    }*/
    function btechclick(){
        body.style.height = "600px";
        main.style.height = "250px";
        ccs1.style.display = "";
        ccs1.style.visibility = "visible";
        ccs1.style.height = "190%";
        ccs1.style.top = "0px";
        ccsm1.style.top = "0px";
        ccs2.style.display = "none";
        ccs3.style.display = "none";
        ccs4.style.display = "none";
    }
    /*function btechpclick(){
        body.style.height = "820px";
        main.style.height = "660px";
        ccs1.style.display = "none";
        ccs2.style.display = "none";
        ccs3.style.display = "";
        ccs3.style.top = "0px"
        ccsm3.style.top = "0px";
        ccs4.style.display = "none";
    }
    function mtechpclick(){
        body.style.height = "820px";
        main.style.height = "660px";
        ccs1.style.display = "none";
        ccs2.style.display = "none";
        ccs3.style.display = "none";
        ccs4.style.display = "";
        ccs4.style.top = "0px";
        ccsm4.style.top = "0px";
    }*/
}
else{
    /*function mtechclick(){
        body.style.height = "705px";
        main.style.height = "545px";
        ccs1.style.zIndex = "1";
        ccs1.style.visibility = "hidden";
        ccs1.style.height = "545px"
        ccsm1.style.top = "-2000px";
        ccs2.style.zIndex = "5";
        ccs2.style.visibility = "visible";
        ccs2.style.height = "545px";
        ccs2.style.top = "-569px";
        ccsm2.style.top = "0px";
        ccs3.style.zIndex = "2";
        ccs3.style.visibility = 'hidden';
        ccs3.style.height = "545px";
        ccs3.style.top = "-1138px"
        ccsm3.style.top = "-2000px";
        ccs4.style.zIndex = '3';
        ccs4.style.visibility = "hidden";
        ccs4.style.height = "545px";
        ccs4.style.top = "-1707px";
        ccsm4.style.top = "-2000px";
    }*/
    function btechclick(){
        body.style.height = "820px";
        main.style.height = "660px";
        ccs1.style.zIndex = "5";
        ccs1.style.visibility = "visible";
        ccs1.style.height = "660px"
        ccsm1.style.top = "0px";
        ccs2.style.zIndex = "1";
        ccs2.style.visibility = "hidden";
        ccs2.style.height = "660px";
        ccs2.style.top = "-684px";
        ccsm2.style.top = "-2000px";
        ccs3.style.zIndex = "2";
        ccs3.style.visibility = 'hidden';
        ccs3.style.height = "660px";
        ccs3.style.top = "-1368px"
        ccsm3.style.top = "-2000px";
        ccs4.style.zIndex = '3';
        ccs4.style.visibility = "hidden";
        ccs4.style.height = "660px";
        ccs4.style.top = "-2052px";
        ccsm4.style.top = "-2000px";
    }
    /*function btechpclick(){
        body.style.height = "820px";
        main.style.height = "660px";
        ccs1.style.zIndex = "1";
        ccs1.style.visibility = "hidden";
        ccs1.style.height = "660px"
        ccsm1.style.top = "-2000px";
        ccs2.style.zIndex = "2";
        ccs2.style.visibility = "hidden";
        ccs2.style.height = "660px";
        ccs2.style.top = "-684px";
        ccsm2.style.top = "-2000px";
        ccs3.style.zIndex = "5";
        ccs3.style.visibility = 'visible';
        ccs3.style.height = "660px";
        ccs3.style.top = "-1368px"
        ccsm3.style.top = "0px";
        ccs4.style.zIndex = '3';
        ccs4.style.visibility = "hidden";
        ccs4.style.height = "660px";
        ccs4.style.top = "-2052px";
        ccsm4.style.top = "-2000px";
    }
    function mtechpclick(){
        body.style.height = "820px";
        main.style.height = "660px";
        ccs1.style.zIndex = "1";
        ccs1.style.visibility = "hidden";
        ccs1.style.height = "660px"
        ccsm1.style.top = "-2000px";
        ccs2.style.zIndex = "2";
        ccs2.style.visibility = "hidden";
        ccs2.style.height = "660px";
        ccs2.style.top = "-684px";
        ccsm2.style.top = "-2000px";
        ccs3.style.zIndex = "3";
        ccs3.style.visibility = 'hidden';
        ccs3.style.height = "660px";
        ccs3.style.top = "-1368px"
        ccsm3.style.top = "-2000px";
        ccs4.style.zIndex = '5';
        ccs4.style.visibility = "visible";
        ccs4.style.height = "660px";
        ccs4.style.top = "-2052px";
        ccsm4.style.top = "0px";
    }*/
}    
function mtechclick() {
    alert("Sorry, it is under construction");
}
function btechpclick(){
    alert("Sorry, it is under construction");
}
function mtechpclick(){
    alert("Sorry, it is under construction");
}