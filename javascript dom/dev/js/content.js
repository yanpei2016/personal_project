
checkOnLoad(addClick);
checkOnLoad(appendFigure);
checkOnLoad(ajax_send);

function addClick(){
    //向后兼容  老的浏览器对方法的兼容
    if(!document.getElementById){
        return false
    }
    if(!document.getElementsByTagName){
        return false
    }
    var liList = document.getElementsByTagName("a"),
        len = liList.length;
    for(var i = 0;i < len ;i++){
        liList[i].onclick = function () {
            showPic(this);
            return false
        }
    }
}

function showPic(pic) {
    var _pic = pic,
        _href = _pic.getAttribute("href"),
        _title = _pic.getAttribute("title"),
        _targetName = document.getElementById("pic_name"),
        _targetImg = document.getElementById("default");
    _targetImg.setAttribute("src",_href);
    // _targetName.childNodes[0].nodeValue = _title; 代码里面的每一个元素都是一个节点
    _targetName.firstChild.nodeValue = _title;
}

function appendFigure() {
    var _figCaption =  document.createElement("figcaption"),
        _img = document.createElement("img"),
        _text1 = document.createTextNode("图片名称"),
        _figure = document.getElementById("figure");
    _figCaption.setAttribute("id","pic_name");
    _figCaption.appendChild(_text1);
    _img.setAttribute("src","../images/default.jpg");
    _img.setAttribute("alt","iColor");
    _img.setAttribute("id","default");

    _figure.appendChild(_figCaption);
    _figure.appendChild(_img);
}

/*实用自定义函数*/
//在指定元素后面插入元素
function insertAfter(newElement,targetElement) {
    var _newElement = newElement,
        _targetElement = targetElement,
        _parentNode = _targetElement.parentNode;
    if(_parentNode.lastChild == _targetElement){
        _parentNode.appendChild(_newElement)
    }else{
        _parentNode.insertBefore(_newElement,_targetElement.nextSibling     )
    }
}

// 完档加载完成之后才能执行函数
//判断window.onload对象是否被占用  兼容
function checkOnLoad(fun) {
    var oldLoad = window.onload;
    if(typeof window.onload != "function"){
        //未被占用
        window.onload = fun()
    }else{
        //被占用   重新定义onload函数
        window.onload = function(){
            oldLoad();
            fun()
        }
    }
}

//h5 新属性

/*
* video
*
* */



//XMLHttpRequest  兼容处理
//ie5 , ie6浏览器  ActiveXObject对象  创建ajax请求
//ie7+ 其他浏览器  XMLHttpRequest  对象  创建ajax请求
function getXMLHttpRequest() {
    if(window.XMLHttpRequest){
        return new XMLHttpRequest()
    }else{
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
}

//创建ajax请求 同域请求
function ajax_send() {
    var xhr = getXMLHttpRequest();
    if(xhr){
        xhr.open("GET","../html/example.txt",true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4){
                //转状态值为4  表示服务器有数据返回
                console.log(xhr.response);
                var p = document.createElement("p"),
                    text = document.createTextNode(xhr.response);
                p.appendChild(text);
                document.getElementById("ajax").appendChild(p);
            }
        };
        xhr.send()
    }else{
        alert("sorry ajax is not support")
    }
}

