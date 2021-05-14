$( document ).ready(function(){
  if(i==-1)
  {
    $(`.strelka`).toggleClass('active1');
  }
  });
let i=0;
let s1=0;
let s2=0;
let s3=0;
let s4=0;
let s5=0;
$('.p1').click(function() {
    if (i==0)
    {
    $(`.x1`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    i=1;
    s1=1;
    }
  });
  $('.p2').click(function() {
    if (i==0)
    {
    $(`.x2`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    i=1;
    s1=2;
    }
  });
  $('.p3').click(function() {
    if (i==0)
    {
    $(`.x3`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    i=1;
    s1=3;
    }
  });
  $('.p4').click(function() {
    if (i==0)
    {
    $(`.x4`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    i=1;
    s1=4;
    }
  });
  $('.p6').click(function() {
    if (i==0)
    {
    $(`.x6`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    i=1;
    s1=6;
    }
  });
  $('.p7').click(function() {
    if (i==0)
    {
    $(`.x7`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    i=1;
    s1=7;
    }
  });
  $('.p8').click(function() {
    if (i==0)
    {
    $(`.x8`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    i=1;
    s1=8;
    }
  });
  $('.p9').click(function() {
    if (i==0)
    {
    $(`.x9`).toggleClass('active');
    $(`.c5`).toggleClass('active');
    $(`.x5`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    i=1;
    s1=9;
    }
  });
  $('.p5').click(function() {
    if (i==0)
    {
    $(`.x5`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c5`).attr("id", "inactive");
    i=1;
    s1=5;
    }
  });
  $('.p1').click(function() {
    if (i==1&&s1==2)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s2=1;
    i=2;
    }
    if (i==1&&s1==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s2=1;
    i=2;
    }
    if (i==1&&s1==4)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s2=1;
    i=2;
    }
    if (i==1&&s1==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s2=1;
    i=2;
    }
    if (i==1&&s1==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s2=1;
    i=2;
    }
    if (i==1&&s1==8)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s2=1;
    i=2;
    }
    if (i==1&&s1==9)
    {
    $(`.x1`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s2=1;
    i=2;
    }
    
  });
$('.p2').click(function() {
    if (i==1&&s1==1)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
    if (i==1&&s1==3)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
    if (i==1&&s1==4)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
    if (i==1&&s1==5)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c8`).toggleClass('active');
      $(`.x8`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
    if (i==1&&s1==6)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
    if (i==1&&s1==7)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
    if (i==1&&s1==8)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
    if (i==1&&s1==9)
    {  
      $(`.x2`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c2`).attr("id", "inactive");
      s2=2;
      i=2;
    }
  });
  $('.p3').click(function() {
    if (i==1&&s1==1)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c2`).toggleClass('active');
      $(`.x2`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
    if (i==1&&s1==2)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
    if (i==1&&s1==4)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
    if (i==1&&s1==5)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
    if (i==1&&s1==6)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
    if (i==1&&s1==7)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c8`).toggleClass('active');
      $(`.x8`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
    if (i==1&&s1==8)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
    if (i==1&&s1==9)
    {  
      $(`.x3`).toggleClass('active');
      $(`.c6`).toggleClass('active');
      $(`.x6`).attr("id", "inactive");
      $(`.c3`).attr("id", "inactive");
      s2=3;
      i=2;
    }
  });
  $('.p4').click(function() {
    if (i==1&&s1==1)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
    if (i==1&&s1==2)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
    if (i==1&&s1==3)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
    if (i==1&&s1==5)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c6`).toggleClass('active');
      $(`.x6`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
    if (i==1&&s1==6)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
    if (i==1&&s1==7)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
    if (i==1&&s1==8)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
    if (i==1&&s1==9)
    {  
      $(`.x4`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c4`).attr("id", "inactive");
      s2=4;
      i=2;
    }
  });
  $('.p6').click(function() {
    if (i==1&&s1==1)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
    if (i==1&&s1==2)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
    if (i==1&&s1==3)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
    if (i==1&&s1==4)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
    if (i==1&&s1==5)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c4`).toggleClass('active');
      $(`.x4`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
    if (i==1&&s1==7)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
    if (i==1&&s1==8)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
    if (i==1&&s1==9)
    {  
      $(`.x6`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c6`).attr("id", "inactive");
      s2=6;
      i=2;
    }
  });
  $('.p7').click(function() {
    if (i==1&&s1==1)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c4`).toggleClass('active');
      $(`.x4`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
    if (i==1&&s1==2)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
    if (i==1&&s1==3)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c4`).toggleClass('active');
      $(`.x4`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
    if (i==1&&s1==4)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
    if (i==1&&s1==5)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
    if (i==1&&s1==6)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
    if (i==1&&s1==8)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
    if (i==1&&s1==9)
    {  
      $(`.x7`).toggleClass('active');
      $(`.c8`).toggleClass('active');
      $(`.x8`).attr("id", "inactive");
      $(`.c7`).attr("id", "inactive");
      s2=7;
      i=2;
    }
  });
  $('.p8').click(function() {
    if (i==1&&s1==1)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
    if (i==1&&s1==2)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c1`).toggleClass('active');
      $(`.x1`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
    if (i==1&&s1==3)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
    if (i==1&&s1==4)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
    if (i==1&&s1==5)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c2`).toggleClass('active');
      $(`.x2`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
    if (i==1&&s1==6)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
    if (i==1&&s1==7)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c9`).toggleClass('active');
      $(`.x9`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
    if (i==1&&s1==9)
    {  
      $(`.x8`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c8`).attr("id", "inactive");
      s2=8;
      i=2;
    }
  });
  $('.p9').click(function() {
    if (i==1&&s1==1)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c2`).toggleClass('active');
      $(`.x2`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
    if (i==1&&s1==2)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
    if (i==1&&s1==3)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c6`).toggleClass('active');
      $(`.x6`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
    if (i==1&&s1==4)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
    if (i==1&&s1==5)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
    if (i==1&&s1==6)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c3`).toggleClass('active');
      $(`.x3`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
    if (i==1&&s1==7)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c8`).toggleClass('active');
      $(`.x8`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
    if (i==1&&s1==8)
    {  
      $(`.x9`).toggleClass('active');
      $(`.c7`).toggleClass('active');
      $(`.x7`).attr("id", "inactive");
      $(`.c9`).attr("id", "inactive");
      s2=9;
      i=2;
    }
  });
  $('.p1').click(function() {
    if (i==2&&s1==2&&s2==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==9)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==3&&s2==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==8)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==3&&s2==9)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==4&&s2==8)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==9)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==2)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==6&&s2==4)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==6&&s2==8)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==6&&s2==9)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==7&&s2==8)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==7&&s2==9)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==2)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==8&&s2==4)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==8&&s2==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=3;
    }
    if (i==2&&s1==8&&s2==9)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==2)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==4)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==8)
    {
    $(`.x1`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s3=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p2').click(function() {
    if (i==2&&s1==1&&s2==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6 `).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==8)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==8)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==8)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=3;
    }
    if (i==2&&s1==5&&s2==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=3;
    }
    if (i==2&&s1==5&&s2==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==8)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=3;
    }
    if (i==2&&s1==7&&s2==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=3;
    }
    if (i==2&&s1==8&&s2==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=2;
    i=3;
    }
    if (i==2&&s1==9&&s2==8)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p3').click(function() {
    if (i==2&&s1==1&&s2==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==1&&s2==7)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==1&&s2==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==7)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==4&&s2==2)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==6)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==7)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;    }
    if (i==2&&s1==4&&s2==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==5&&s2==2)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==5&&s2==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==5&&s2==6)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==5&&s2==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==7)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==2)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==6)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==8&&s2==2)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==8&&s2==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==8&&s2==6)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==7)
    {
    $(`.x3`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==9&&s2==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
    if (i==2&&s1==9&&s2==7)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s3=3;
    i=3;
    }
  });
  $('.p4').click(function() {
    if (i==2&&s1==1&&s2==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==6)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==6)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==6)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=3;
    }
    if (i==2&&s1==5&&s2==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=3;
    }
    if (i==2&&s1==5&&s2==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=3;
    }
    if (i==2&&s1==5&&s2==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=3;
    }
    if (i==2&&s1==6&&s2==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7   `).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7   `).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1   `).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1   `).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1   `).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7   `).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==6)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==6)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=3;
    }
    if (i==2&&s1==9&&s2==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=3;
    }
    if (i==2&&s1==9&&s2==6)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s3=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p6').click(function() {
    if (i==2&&s1==1&&s2==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==4)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=3;
    }
    if (i==2&&s1==1&&s2==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==4)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==4)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=3;
    }
    if (i==2&&s1==3&&s2==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=3;
    }
    if (i==2&&s1==5&&s2==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=3;
    }
    if (i==2&&s1==7&&s2==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==4)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==4)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==4)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s3=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p7').click(function() {
    if (i==2&&s1==1&&s2==2)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==1&&s2==3)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==1&&s2==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==2&&s2==3)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==4)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==2&&s2==8)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==3&&s2==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==2)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==4)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==8)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==2)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==3)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==2)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==5&&s2==4)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==5&&s2==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==5&&s2==8)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==6&&s2==2)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==6&&s2==3)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==4)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==6&&s2==8)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==8&&s2==3)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==2)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
    if (i==2&&s1==9&&s2==3)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s3=7;
    i=3;
    }
  });
  $('.p8').click(function() {
    if (i==2&&s1==1&&s2==2)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=3;
    }
    if (i==2&&s1==1&&s2==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=3;
    }
    if (i==2&&s1==2&&s2==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=3;
    }
    if (i==2&&s1==3&&s2==2)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==2)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=3;
    }
    if (i==2&&s1==5&&s2==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }if (i==2&&s1==5&&s2==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==2)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==2)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==2)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==9&&s2==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s3=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p9').click(function() {
    if (i==2&&s1==1&&s2==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==6)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==1&&s2==8)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==1)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==2&&s2==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==2&&s2==6)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==2&&s2==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==2&&s2==8)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==3&&s2==1)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==3&&s2==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==3&&s2==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==3&&s2==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==1)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==4&&s2==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==4&&s2==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==4&&s2==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==4&&s2==8)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==5&&s2==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==5&&s2==6)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==5&&s2==8)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==1)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==6&&s2==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==1)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==7&&s2==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==7&&s2==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=3;
    }
    if (i==2&&s1==8&&s2==1)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==2&&s1==8&&s2==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s3=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p1').click(function() {
    if (i==3&&s1==2&&s2==6&&s3==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==2&&s2==9&&s3==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==3&&s2==7&&s3==6)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==3&&s2==9&&s3==4)
    {
    $(`.x1`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==4&&s2==8&&s3==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==4&&s2==9&&s3==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==6&&s2==2&&s3==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==6&&s2==9&&s3==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==9&&s3==2)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==8&&s2==4&&s3==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==8&&s2==9&&s3==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==2&&s3==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==9&&s2==3&&s3==4)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==4&&s3==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=4;
    }
    if (i==3&&s1==9&&s2==6&&s3==7)
    {
    $(`.x1`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==8&&s3==3)
    {
    $(`.x1`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c1`).attr("id", "inactive");
    s4=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p2').click(function() {
    if (i==3&&s1==1&&s2==6&&s3==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==3&&s2==4&&s3==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==3&&s2==7&&s3==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==3&&s3==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==4&&s2==6&&s3==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==7&&s3==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==4&&s2==8&&s3==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==3&&s3==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==5&&s2==6&&s3==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==5&&s2==9&&s3==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==6&&s2==1&&s3==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==6&&s2==4&&s3==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==7&&s3==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==6&&s2==8&&s3==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==9&&s3==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==7&&s2==1&&s3==6)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==7&&s2==4&&s3==9)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==7&&s2==6&&s3==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==7&&s2==8&&s3==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==4&&s3==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==6&&s3==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==7&&s3==1)
    {
    $(`.x2`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==9&&s3==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==1&&s3==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==3&&s3==4)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==9&&s2==4&&s3==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==9&&s2==6&&s3==7)
    {
    $(`.x2`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=4;
    }
    if (i==3&&s1==9&&s2==8&&s3==3)
    {
    $(`.x2`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c2`).attr("id", "inactive");
    s4=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p3').click(function() {
    if (i==3&&s1==1&&s2==7&&s3==6)
    {
    $(`.x3`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==1&&s2==9&&s3==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==2&&s2==4&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==2&&s2==7&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==2&&s2==8&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==2&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==4&&s2==6&&s3==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==7&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==2&&s3==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==6)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==2&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==4&&s3==2)
    {
    $(`.x3`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==8)
    {
    $(`.x3`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==5&&s2==9&&s3==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==6&&s2==7&&s3==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==7&&s2==1&&s3==6)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==2&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    } if (i==3&&s1==7&&s2==4&&s3==9)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==6&&s3==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==7&&s2==8&&s3==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==6&&s3==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==8&&s2==7&&s3==1)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==1&&s3==4)
    {
    $(`.x3`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
    if (i==3&&s1==9&&s2==7&&s3==2)
    {
    $(`.x3`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c3`).attr("id", "inactive");
    s4=3;
    i=4;
    }
  });
  $('.p4').click(function() {
    if (i==3&&s1==1&&s2==3&&s3==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==1&&s2==8&&s3==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==1&&s2==9&&s3==8)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==3&&s3==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==2&&s2==6&&s3==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==2&&s2==7&&s3==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==2&&s2==8&&s3==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==9&&s3==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==3&&s2==2&&s3==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==3&&s2==6&&s3==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==3&&s2==8&&s3==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==2&&s3==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==5&&s2==7&&s3==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==5&&s2==8&&s3==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==6&&s2==3&&s3==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==8&&s3==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==9&&s3==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==2&&s3==9)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==7&&s2==3&&s3==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==7&&s2==9&&s3==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==8&&s2==1&&s3==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==8&&s2==2&&s3==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==3&&s3==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==8&&s2==6&&s3==1)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==9&&s3==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==9&&s2==2&&s3==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==9&&s2==6&&s3==7)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==7&&s3==2)
    {
    $(`.x4`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
    if (i==3&&s1==9&&s2==8&&s3==3)
    {
    $(`.x4`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c4`).attr("id", "inactive");
    s4=4;
    i=4;
    }
  });
  $('.p6').click(function() {
    if (i==3&&s1==1&&s2==2&&s3==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==1&&s2==4&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==1&&s2==8&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==1&&s2==9&&s3==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==1&&s3==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==2&&s2==7&&s3==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==2&&s2==8&&s3==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==9&&s3==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==3&&s2==1&&s3==8)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==3&&s2==8&&s3==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==4&&s2==1&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==2&&s3==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==4&&s2==7&&s3==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==8&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==2&&s3==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==7&&s2==3&&s3==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==7&&s2==4&&s3==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==8&&s3==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==7&&s2==9&&s3==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==8&&s2==1&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==8&&s2==2&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==3&&s3==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==8&&s2==4&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==8&&s2==7&&s3==1)
    {
    $(`.x6`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==9&&s2==2&&s3==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==9&&s2==7&&s3==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==2&&s3==7)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==9)
    {
    $(`.x6`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==7&&s3==2)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=4;
    }
    if (i==3&&s1==5&&s2==8&&s3==3)
    {
    $(`.x6`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c6`).attr("id", "inactive");
    s4=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p7').click(function() {
    if (i==3&&s1==1&&s2==3&&s3==8)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==3&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==4&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==3&&s2==1&&s3==8)
    {
    $(`.x7`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==3&&s2==2&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==3&&s2==4&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==3&&s2==6&&s3==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==3&&s2==8&&s3==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==3&&s2==9&&s3==4)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==2&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==4&&s2==3&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==4)
    {
    $(`.x7`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==6)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==2)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==8)
    {
    $(`.x7`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==4&&s3==9)
    {
    $(`.x7`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==3&&s3==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==8&&s3==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==8&&s2==3&&s3==1)
    {
    $(`.x7`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=4;
    }
    if (i==3&&s1==9&&s2==3&&s3==4)
    {
    $(`.x7`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c7`).attr("id", "inactive");
    s4=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p8').click(function() {
    if (i==3&&s1==1&&s2==2&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==1&&s2==4&&s3==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==1&&s2==6&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==1&&s2==7&&s3==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==2&&s2==1&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==3&&s3==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==4&&s3==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==3&&s2==2&&s3==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==3&&s2==4&&s3==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==3&&s2==6&&s3==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==3&&s2==7&&s3==6)
    {
    $(`.x8`).toggleClass('active');
    $(`.c1`).toggleClass('active');
    $(`.x1`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==3&&s2==9&&s3==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==4&&s2==1&&s3==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==4&&s2==3&&s3==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==4&&s2==6&&s3==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==9&&s3==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==5&&s2==3&&s3==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==4&&s3==9)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==6&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==9&&s3==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==6&&s2==1&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==6&&s2==2&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c9`).toggleClass('active');
    $(`.x9`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==6&&s2==3&&s3==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==6&&s2==4&&s3==7)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==7&&s3==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==7&&s2==6&&s3==1)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
    if (i==3&&s1==9&&s2==1&&s3==4)
    {
    $(`.x8`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==9&&s2==4&&s3==3)
    {
    $(`.x8`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c8`).attr("id", "inactive");
    s4=8;
    i=4;
    }
  });
  $('.p9').click(function() {
    if (i==3&&s1==1&&s2==2&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==1&&s2==3&&s3==8)
    {
    $(`.x9`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==1&&s2==4&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==1&&s2==6&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==1&&s2==7&&s3==6)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==1&&s2==8&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==2&&s2==1&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==2&&s2==6&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==3&&s2==1&&s3==8)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==4&&s2==1&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==2&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==2&&s3==4)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==5&&s2==2&&s3==6)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==4&&s3==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c7`).toggleClass('active');
    $(`.x7`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==5&&s2==4&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==4&&s3==8)
    {
    $(`.x9`).toggleClass('active');
    $(`.c3`).toggleClass('active');
    $(`.x3`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==6&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==5&&s2==7&&s3==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==5&&s2==8&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==6&&s2==1&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==6&&s2==2&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c8`).toggleClass('active');
    $(`.x8`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==6&&s2==4&&s3==7)
    {
    $(`.x9`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==1&&s3==6)
    {
    $(`.x9`).toggleClass('active');
    $(`.c2`).toggleClass('active');
    $(`.x2`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
    if (i==3&&s1==7&&s2==3&&s3==2)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==8&&s2==1&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c6`).toggleClass('active');
    $(`.x6`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=4;
    }
    if (i==3&&s1==8&&s2==2&&s3==3)
    {
    $(`.x9`).toggleClass('active');
    $(`.c4`).toggleClass('active');
    $(`.x4`).attr("id", "inactive");
    $(`.c9`).attr("id", "inactive");
    s4=9;
    i=-1;
    document.getElementById("result").innerHTML =  "Вы проиграли.";
    }
  });
  $('.p1').click(function() {
    if (i==4&&s1!=1&&s2!=1&&s3!=1&&s4!=1)
    {
    $(`.x1`).toggleClass('active');
    $(`.c1`).attr("id", "inactive");
    s5=1;
    i=-1;
    document.getElementById("result").innerHTML =  "Ничья.";
    }
  });
  $('.p2').click(function() {
    if (i==4&&s1!=2&&s2!=2&&s3!=2&&s4!=2)
    {
    $(`.x2`).toggleClass('active');
    $(`.c2`).attr("id", "inactive");
    s5=2;
    i=-1;
    document.getElementById("result").innerHTML =  "Ничья.";
    }
  });
  $('.p3').click(function() {
    if (i==4&&s1!=3&&s2!=3&&s3!=3&&s4!=3)
    {
    $(`.x3`).toggleClass('active');
    $(`.c3`).attr("id", "inactive");
    s5=3;
    i=-1;
    document.getElementById("result").innerHTML =  "Ничья.";
    }
  });
  $('.p4').click(function() {
    if (i==4&&s1!=4&&s2!=4&&s3!=4&&s4!=4)
    {
    $(`.x4`).toggleClass('active');
    $(`.c4`).attr("id", "inactive");
    s5=4;
    i=-1;
    document.getElementById("result").innerHTML =  "Ничья.";
    }
  });
  $('.p6').click(function() {
    if (i==4&&s1!=6&&s2!=6&&s3!=6&&s4!=6)
    {
    $(`.x6`).toggleClass('active');
    $(`.c6`).attr("id", "inactive");
    s5=6;
    i=-1;
    document.getElementById("result").innerHTML =  "Ничья.";
    }
  });
  $('.p7').click(function() {
    if (i==4&&s1!=7&&s2!=7&&s3!=7&&s4!=7)
    {
    $(`.x7`).toggleClass('active');
    $(`.c7`).attr("id", "inactive");
    s5=7;
    i=-1;
    document.getElementById("result").innerHTML =  "Ничья.";
    }
  });
  $('.p8').click(function() {
    if (i==4&&s1!=8&&s2!=8&&s3!=8&&s4!=8)
    {
    $(`.x8`).toggleClass('active');
    $(`.c8`).attr("id", "inactive");
    s5=8;
    i=-1;
    document.getElementById("result").innerHTML =  "Ничья.";
    }
  });
  $('.p9').click(function() {
    if (i==4&&s1!=9&&s2!=9&&s3!=9&&s4!=9)
    {
    $(`.x9`).toggleClass('active');
    $(`.c9`).attr("id", "inactive");
    s5=9;
    i=-1;
    document.getElementById("result").innerHTML =  `Ничья.`;
    }
  });
  $('.strelka').click(function() {
    location.reload();
  });

  