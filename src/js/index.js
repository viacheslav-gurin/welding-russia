var dragSouceElement = null;

function handleDragStart(event) {
    var dragIcon = document.createElement('img');
    dragIcon.src = 'src/img/logo_small.png';
    dragIcon.width = 30;
    event.dataTransfer.setDragImage(dragIcon, -10, -10);
    dragSouceElement = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(event) {
    this.classList.add('dashed-border');    
}
  
function handleDragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
      }
    
      event.dataTransfer.dropEffect = 'move';
      return false;
}
  
function handleDragLeave(event) {
    this.classList.remove('dashed-border'); 
}
  
function handleDrop(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }

    if (dragSouceElement != this) {
        dragSouceElement.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html');
    }

    return false;
}
  
function handleDragEnd(event) {
    [].forEach.call(items, function(item) {
        item.classList.remove('dashed-border');
    });
}
  
var items = document.querySelectorAll('.goods-item');
[].forEach.call(items, function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
});
