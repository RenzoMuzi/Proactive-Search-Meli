(function(){ document.getElementById("bBusqueda").addEventListener("click", function (){ pagination(getInputs(), getItems) });

function getInputs(){
    var urlReq = 'https://api.mercadolibre.com/sites/MLU/search?q=iphone';
    return urlReq
}



function pagination (urlCall, getItems){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlCall, true);
    xhttp.onload = function () {
        //Begin accessing JSON data here
        var data = JSON.parse(this.response);
        console.log(data);

       //how many pages for 50 items
        console.log(data.paging.total);
        var pages = Math.trunc(data.paging.total / data.paging.limit);
        if ((data.paging.total % data.paging.limit) > 0) {
            pages++
        }
        console.log(pages);
         
        //create each pages of pagination
        for (var i = 1; i <= pages; i++) {
            //creating navBar
            //create documentFragment
            var fragBar = document.createDocumentFragment();
  
            //create <li>
            var elemLi = document.createElement("li");
            elemLi.setAttribute("class", "nav-item");
          
            //create <a>
            var elemAn = document.createElement("a");
            if (i == 1) {
                elemAn.setAttribute("class", "nav-link active");    
                elemAn.setAttribute("aria-selected", "true");
            } else {
                elemAn.setAttribute("class", "nav-link");   
                elemAn.setAttribute("aria-selected", "false"); 
            }
            elemAn.setAttribute("id", "page" + i + "-tab");
            elemAn.setAttribute("data-toggle", "tab");
            elemAn.setAttribute("href", "#page" + i);
            elemAn.setAttribute("role", "tab");
            elemAn.setAttribute("aria-controls", "page" + i);
            elemAn.innerHTML = i;           
  
            //appendingChilds 
            elemLi.appendChild(elemAn);
            fragBar.appendChild(elemLi);
            document.getElementById("myTab").appendChild(fragBar);
        
            //creating Content divs for navBar
            //create documentFragment
            var fragContent = document.createDocumentFragment();
  
            //create <div> 
            var divContent = document.createElement("div");
            if (i == 1) {
                divContent.setAttribute("class", "tab-pane fade active show");
            } else {
                divContent.setAttribute("class", "tab-pane fade");
            }        
            divContent.setAttribute("id", "page" + i);
            divContent.setAttribute("role", "tabpanel");
            divContent.setAttribute("aria-labelledby", "page" + i + "-tab");
  
            //appendingChilds
            fragContent.appendChild(divContent);
            document.getElementById("myTabContent").appendChild(fragContent);
            
            //get the items, the content for divContent
            getItems(i, urlCall);
        }      
    };
    xhttp.send();
}
})(); 

