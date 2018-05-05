function getItems (numPage, prevCall){
    var numSet = 50*(numPage - 1);
    var nextCall = prevCall + "&offset=" + numSet + "&limit=50";
    var idPage = "page" + numPage + "-tab";
    var pageX = document.getElementById(idPage);
    pageX.addEventListener("click", function () { 
        
        //new request with new set
        var request = new XMLHttpRequest();
        request.open('GET', nextCall, true);
        request.onload = function () { 
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);

            // Output of every item 
            //create documentFragment
            var fragList  = document.createDocumentFragment();

            //create <div> 
            var divList = document.createElement("div");
            divList.setAttribute("class", "list-group");
            divList.setAttribute("role", "tablist");

            //create item features
            cont = numSet;
            data.results.forEach(item => {
                cont++

                //create link <A></A> Container
                var elemItem = document.createElement("a");
                elemItem.setAttribute("class", "list-group-item list-group-item-action");
                //elemItem.setAttribute("data-toggle", "list");
                elemItem.setAttribute("role", "tab");
                elemItem.setAttribute("href", item.permalink);
                elemItem.setAttribute("target", "_blank");
      
                //creat div Container with rows
                var divContainer = document.createElement("div");
                divContainer.setAttribute("class", "container");

                var divCol1 = document.createElement("div");
                divContainer.setAttribute("class", "col");
                
                var divCol2 = document.createElement("div");
                divContainer.setAttribute("class", "col-5");

                var divCol3 = document.createElement("div");
                divContainer.setAttribute("class", "col");

                //create thumbnail IMAGE
                var thumbImg = document.createElement("img");
                thumbImg.setAttribute("class", "img-thumbnail img-responsive");
                thumbImg.src = item.thumbnail;

                //create p TTTLE
                var titleItem = document.createElement("p");
                titleItem.setAttribute("class", "mb-1 text-center");
                titleItem.innerHTML = item.title;
                titleItem.style.display = "inline";
                
                //creat H3 PRICE
                var priceItem = document.createElement("h1");
                priceItem.setAttribute("class", "display-4");
                priceItem.innerHTML = item.price;

                //appends elements
                divCol1.appendChild(thumbImg)
                divCol2.appendChild(titleItem);
                divCol3.appendChild(priceItem);

                divContainer.appendChild(divCol1);
                divContainer.appendChild(divCol2);
                divContainer.appendChild(divCol3);

                elemItem.appendChild(divContainer);
                divList.appendChild(elemItem);
            });
            fragList.appendChild(divList);

            //esto cambiarlo por appendchild a ese div
            var divXcontent = document.getElementById("page" + numPage);
            divXcontent.appendChild(fragList);
        };
        request.send();
    });
}
