/**
 * Created by arenduchintala on 5/20/15.
 */
var rootPhraseNode;

function ready() {
    var sentence = "this is a test sentence";
    var phraseTreeStr = "(S (NP (I)) (VP (V (saw)) (X (him))))";
    var phraseTreeStr = "(since_their_articles_appeared_,_the_price_of_gold_has_moved_up_still_further. (since_the_publication_of_their_article,_the_gold_price_has_risen_still_further (since (seit)) (the_publication_of_their_article,_the_gold_price_has_risen_still_further (the_publication_of_their_article,_the_gold_price_is_risen_still_further (the_publication_of_their_article (the_publication (the (der)) (publication (Veröffentlichung)) ) (their_article (their (ihrer)) (article (Artikel))))(the_gold_price_is_risen_still_further (the_gold_price_is (is (ist)) (the_gold_price (the (der)) (gold_price (Goldpreis)))) (risen_still_further (still_further (still (noch)) (further (weiter))) (risen (gestiegen))))))) (. (.)))"
    rootPhraseNode = parsePhraseTree(phraseTreeStr);
    var phraseLeaves = getleaves(rootPhraseNode);
    console.log("done...");
    showsent(phraseLeaves);
}
function removeEmptyStrings(val) {
    return !(val == "" || val == " ");
}
function getleaves(rootPhraseTree) {
    var _stack = [];
    var leaves = [];
    var pn;
    _stack.push(rootPhraseTree);
    while (_stack.length > 0) {
        pn = _stack.pop();
        if (pn.phraseChildren.length == 0) {
            leaves.push(pn);
        } else {
            for (var i = pn.phraseChildren.length - 1; i > -1; i--) {
                var c = pn.phraseChildren[i];
                _stack.push(c);
            }
        }
    }
    return leaves;
}
function parsePhraseTree(phraseTreeStr) {
    //"1、2、3".split(/()/g) == ["1", "、", "2", "、", "3"]
    var _phraseTreeList = phraseTreeStr.replace(/\s\s+/g, ' ').split(/(\(|\)|\s)/g).filter(removeEmptyStrings)
    //console.log(_phraseTreeList);
    _phraseTreeList.pop();
    _phraseTreeList.shift(); //discard outter brackets
    var _stack = [];
    var item, nextItem, pn, toppn, rootpn;
    nextItem = _phraseTreeList.shift()
    pn = new PhraseNode(nextItem, null);
    _stack.push(pn);

    while (_stack.length > 0 && _phraseTreeList.length > 0) {
        item = _phraseTreeList.shift()
        if (item == "(") {
            nextItem = _phraseTreeList.shift()
            toppn = _stack[_stack.length - 1];
            pn = new PhraseNode(nextItem, toppn);
            toppn.addPhraseChild(pn);
            _stack.push(pn);
        } else if (item == ")") {
            rootpn = _stack.pop();
            for (var c = 0; c < rootpn.phraseChildren.length; c++) {
                var pc = rootpn.phraseChildren[c];
                pc.setPhraseSiblings(rootpn.phraseChildren);
            }
            //rootpn = _stack[_stack.length - 1];
            //toppn = _stack[_stack.length - 1];
            //toppn.addPhraseChild(pn);
        } else {
            console.log("should never come here now.....");
            toppn = _stack[_stack.length - 1];
            pn = new PhraseNode(item, toppn);
            toppn.addPhraseChild(pn);
            _stack.push(pn);
        }
    }
    rootpn = _stack.pop();
    for (var c = 0; c < rootpn.phraseChildren.length; c++) {
        var pc = rootpn.phraseChildren[c];
        pc.setPhraseSiblings(rootpn.phraseChildren);
    }
    return rootpn;
}

function spanClicked(e) {
    console.log("a span has been clicked:" + e.target.id);
    var tablenum = e.target.id.split(",")[1];
    var wordTable = document.getElementById(tablenum);
    var pn = wordTable.phraseNode;
    var rownum = parseInt(e.target.id.split(",")[2]);
    if (rownum == 0) {
        console.log("phrase: " + pn.phrase + "clicked, go up to parent");
        goUpToParent(wordTable);
    } else {
        var pn = wordTable.phraseNode;
        console.log("phrase: " + pn.phrase + "clicked, go down to children")
        goDonwToChildren(wordTable);

    }
    unhighlight(e);
    e.stopPropagation();
}
function highlight(e) {
    console.log("a span has been hovered over:" + e.target.id);
    //e.target.style.opacity = 0.5
    //e.target.style.backgroundColor = "grey"
    var tablenum = e.target.id.split(",")[1];
    var rownum = parseInt(e.target.id.split(",")[2]);
    var wordTable = document.getElementById(tablenum);
    wordTable.lightHighlight(rownum);
    /*for (var c = 0; c < wordTable.phraseNode.phraseSiblings.length; c++) {
     wordTable.phraseNode.phraseSiblings[c].wordTable.lightHighlight(rownum);
     }*/
    if (rownum == 0) {
        previewParent(e, wordTable);
    } else {
        previewChildren(e, wordTable);
    }


}

function previewChildren(e, wordTable) {
    var previewDiv = document.getElementById("previewOverlay")
    if (previewDiv != null) {
        $("body").removeChild(previewDiv);
    }

    if (wordTable.phraseNode.phraseChildren.length > 0) {
        previewDiv = document.createElement("div")
        previewDiv.id = "previewOverlay";
        previewDiv.style.border = "1px solid black";
        for (var i = 0; i < wordTable.phraseNode.phraseChildren.length; i++) {
            var pn = wordTable.phraseNode.phraseChildren[i];
            var previewSpan = document.createElement("span")
            previewSpan.style.border = "1px solid black";
            previewSpan.innerHTML = pn.phrase
            previewDiv.appendChild(previewSpan)
        }
        $("body").append(previewDiv);
        var elem = $(previewDiv);
        var jtd = $(e.currentTarget)
        var pos = jtd.offset()
        console.log("mouse over box location is" + 0 + "," + 0)
        elem.css({
            position: 'absolute',
            top: pos.top,
            left: pos.left,
            zIndex: -1
        });
    } else {
        console.log("phrase node:" + wordTable.phraseNode.phrase + " has no children");
    }
}

function previewParent(e, wordTable) {

    var parentPhraseNode = wordTable.phraseNode.parent;
    var firstChild = false
    if (wordTable.phraseNode == wordTable.phraseNode.phraseSiblings[0]) {
        firstChild = true

    } else {
        firstChild = false

    }


    var previewDiv = document.getElementById("previewOverlay")
    if (previewDiv != null) {
        $("body").removeChild(previewDiv);
    }
    previewDiv = document.createElement("div")
    previewDiv.style.border = "1px solid black";
    var previewSpan = document.createElement("span")
    previewDiv.id = "previewOverlay"

    $("body").append(previewDiv);
    previewDiv.appendChild(previewSpan)

    var docHeight = $(document).height();

    previewSpan.innerHTML = parentPhraseNode.phrase
    var elem = $(previewDiv);
    var jtd = $(e.currentTarget)

    var jtdpos = jtd.offset()
    var jtdwidth = jtd.width();
    var jdtheight = jtd.height();
    console.log("jdt width and height" + jdtheight + " " + jtdwidth)
    if (firstChild) {
        elem.css({
            position: 'absolute',
            top: jtdpos.top,
            left: jtdpos.left,
            zIndex: -1
        });
    } else {
        elem.css({
            position: 'absolute',
            top: jtdpos.top,
            right: $("body").width() - (jtdpos.left + jtdwidth) + 13,
            zIndex: -1
        });
        //elemx = jtdpos.left + jtdwidth - previewDiv.offsetWidth;
        //$("body").height -
        /*elem.css({
         position: 'absolute',
         bottom: $("body").height() - (jtdpos.top + jdtheight),
         right: $("body").width() - (jtdpos.left + jtdwidth),
         zIndex: -1
         });*/
    }


}
function goUpToParent(wordTable) {
    var pn = wordTable.phraseNode;
    pn.isMyAncestor(pn);
    var parentPhraseNode = wordTable.phraseNode.parent;
    if (parentPhraseNode != null) {
        var containerDiv = wordTable.parentNode;
        var parentWordTable = createWordTable(wordTable.id, parentPhraseNode);
        containerDiv.insertBefore(parentWordTable, wordTable);
        removeDescents(parentWordTable);
    }
    redoIds(containerDiv);
}

function removeDescents(wordTable) {
    var containerDiv = wordTable.parentNode;
    var setForRemoval = []
    NodeList.prototype.forEach = Array.prototype.forEach
    var children = containerDiv.childNodes;
    children.forEach(function (item) {
        if (item.phraseNode.isMyAncestor(wordTable.phraseNode)) {
            setForRemoval.push(item);
        }
    });

    for (var i = 0; i < setForRemoval.length; i++) {
        var rem = setForRemoval[i];
        console.log(rem.phraseNode.phrase + " is being removed");
        containerDiv.removeChild(rem);
    }
}

function getDescents(wordTable) {
    var containerDiv = wordTable.parentNode;
    var setofDescents = []
    NodeList.prototype.forEach = Array.prototype.forEach
    var children = containerDiv.childNodes;
    children.forEach(function (item) {
        if (item.phraseNode.isMyAncestor(wordTable.phraseNode)) {
            setofDescents.push(item);
        }
    });

    return setofDescents;
}
function goDonwToChildren(wordTable) {
    if (wordTable.phraseNode.phraseChildren.length > 0) {
        var currentid = parseInt(wordTable.id);
        var containerDiv = wordTable.parentNode;
        for (var i = 0; i < wordTable.phraseNode.phraseChildren.length; i++) {
            var pn = wordTable.phraseNode.phraseChildren[i];
            var cwt = createWordTable(currentid + i, pn);
            containerDiv.insertBefore(cwt, wordTable);
        }
        containerDiv.removeChild(wordTable);
        redoIds(containerDiv);
    } else {
        console.log("phrase node:" + wordTable.phraseNode.phrase + " has no children");
    }
}

function redoIds(containerDiv) {
    NodeList.prototype.forEach = Array.prototype.forEach
    var children = containerDiv.childNodes;
    var i = 0;
    children.forEach(function (item) {
        item.setNewId(i);
        item.setPhraseNode(item.phraseNode);//just for debugging
        i++;
    });
}


function showsent(phraseNodes) {
    var lineDiv = document.createElement("div");
    lineDiv.id = "myLineDiv";
    document.body.appendChild(lineDiv);

    for (var i = 0; i < phraseNodes.length; i++) {
        var pn = phraseNodes[i];
        //var elem = tableCreate(i, 3, 1, stringarr[i]);
        var elem = createWordTable(i, pn);
        lineDiv.appendChild(elem);
    }
}


function unhighlight(e) {
    console.log("unhilight " + e.target.id);
    var tablenum = e.target.id.split(",")[1];
    var wordTable = document.getElementById(tablenum);
    wordTable.unLightHighlight(0);
    wordTable.unLightHighlight(2);
    /*for (var c = 0; c < wordTable.phraseNode.phraseSiblings.length; c++) {
     wordTable.phraseNode.phraseSiblings[c].wordTable.unLightHighlight(0);
     wordTable.phraseNode.phraseSiblings[c].wordTable.unLightHighlight(2);
     }*/
    //e.target.style.backgroundColor = "white"
    var previewDiv = document.getElementById("previewOverlay")
    if (previewDiv != null) {
        previewDiv.parentNode.removeChild(previewDiv);
    }
}

function createWordTable(numid, phraseNode) {
    var wordTable = document.createElement("table");
    wordTable.id = numid.toString();
    wordTable.phraseNode = phraseNode;
    wordTable.phraseNode.setWordTable(wordTable);
    wordTable.style.display = "inline-block";
    wordTable.style.float = "left";
    for (var i = 0; i < 3; i++) {
        var tr = wordTable.insertRow();
        for (var j = 0; j < 1; j++) {
            var td = tr.insertCell();
            if (i == 1) {
                td.innerHTML = wordTable.phraseNode.phrase.replace(/_/g, " "); //+ "," + wordTable.id;
            } else {
                td.appendChild(document.createTextNode(""));
                td.id = "cell," + numid.toString() + "," + i.toString();
                td.addEventListener("click", spanClicked, false);
                td.addEventListener("mouseover", highlight, false);
                td.addEventListener("mouseout", unhighlight, false);
                td.height = "10px";
            }
            //td.style.border = "1px solid black";
            if (i == 1 && j == 1) {
                td.setAttribute('rowSpan', '2');
            }

        }
    }


    wordTable.unLightHighlight = function (position) {
        this.rows[position].cells[0].style.opacity = 0
        this.rows[position].cells[0].style.backgroundColor = "white"
    }

    wordTable.lightHighlight = function (position) {
        this.rows[position].cells[0].style.opacity = 0.5
        this.rows[position].cells[0].style.backgroundColor = "grey"
    }

    wordTable.setPhraseNode = function (newPhraseNode) {
        this.phraseNode = newPhraseNode;
        this.rows[1].cells[0].innerHTML = this.phraseNode.phrase.replace(/_/g, " "); //+ "," + this.id;
    }

    wordTable.setNewId = function (newId) {
        this.id = newId.toString();
        this.rows[0].cells[0].id = "cell," + newId.toString() + ",0";
        this.rows[2].cells[0].id = "cell," + newId.toString() + ",2";
    }

    return wordTable;

}

function PhraseNode(phrase, parent) {
    this.phrase = phrase;
    this.parent = parent;
    this.wordTable = null;
    this.phraseChildren = [];
    this.phraseSiblings = [];
    this.addPhraseChild = function (phraseNode) {
        this.phraseChildren.push(phraseNode);
    }

    this.setPhraseSiblings = function (phraseSiblings) {
        this.phraseSiblings = phraseSiblings;
    }

    this.setWordTable = function (wordTable) {
        this.wordTable = wordTable;
    }
    this.toString = function () {
        return "PhraseNode:" + this.phrase;
    }
    this.isMyAncestor = function (pn) {
        var isAncestor = false
        var a_parent = this.parent;
        while (a_parent != null) {
            //console.log("ancestor:" + a_parent.phrase + (a_parent == pn));
            if (a_parent == pn) {
                isAncestor = true;
            }
            a_parent = a_parent.parent;
        }
        return isAncestor;
    }

}
