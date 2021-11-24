for (let li of list.querySelectorAll('li')) {
    let div = document.createElement('div');
    div.classList.add('show'); 
    li.prepend(div); 
    div.append(div.nextSibling) 
}
list.onclick = function(event) {
    if (event.target.tagName != 'DIV') return;

    let childrenList = event.target.parentNode.querySelector('ul');
    if (!childrenList) return;
    childrenList.hidden = !childrenList.hidden;

    if (childrenList.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }

    else {
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
}    
