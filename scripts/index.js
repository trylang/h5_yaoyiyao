
function fn_activePage(index){
  var $pageList = document.querySelectorAll('div.page');
  for(var j = 0; j < $pageList.length; j++){
    $pageList[j].className = $pageList[j].className.replace('active', '');
  }
  $pageList[index].className = $pageList[index].className.replace('page', 'page active')
}


var $navList = document.querySelectorAll('span.nav');

for(var i = 0; i < $navList.length; i++){
  !function(index){
    $navList[index].onclick=function(){
      fn_activePage(index)
    };
  }(i)
}

fn_activePage(3);

