
function multiplyColumns(node, count) {
    for (let index = 0, copy; index < count-1; index++) {
        copy = node.cloneNode(true);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyColumns(document.querySelector('.column'), 4)

