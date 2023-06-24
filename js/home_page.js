let keyword =document.querySelector('.keyword');//获取输入框
let searchHleper=document.querySelector('.search-hleper');//获取下拉列表
//定义数组
let searchArr=['NBA湖人队','NBA勇士队','NBA太阳队','NBA凯尔特人','NBA詹姆斯','NBA库里','欧文','杜兰特','保罗','乔治','德文布克','小卡'];


keyword.oninput=function(){
    searchHleper.innerHTML=-'';
    for (let i = 0;i< searchArr.length; i++)   
    {
      if(searchArr[i].indexOf(keyword.value)!=-1){
        searchHleper.innerHTML+='<p>'+searchArr[i]+"</p>";
        searchHleper.style.display='block';
      }
    }
    }

    keyword.onblur=function(){
        searchHleper.style.display='none';
    }

    //实现轮播图功能切换
    let  img=document.querySelector('.image01');
    let  next=document.querySelector('.next');
    let  prev=document.querySelector('.prev');
    let  slide=document.querySelector('.slide');
    
    let imgArr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']

    let count=0;
    //定义函数，切换图片路径
    function cuting(){
        img.src='./image/'+imgArr[count];
    }
    //每3秒，切换图片
 let timer=setInterval(
        function(){
            count++;
            if(count>imgArr.length-1)
            count=0;
            cuting();
        }
    ,3000);

    //点击下一张
    next.onclick=function(){
        count++;
        if(count>imgArr.length-1)
            count=0;
            cuting();  
    }

    //点击上一张
    prev.onclick=function(){
        count--;
        if(count<0)
            count=imgArr.length-1;
            cuting();  
    }

    slide.onmouseover=function(){
        clearInterval(timer);
    }

    slide.onmouseout=function(){
        timer=setInterval(
            function(){
                count++;
                if(count>imgArr.length-1)
                count=0;
                cuting();
            }
        ,3000);
    }

