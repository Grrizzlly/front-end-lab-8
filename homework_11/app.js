var rootNode = document.getElementById("root");



function createTree(struc) {
    var ul = document.createElement('ul');
    for (var i = 0; i < struc.length; i++) {
        var li = document.createElement('li');
        var ii = document.createElement('i');
        var p = document.createElement('p');
        var span = document.createElement('span');
        if (struc[i].folder) {
            ul.appendChild(li);
            li.setAttribute('class', 'folder');
            
            

        
            li.appendChild(p);
            p.appendChild(ii);
            p.setAttribute('class', 'folderName');
            p.appendChild(document.createTextNode(struc[i].title));

            ii.setAttribute('class', 'material-icons');
            ii.appendChild(document.createTextNode('folder'));
            
          
            if (struc[i].children) {
                li.appendChild(createTree(struc[i].children));
            } else {
                li.appendChild(span);
                span.appendChild(document.createTextNode('Folder is empty'));
               
            }

        } else {
            ul.appendChild(li);
            li.setAttribute('class', 'file');
            li.appendChild(p);
            p.appendChild(ii);
            p.appendChild(document.createTextNode(struc[i].title));
            ii.setAttribute('class', 'material-icons');
            ii.appendChild(document.createTextNode('insert_drive_file'));
        }
    }
    return ul;
}
rootNode.appendChild(createTree(structure));


var folderName = document.querySelectorAll('.folderName');
if (folderName) {
  folderName.forEach(function(elem) {
    elem.addEventListener('click', function(elem) {
      elem.target.parentNode.classList.toggle('open');
      var icon = elem.target.querySelector('.material-icons');
      icon.textContent = icon.textContent === 'folder_open' ? icon.textContent = 'folder' : icon.textContent = 'folder_open';})})
}