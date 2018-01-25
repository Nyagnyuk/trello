var container = document.getElementById("container"),
	addListBtn = document.getElementById('add-list'),
	saveListBox = document.getElementById('save-list-box'),
	listInputBox = document.getElementById('list-input-box'),
	saveListBtn = document.getElementById('save-list-btn'),
	textValue,
    y=0,
    i=0;

function createElem(tag){
    var elem = document.createElement(tag);
    // elem.className = 'tag';
    return elem;    
}

function append(elem, next){
    next.appendChild(elem);
}

function addSaveList(){
	addListBtn.style.display = "none";
	saveListBox.style.display = "inline-block";
}

function createList(textValue){
	 if (textValue) {
        var parentDiv = createElem("div"),
            listTitle = createElem("div"),
            title = createElem("div"),
            newTextNode = document.createTextNode(textValue),
            addCardLink = createElem("a"),
            addText = document.createTextNode("Add a card..."),
            addForm = createElem("form"),
            wrapperForm = createElem("div"),
            addTextarea = createElem("textarea"),
            addInputForm = createElem("input"),
            trello_text,
            taskTextNode,
            textarea_text
            ;
        }
            parentDiv.setAttribute("class", "add-card-container");
            parentDiv.setAttribute("draggable", "true");
            parentDiv.setAttribute("id", "list-container" + y);
            title.setAttribute("contenteditable", "true");
            title.setAttribute("class", "text");
            append(newTextNode,title);
            listTitle.setAttribute("class", "list-title");
            append(title, listTitle);
            addCardLink.setAttribute("href", "#");
            addCardLink.setAttribute("class", "add-card");
            addCardLink.setAttribute("id", "add" + y);
            append(addText, addCardLink);
            parentDiv.style.cssFloat = "left";
            parentDiv.style.display = "inline-block";
            append(listTitle, parentDiv);
            append(addCardLink, parentDiv);
            append(addForm, parentDiv);
            append(wrapperForm, addForm);


            addForm.setAttribute("class", "form")
            addForm.setAttribute("id", "form" +y)
            wrapperForm.setAttribute("class", "wrapper_form");
            append(addTextarea, wrapperForm);
            addTextarea.setAttribute("class", "trello_textarea");
            addTextarea.setAttribute("id", "trello_text" +y);
            append(addInputForm, wrapperForm);
            addInputForm.setAttribute("class", "trello_button");
            addInputForm.setAttribute("id", "trello_btn"+y);
            addInputForm.setAttribute("type", "submit");
            addInputForm.setAttribute("value", "Add");

            container.insertBefore(parentDiv, addListBtn);
            addListBtn.style.display = "inline-block";
            saveListBox.style.display = "none";
            listInputBox.value = "";

       var  delList = createElem("span"),
            delListText = document.createTextNode("x");
            append(delListText, delList); 
            delList.setAttribute("id", "imgList" + y);
            delList.setAttribute("class", "dellist");
            append(delList, listTitle);     

    document.getElementById("add" + y).addEventListener('click', function(event){
                addform();   
    });
    document.getElementById("trello_btn"+y).addEventListener('click', function(event){
                addtasks(); 
                i++; 
    });

     document.getElementById("imgList" + y).addEventListener('click',function(){
               parentDiv.remove();
    });

    y++;
}


function  addtasks(){
   
var list = event.target.parentNode.parentNode.parentNode.querySelector('.list-title');
var form = event.target.parentNode.parentNode;
var area =event.target.parentNode.querySelector('.trello_textarea');

trello_text = event.target.parentNode.firstChild.value;

    if(trello_text){               

         var wrap_list_add = createElem("div"); 
            append(wrap_list_add, list);
            wrap_list_add.setAttribute("id", "wrap_list_add" + i);
            wrap_list_add.setAttribute("class", "wrap_list_add" );

          var taskDiv = createElem("div");
            taskTextNode = document.createTextNode(trello_text) ; 
            append(taskTextNode, taskDiv);  
            taskDiv.setAttribute("id", "list-add" + i);
            taskDiv.setAttribute("class", "list-add");
            taskDiv.setAttribute("contenteditable", "true");
            append(taskDiv, wrap_list_add);  

        var delImg = createElem("span"),
            delImgText = document.createTextNode("x");
            append(delImgText, delImg); 
            delImg.setAttribute("id", "img" + i);
            delImg.setAttribute("class", "delspan");
            append(delImg, wrap_list_add); 


            form.classList.toggle('form_display');
            area.value='';
	

    }

    document.getElementById("img" + i).addEventListener('click',function(){
            wrap_list_add.remove();
    });
};

function addform(){
            var d = event.target.parentNode.lastChild;
            d.classList.toggle('form_display');

};


addListBtn.addEventListener('click', function(){
       addSaveList();
}) 

saveListBtn.addEventListener("click", function () {
        textValue = listInputBox.value;
        createList(textValue);
});



//drag

function dragstart(event){
    if(event.target.draggable !== true){
        return;
    }
}
function dragend(event){
    if(event.target.draggable !== true){
        return;
    }
}
function drag(event){
    if(event.target.draggable !== true){
        return;
    }
}
function dragenter(event){

}
function dragleave(event){

}
function drop(event){

}
function dragover(event){
    
}
