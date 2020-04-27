/**
 * @param {string} selector CSS selector
 * @returns {(Node | null)} Unique Node or null
 * @throws When selector finds more than one Nodes
 */
function getElement(selector) {
    const nodeList = document.querySelectorAll(selector);

    if (nodeList.length > 1) {
        throw new Error(
            'More than one element found that matches the selector "'
            + selector + '". Please provide a more specific selector.'
        );
    }

    return nodeList[0] || null;
}

/**
 * @param {Node} node 
 */
function click(node) {
    dispatchMouseEvent(node, 'click');
}

/**
 * @param {Node} node 
 */
function naturalClick(node) {
    dispatchMouseEvent(node, 'mouseover');
    dispatchMouseEvent(node, 'mousedown');
    dispatchMouseEvent(node, 'mouseup');
    dispatchMouseEvent(node, 'click');
}

/**
 * @param {Node} node 
 * @param {string} mouseEventType E.g. 'mouseup', 'mousedown'
 */
function dispatchMouseEvent(node, mouseEventType) {
    node.dispatchEvent(
        new MouseEvent(mouseEventType)
    );
}

/**
 * Type into an input box.
 * Emits 'change' event.
 * 
 * @param {Node} inputNode 
 * @param {(number|string|boolean|null)} value 
 */
function type(inputNode, value) {
    inputNode.value = value;
    inputNode.dispatchEvent(
        new Event('change')
    );
}

/**
 * 
 * @param {Node} selectNode 
 * @param {*} option 
 * @throws When there are no options with that value
 */
function selectDropdownValue(selectNode, optionValue) {
    const optionsCount = select.options.length;
    let hasOptionValue = false;

    for (let i = 0; i < optionsCount; i++) {
        if (optionValue === select.options[i].value) {
            hasOptionValue = true;
            break;
        }
    }

    if (!hasOptionValue) {
        throw new Error(
            'No option found with value "' + optionValue
            + '". Please select an available option.'
        );
    }

    selectNode.value = optionValue;
    selectNode.dispatchEvent(
        new Event('change')
    );
}

/**
 * 
 * @param {Node} selectNode 
 * @param {*} option 
 * @throws When there are no options at that index
 */
function selectDropdownIndex(selectNode, optionIndex) {
    const maxIndex = select.options.length - 1

    if (optionIndex > maxIndex) {
        throw new Error(
            'No option found at index "' + optionIndex
            + '". Please select an available option at an index between '
            + '0 and ' + maxIndex + '.'
        );
    }

    selectNode.options.selectedIndex = optionIndex;
    selectNode.dispatchEvent(
        new Event('change')
    );
}

/**
 * @param {Node} selectNode 
 */
function clearDropdown(selectNode) {
    selectNode.value = null;
}