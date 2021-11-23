for (let li of list.querySelectorAll('li')) {
    let div = document.createElement('div'); /* создание span */
    div.classList.add('show'); /* добавление класса для span */
    li.prepend(div); /* вставить span внутри li */
    div.append(div.nextSibling) /* присоединить к span следующий узел */
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
