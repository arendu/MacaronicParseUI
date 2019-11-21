/**
 * Created by arenduchintala on 5/20/15.
 *
 */
var mllist = []
/*
var bracket_list = ["(A_B_C_D (A_B (A (1))  (B (2)))  (C_D (C (3))  (D (4))))",
    "(A_B_C_D (A_B (B (2))  (A (1)))  (C_D (C (3))  (D (4))))",
    "(A_B_C_D (C_D (C (3))  (D (4)))  (A_B (A (1))  (B (2))))",
    "(A_B_C_D (C_D (C (3))  (D (4)))  (A_B (X_Y (X (1))  (Y (2)))))",
    "(Now_I_really_have_to_write_you_again_! (Now (Jetzt))  (I_really_have_to_write_you_again_! (I_really_have_to_write_you_again (I_really_have_to (I_have_to (I_must (must (muss))  (I (ich)))))  (write_you_again (you (euch))  (write_again (really (but (aber))  (really (wirklich)))  (write_again (again (again (wieder))  (once (einmal)))  (write (schreiben))))))  (! (!))))",
    "(I_don't_know_where_I_should_begin (I_don't_know (I_don't_know (I_don't (I (ich))  (not (really (gar))  (not (nicht))))  (know (weiß)))  (, (,)))  (where_I_should_begin (where (wo))  (I_should_begin (I (ich))  (should_begin (begin (beginnen))  (should (soll))))))",
    "(From_there,_we_took_a_boat_trip_down_the_Danube_. (From_there,_we_took_a_boat_trip_down_the_Danube (From_there (From (Von))  (there (dort)))  (we_took_a_boat_trip_down_the_Danube (we (are (sind))  (we (wir)))  (took_a_boat_trip_down_the_Danube (went_down_the_Danube_with_the_ship (with_the_ship (with (mit))  (the_ship (the (dem))  (ship (Schiff))))  (went_down_the_Danube (the_Danube (the (die))  (Danube (Donau)))  (went_down (hinuntergefahren)))))))  (. (.)))",
    "(We_have_been_in_Vienna_for_a_couple_of_days_. (We_have_been_in_Vienna_for_a_couple_of_days (We_have_been (Now (Jetzt))  (we_have_been (we_have_been (we_have (we_are (are (sind))  (we (wir)))))  (already (schon))))  (in_Vienna_for_a_couple_of_days (a_couple_of_days (a (ein))  (couple_of_days (couple (pair (paar)))  (days (Tage))))  (in_Vienna (in)  (Vienna (Wien)))))  (. (.)))"]
*/

var bracket_list = ["(﻿Dear_parents, (Dear (Liebe))  (parents, (parents (Eltern))  (, (! (!)))))",
    "(Now_I_really_have_to_write_you_again_! (Now (Jetzt))  (I_really_have_to_write_you_again_! (I_really_have_to_write_you_again (I_really_have_to (I_have_to (I_must (must (muss))  (I (ich)))))  (write_you_again (you (euch))  (write_again (really (but (aber))  (really (wirklich)))  (write_again (again (again (wieder))  (once (einmal)))  (write (schreiben))))))  (! (!))))",
    "(I've_seen_so_many_things_that_I_don't_know_where_to_start_. (I've_seen_so_many_things_that_I_don't_know_where_to_start (I've_seen_so_many_things (I've (I_have (I (Ich))  (have (habe))))  (seen_so_many_things (seen_so_many_things (so_many_things (so_much (so)  (much (viel))))  (seen (gesehen)))  (, (,))))  (that_I_don't_know_where_to_start (that (dass))  (I_don't_know_where_to_start (I_don't_know_where_I_should_begin (I_don't_know (I_don't_know (I_don't (I (ich))  (not (really (gar))  (not (nicht))))  (know (weiß)))  (, (,)))  (where_I_should_begin (where (wo))  (I_should_begin (I (ich))  (should_begin (begin (beginnen))  (should (soll)))))))))  (. (.)))",
    "(A_week_ago_I_was_still_with_our_student_group_in_Passau_. (A_week_ago_I_was_still_with_our_student_group_in_Passau (A_week_ago (Ago (Vor))  (a_week (one_week (one (einer))  (week (Woche)))))  (I_was_still_with_our_student_group_in_Passau (I_was (was (war))  (I (ich)))  (still_with_our_student_group_in_Passau (still_with_our_student_group (with_our_student_group (with (mit))  (our_student_group (our (unserer))  (student_group (Studentengruppe))))  (still (noch)))  (in_Passau (in)  (Passau)))))  (. (.)))",
    "(From_there,_we_took_a_boat_trip_down_the_Danube_. (From_there,_we_took_a_boat_trip_down_the_Danube (From_there, (From_there (From (Von))  (there (dort))))  (we_took_a_boat_trip_down_the_Danube (we (are (sind))  (we (wir)))  (took_a_boat_trip_down_the_Danube (went_down_the_Danube_with_the_ship (with_the_ship (with (mit))  (the_ship (the (dem))  (ship (Schiff))))  (went_down_the_Danube (the_Danube (the (die))  (Danube (Donau)))  (went_down (hinuntergefahren)))))))  (. (.)))",
    "(I_really_liked_the_vineyards,_castles_and_especially_Melk_Monastery_. (I_really_liked_the_vineyards,_castles_and_especially_Melk_Monastery (The_vineyards,_castles_and_especially_Melk_Monastery (The_vineyards, (The_vineyards (The (Die))  (vineyards (Weinberge)))  (, (,)))  (castles_and_especially_Melk_Monastery (castles (Burgen))  (and_especially_Melk_Monastery (and (und))  (especially_Melk_Monastery (especially (besonders))  (Melk_Monastery (Monastery (Kloster))  (Melk))))))  (I_really_liked (have (haben))  (I_really_liked (I_really (I (me (mir)))  (really (very_good (very (sehr))  (good (gut)))))  (liked (pleased (gefallen))))))  (. (.)))",
    "(The_weather_has_also_been_very_nice_. (The_weather_has_also_been_very_nice (The_weather (The (Das))  (weather (Wetter)))  (has_also_been_very_nice (has (is (ist)))  (also_been_very_nice (also (auch))  (been_very_nice (very_nice (very (sehr))  (nice (schön)))  (been (gewesen))))))  (. (.)))",
    "(We_have_been_in_Vienna_for_a_couple_of_days_. (We_have_been_in_Vienna_for_a_couple_of_days (We_have_been (Now (Jetzt))  (we_have_been (we_have_been (we_have (we_are (are (sind))  (we (wir)))))  (already (schon))))  (in_Vienna_for_a_couple_of_days (a_couple_of_days (a (ein))  (couple_of_days (couple (pair (paar)))  (days (Tage))))  (in_Vienna (in)  (Vienna (Wien)))))  (. (.)))",
    "(I_think_it_is_great_here_! (I_think_it_is_great_here (I (Ich))  (think_it_is_great_here (think (find (finde)))  (it_is_great_here (it_is_great (it_is (it (es)))  (great (toll)))  (here (hier)))))  (! (!)))",
    "(Our_guest_house_is_very_centrally_located_and_we_can_get_everywhere_by_foot_or_by_subway_. (Our_guest_house_is_very_centrally_located_and_we_can_get_everywhere_by_foot_or_by_subway (Our_guest_house_is_very_centrally_located (Our_guest_house (Our (Unser))  (guest_house (Gästehaus)))  (very_centrally_located (very_central_lies (lies (liegt))  (very_central (very (sehr))  (central (zentral))))))  (and_we_can_get_everywhere_by_foot_or_by_subway (and (und))  (we_can_get_everywhere_by_foot_or_by_subway (we (wir))  (can_get_everywhere_by_foot_or_by_subway (can (können))  (get_everywhere_by_foot_or_by_subway (reach_everywhere_by_foot_or_by_subway (everywhere_by_foot_or_by_subway (everywhere (all (alles)))  (by_foot_or_by_subway (by_foot (by (zu))  (foot (Fuß)))  (or_by_subway (or (oder))  (by_subway (with_the_subway (with (mit))  (the_subway (the (der))  (subway (U-Bahn))))))))  (reach (erreichen))))))))  (. (.)))",
    "(I_have_never_walked_so_much_in_my_life_! (I_have_never_walked_so_much (So_much (So)  (much (viel)))  (I_have_never_walked (I_have_never (I_have (have (am (bin)))  (I (ich)))  (never (still (noch))  (never (nie))))  (walked (gelaufen))))  (! (!)))",
    "(On_Friday_we_spent_hours_strolling_around_the_city_center_. (On_Friday_we_spent_hours_strolling_around_the_city_center (On_Friday (On (Am))  (Friday (Freitag)))  (we_spent_hours_strolling_around_the_city_center (we_spent_hours (we_spent (we_are (are (sind))  (we (wir))))  (hours_long (stundenlang)))  (strolling_around_the_city_center (strolled_around_the_city_center (around_the_city_center (through_the_city_center (through (durch))  (the_city_center (the (die))  (city_center (Innenstadt)))))  (strolled (gebummelt))))))  (. (.)))"]

function mysliderup(valnum) {
    console.log("mouse up on slider" + valnum.toString())
    NodeList.prototype.forEach = Array.prototype.forEach
    mllist.forEach(
        function (item) {
            item.removePreviews()
        });
}
function mysliderfunc(valnum) {
    console.log("current slider:" + valnum.toString())
    currentSlider = valnum
    NodeList.prototype.forEach = Array.prototype.forEach
    mllist.forEach(
        function (item) {
            item.setSliderNum(valnum)
        })
}

function startsWith(string1, string2) {
    var res = string1.substring(0, string2.length);
    if (res == string2) {
        return true
    } else {
        return false
    }
}

function sortByID(a, b) {
    var aName = a.id.toLowerCase();
    var bName = b.id.toLowerCase();
    return ((aName < bName) ? - 1 : ((aName > bName) ? 1 : 0));
}

function ready() {
    var i = 0
    NodeList.prototype.forEach = Array.prototype.forEach
    bracket_list.forEach(
        function (bracket_item) {

            console.log("processing ml:" + i.toString())
            var items = parsePhraseTree(bracket_item);
            var rootPhraseNode = items[0]
            var numNT = items[1]
            var macline = new MacaronicLine(i, rootPhraseNode, numNT)
            //var leaves = getleaves(macline.rootPhraseNode)
            console.log("doing label swaps...")
            labelSwaps(macline.rootPhraseNode)
            labelDescendentSwaps(macline.rootPhraseNode)
            label_transient_from_top(macline.rootPhraseNode)
            console.log("done label swaps...")
            var wt = macline.displayRoot()
            if (wt.phraseNode.transient_from_top) {
                macline.goDownToChildren(wt)
            }
            mllist.push(macline)

            i ++
        });

}

function removeEmptyStrings(val) {
    return ! (val == "" || val == " ");
}


function createWordTable(numid, phraseNode, macaronicline) {
    var wordTable = document.createElement("table");
    wordTable.numid = numid
    wordTable.macaronicline = macaronicline
    wordTable.id = 'ml,' + macaronicline.id.toString() + ',wt,' + numid.toString();
    wordTable.phraseNode = phraseNode;
    wordTable.phraseNode.setWordTable(wordTable);
    wordTable.style.display = "inline-block";
    wordTable.style.float = "left";
    wordTable.highlighted = false;
    wordTable["s1"] = null
    wordTable["s2"] = null
    wordTable["r1"] = null
    var j_size = phraseNode.phrasePart2 == null ? 1 : 2;
    for (var i = 0; i < 3; i ++) {
        var tr = wordTable.insertRow();
        if (i == 1) {
            wordTable["r1"] = tr

        }
        for (var j = 0; j < j_size; j ++) {

            var td = tr.insertCell();
            if (i == 1) {
                //td.innerHTML = wordTable.phraseNode.phrase.replace(/_/g, " ")
                var s
                s = document.createElement("span")

                if (j == 0) {
                    if ($.trim(wordTable.phraseNode.phrasePart1) != "") {
                        s.innerHTML = wordTable.phraseNode.phrasePart1.replace(/_/g, " ")
                        wordTable["s1"] = s
                        s["source_phrasepart"] = wordTable.phraseNode.phrasePart1
                        if (wordTable.phraseNode.areLeftDescendentsSwapping || wordTable.phraseNode.areChildrenSwapped) {
                            $(s).addClass("hasSwapDescendent")
                        }

                    }

                } else {
                    if ($.trim(wordTable.phraseNode.phrasePart2) != "") {
                        s.innerHTML = wordTable.phraseNode.phrasePart2.replace(/_/g, " ")
                        wordTable["s2"] = s
                        s["source_phrasepart"] = wordTable.phraseNode.phrasePart2
                        if (wordTable.phraseNode.areRightDescendentsSwapping || wordTable.phraseNode.areChildrenSwapped) {
                            $(s).addClass("hasSwapDescendent")
                        }
                    }

                }
                td.appendChild(s)
                s.addEventListener("mouseover", macaronicline.showInternalArrow, false)
                s.addEventListener("mouseover", macaronicline.showExternalArrow, false)
                s.addEventListener("mouseout", macaronicline.removeExternalArrow, false)
                td.addEventListener("mouseout", macaronicline.removeInternalArrow, false)
                s["wordTable"] = wordTable
                //td.className = wordTable.phraseNode.isLeaf ? 'leaf' : 'nonleaf'
                td.height = "20px";
            } else {
                td.appendChild(document.createTextNode(""));
                td.id = wordTable.id + ",c," + i.toString();
                td["rownum"] = i
                td.addEventListener("click", macaronicline.spanClicked, false);

                if (i == 0) {
                    td.addEventListener("mouseover", macaronicline.showInternalArrow, false)
                    td.addEventListener("mouseout", macaronicline.removeInternalArrow, false)
                    td.addEventListener("mouseout", macaronicline.unhighlight, false);
                } else {

                    td.addEventListener("mouseover", macaronicline.showExternalArrow, false)
                    td.addEventListener("mouseout", macaronicline.removeExternalArrow, false)
                    td.addEventListener("mouseout", macaronicline.unhighlight, false);
                }
                if (j == 0) {
                    td["source_phrasepart"] = wordTable.phraseNode.phrasePart1
                } else {
                    td["source_phrasepart"] = wordTable.phraseNode.phrasePart2
                }
                td.height = "20px";
                td["wordTable"] = wordTable;

            }
            //td.style.border = "1px solid black";
            if (i == 1 && j == 1) {
                td.setAttribute('rowSpan', '2');
            }

        }
    }

    wordTable.getTopLeftCoordinate = function () {
        var jtd = $(this.rows[0].cells[0])
        return jtd.offset();
    }

    wordTable.getS1Coordinate = function () {
        if (this.s1 != null) {
            var jtd = $(this.s1)
            return [jtd.offset().top, jtd.offset().left, this.s1.offsetHeight, this.s1.offsetWidth]
        } else {
            return this.getS2Coordinate()
        }

    }

    wordTable.getS2Coordinate = function () {
        if (this.s2 != null) {
            var jtd = $(this.s2)
            return [jtd.offset().top, jtd.offset().left, this.s2.offsetHeight, this.s2.offsetWidth]
        } else {
            return null
        }

    }

    wordTable.getMiddleRowCooordinate = function () {
        var jtd = $(this.rows[1])
        return [jtd.offset().top, jtd.offset().left, this.rows[1].offsetHeight, this.rows[1].offsetWidth]
    }

    wordTable.getBottomCellCoordinate = function () {
        var jtd = $(this.rows[2].cells[0])
        return jtd.offset();
    }

    wordTable.unLightHighlight = function (position) {
        this.highlighted = false
        var j_size = this.phraseNode.phrasePart2 == null ? 1 : 2;
        for (var i = 0; i < j_size; i ++) {
            this.rows[position].cells[i].style.opacity = 0.0
            /*this.rows[position].cells[i].style.backgroundColor = "grey"*/
            this.rows[1].cells[i].style.opacity = 1
        }
    }

    wordTable.lightHighlight = function (position) {
        this.highlighted = true
        var j_size = this.phraseNode.phrasePart2 == null ? 1 : 2;
        for (var i = 0; i < j_size; i ++) {
            this.rows[position].cells[i].style.opacity = 0.0
            /*this.rows[position].cells[i].style.backgroundColor = "grey"*/
            this.rows[1].cells[i].style.opacity = 0.5
        }

    }

    wordTable.setHasArrowOnRow = function () {
        $(this.r1).addClass("hasarrow")
        console.log("set arrow for row: class r1:" + this.r1.className)

    }

    wordTable.removeHasArrowOnRow = function () {
        $(this.r1).removeClass("hasarrow")
        console.log("removed arrow for row: class r1:" + this.r1.className)

    }

    wordTable.setNewId = function (newId) {
        this.numid = newId
        this.id = 'ml,' + this.macaronicline.id.toString() + ',wt,' + this.numid.toString();
        this.rows[0].cells[0].id = "cell," + newId.toString() + ",0";
        this.rows[2].cells[0].id = "cell," + newId.toString() + ",2";
    }

    return wordTable;

}


function MacaronicLine(lineid, rootPhraseNode, numNT) {
    var self = this
    self.id = lineid
    self["numSteps"] = numNT * 2
    self["stepSize"] = parseInt(100 / self.numSteps)
    self["previewDiv"] = null
    self.previewArrowsToChildrenNodes = null
    self.previewArrowsToParentNodes = null
    self["prevDirection"] = "going forward"
    self["prevZone"] = 0
    self["prevValNum"] = 0
    self["timer"] = null;
    self["lineDiv"] = document.createElement("div");
    self.lineDiv.class = "macaronicLine"
    self["isPreviewState"] = false
    self["source_span"] = null
    self["dest_span"] = null
    self.source_wordTable = null
    self.dest_wordTable = null

    this.lineDiv.id = "lineDiv" + lineid.toString()
    self["rootPhraseNode"] = rootPhraseNode


    self.addToDoc = function () {
        document.body.appendChild(this.lineDiv)
    }
    self.removeFromDoc = function () {
        this.lineDiv.parentNode.removeChild(this.lineDiv)
    }

    self.displayRoot = function () {
        self.addToDoc()
        var wordtable = createWordTable(0, this.rootPhraseNode, this);
        self.lineDiv.appendChild(wordtable);
        return wordtable

    }

    self.displayPhrases = function () {
        self.addToDoc()
        var phraseLeaves = getleaves(this.rootPhraseNode);
        for (var i = 0; i < phraseLeaves.length; i ++) {
            var pn = phraseLeaves[i];
            //var elem = tableCreate(i, 3, 1, stringarr[i]);
            var elem = createWordTable(i, pn, this);
            self.lineDiv.appendChild(elem);
        }

    }

    self.removeInternalArrow = function () {
        //console.log("trying to remove internal arrow")
        if (self.previewArrowsToChildren != null) {
            //delete self.previewArrowsToChildren
            for (var i = 0; i < self.previewArrowsToChildren.length; i ++) {
                $(self.previewArrowsToChildren[i]).remove()
            }

            //$(self.previewArrowsToChildren).remove()
            self.previewArrowsToChildren = null
        }

        if (self.source_span != null) {
            $(self.source_span).removeClass("hasarrow")
            self.source_span = null
        }

        if (self.dest_span != null) {
            $(self.dest_span).removeClass("hasarrow")
            self.dest_span = null
        }

        self.removePreviewDiv()
    }

    self.removeExternalArrow = function () {
        //console.log("trying to remove external arrow")
        if (self.previewArrowsToParentNodes != null) {
            for (var i = 0; i < self.previewArrowsToParentNodes.length; i ++) {
                $(self.previewArrowsToParentNodes[i]).remove()
            }
            //$(self.previewArrowsToParentNodes).remove()
            self.previewArrowsToParentNodes = null
        }

        if (self.source_wordTable != null) {
            for (var i = 0; i < self.source_wordTable.length; i ++) {
                //self.unhighlightWordTable(self.source_wordTable[i], 0)
                //self.unhighlightWordTable(self.source_wordTable[i], 2)
                self.source_wordTable[i].removeHasArrowOnRow()
            }
        }


        self.source_wordTable = null

        if (self.dest_wordTable != null) {
            for (var i = 0; i < self.dest_wordTable.length; i ++) {
                self.dest_wordTable[i].removeHasArrowOnRow()
            }

            self.dest_wordTable = null
        }


        self.removePreviewDiv()
    }

    self.secretly_goUpToParent = function (wordTable) {
        var n = wordTable.phraseNode
        var original_n = n
        var containerDiv = wordTable.parentNode
        var children_nl = containerDiv.childNodes
        var previous_n = null
        do {
            previous_n = n
            n = n.parent

        } while (self.visibleStrCheck(children_nl, n))

        if (previous_n != null && original_n != previous_n) {
            console.log("I can secrectly go up to :" + previous_n.phrase)
            return previous_n
        } else {
            console.log("I cat NOT secretly go up...")
            return original_n
        }
    }

    self.getVisibileDescendants = function (visible_wordtables, phraseNode) {
        var descendants = []
        NodeList.prototype.forEach = Array.prototype.forEach
        visible_wordtables.forEach(
            function (item) {
                if (startsWith(item.id, "previewOverlay")) {

                } else {
                    var pn = item.phraseNode;
                    if (pn.isMyAncestor(phraseNode) || pn == phraseNode) {
                        descendants.push(item)
                    }
                }

            });
        return descendants
    }

    self.getBoxPositions = function (list_visible_of_wt) {
        var left_most = 10000
        var padding = 0 //TODO: find out what this actually is and where it is set
        var top = 0
        var height = 20
        var sum_widths = 0
        NodeList.prototype.forEach = Array.prototype.forEach
        list_visible_of_wt.forEach(
            function (item) {
                var pos = item.getMiddleRowCooordinate()
                if (pos[1] < left_most) {
                    left_most = pos[1]
                }
                sum_widths += pos[3]
                sum_widths += padding
                top = pos[0]
                height = pos[2]


            });
        var final_positions = [top, left_most, height, sum_widths - padding]
        return final_positions

    }

    self.showExternalArrow = function (e) {
        self.removeExternalArrow()
        var source_wordTable = e.target.wordTable
        var containerDiv = source_wordTable.parentNode
        var children_nl = containerDiv.childNodes
        var pesudo_source = null
        var pp = source_wordTable.phraseNode.parent
        var pp1 = self.secretly_goUpToParent(source_wordTable)
        if (pp != null) {

            if (pp.areChildrenSwapped) {
                pesudo_source = source_wordTable.phraseNode
            } else {
                pesudo_source = self.secretly_goUpToParent(source_wordTable)
            }

            var pesudo_parent = pesudo_source.parent
            var pesudo_dest = null
            if (pesudo_source != null && pesudo_parent != null) {
                if (pesudo_parent.areChildrenSwapped) {
                    assert(pesudo_parent.phraseChildren.length == 2, "Parent marked for swap does not have 2 children!")

                    if (pesudo_parent.phraseChildren[0] == pesudo_source) {
                        pesudo_dest = pesudo_parent.phraseChildren[1]
                    } else {
                        pesudo_dest = pesudo_parent.phraseChildren[0]
                    }

                    var all_sources = self.getVisibileDescendants(children_nl, pesudo_source)
                    var all_dest = self.getVisibileDescendants(children_nl, pesudo_dest)

                    console.log("need to draw arrow FROM:")
                    for (var i = 0; i < all_sources.length; i ++) {
                        console.log("src " + i + " " + all_sources[i].phraseNode.phrase)
                    }
                    console.log("TO:")
                    for (var i = 0; i < all_dest.length; i ++) {
                        console.log("dest  " + i + " " + all_dest[i].phraseNode.phrase)
                    }

                    var dest_offset = self.getBoxPositions(all_dest)
                    var source_offset = self.getBoxPositions(all_sources)


                    var dest_point_x = dest_offset[1] < source_offset[1] + source_offset[3] / 2 ? dest_offset[1] : dest_offset[1] + dest_offset[3]
                    var curve_point_x = (dest_point_x + ( source_offset[1] + source_offset[3] / 2)) / 2
                    var source_box = $(self.lineDiv).MyBox(
                        {
                            px: source_offset[1],
                            py: source_offset[0],
                            b_width: source_offset[3],
                            b_height: source_offset[2] - 2,
                            id: "previewOverlayBox"
                        })

                    var dest_box = $(self.lineDiv).MyBox(
                        {
                            px: dest_offset[1],
                            py: dest_offset[0],
                            b_width: dest_offset[3],
                            b_height: dest_offset[2] - 2,
                            id: "previewOverlayBox"
                        })
                    var arrow = $(self.lineDiv).curvedArrow(
                        {
                            p0x: source_offset[1] + source_offset[3] / 2,
                            p0y: source_offset[0] + source_offset[2],
                            p1x: curve_point_x,
                            p1y: source_offset[0] + source_offset[2] + 50,
                            p2x: dest_point_x,
                            p2y: dest_offset[0] + dest_offset[2],
                            id: "previewOverlayArrow"
                        })
                    self.previewArrowsToParentNodes = []
                    self.previewArrowsToParentNodes.push(arrow)
                    self.previewArrowsToParentNodes.push(source_box)
                    self.previewArrowsToParentNodes.push(dest_box)
                    $(self.lineDiv).append(arrow)
                    $(self.lineDiv).append(source_box)
                    $(self.lineDiv).append(dest_box)
                    /*for (var i = 0; i < all_sources.length; i ++) {
                        all_sources[i].setHasArrowOnRow()
                    }
                    for (var i = 0; i < all_dest.length; i ++) {
                        all_dest[i].setHasArrowOnRow()
                    }*/

                    self.source_wordTable = all_sources
                    self.dest_wordTable = all_dest

                } else {
                    console.log("pesudo parent is not swapping...")
                    self.highlightAndPreview(source_wordTable, 2)
                }
            } else {
                console.log("pesudo source is null...")
            }
        }

        e.stopImmediatePropagation()
    }


    self.showInternalArrow = function (e) {
        self.removeInternalArrow()
        var wordTable = e.target.wordTable
        var source_span, dest_span
        var source_offset, dest_offset
        if (e.target.source_phrasepart == wordTable.phraseNode.phrasePart1) {
            console.log("s1 is the source of the arrow")
            source_span = wordTable.s1
            dest_span = wordTable.s2
            source_offset = wordTable.getS1Coordinate();
            dest_offset = wordTable.getS2Coordinate();
        } else if (e.target.source_phrasepart == wordTable.phraseNode.phrasePart2) {
            console.log("s2 is the source of the arrow")
            source_span = wordTable.s2
            dest_span = wordTable.s1
            source_offset = wordTable.getS2Coordinate();
            dest_offset = wordTable.getS1Coordinate();
        } else {
            console.log(e.target.source_phrasepart + " compared to phrase part 1 " + wordTable.phrasePart1)
            console.log(e.target.source_phrasepart + " compared to phrase part 2 " + wordTable.phrasePart2)
        }

        if (dest_span != null && source_span != null && wordTable.phraseNode.areChildrenSwapped) {
            console.log("draw a arraw from source:" + source_span.innerText + " to " + dest_span.innerText)

            /*if (self.previewArrowsToChildren != null) {
                var p = self.previewArrowsToChildren.parentNode
                if (p != null) {
                    p.removeChild(self.previewArrowsToChildren);
                }
                self.previewArrowsToChildren = null
            }*/

            var dest_point_x = dest_offset[1] < source_offset[1] + source_offset[3] / 2 ? dest_offset[1] : dest_offset[1] + dest_offset[3]
            var curve_point_x = (dest_point_x + ( source_offset[1] + source_offset[3] / 2)) / 2
            var source_box = $(self.lineDiv).MyBox(
                {
                    px: source_offset[1],
                    py: source_offset[0],
                    b_width: source_offset[3],
                    b_height: source_offset[2],
                    strokeStyle: 'coral',
                    id: "previewOverlayBox"
                })

            var dest_box = $(self.lineDiv).MyBox(
                {
                    px: dest_offset[1],
                    py: dest_offset[0],
                    b_width: dest_offset[3],
                    b_height: dest_offset[2],
                    strokeStyle: 'coral',
                    id: "previewOverlayBox"
                })

            var arrow = $(self.lineDiv).curvedArrow(
                {
                    p0x: source_offset[1] + source_offset[3] / 2,
                    p0y: source_offset[0],
                    p1x: curve_point_x,
                    p1y: source_offset[0] - 50,
                    p2x: dest_point_x,
                    p2y: dest_offset[0],
                    strokeStyle: 'coral',
                    id: "previewOverlayArrow"
                })
            self.previewArrowsToChildren = []
            self.previewArrowsToChildren.push(arrow)
            self.previewArrowsToChildren.push(source_box)
            self.previewArrowsToChildren.push(dest_box)
            $(self.lineDiv).append(arrow)
            $(self.lineDiv).append(source_box)
            $(self.lineDiv).append(dest_box)
            //$(source_span).addClass("hasarrow")
            //$(dest_span).addClass("hasarrow")
            self.source_span = source_span
            self.dest_span = dest_span
        } else {
            console.log("no internal arrow can be drawn")
            if (e.target.rownum == null) {
                console.log("checking rownum after attempt at internal arrow : null")

            } else if (e.target.rownum == 0) {
                console.log("checking rownum after attempt at internal arrow : 0")
                self.highlightAndPreview(wordTable, 0)

            } else if (e.target.rownum == 2) {
                console.log("checking rownum after attempt at internal arrow : 2")
            }
            //self.previewChildren(wordTable)

        }
        e.stopImmediatePropagation()
    }


    self.spanClicked = function (e) {
        console.log("a span has been clicked:" + e.target.id);
        var wordTable = e.target.wordTable
        console.log("span clicked event: its wt is ml class:" + wordTable.id);
        var rownum = e.target.rownum
        var pn = wordTable.phraseNode;
        if (rownum == 0) {


            var pn = wordTable.phraseNode;
            console.log("phrase: " + pn.phrase + "clicked, go down to children")
            self.goDownToChildren(wordTable);
        } else {

            console.log("phrase: " + pn.phrase + "clicked, go up to parent");
            self.goUpToParent_new(wordTable);
        }
        self.unhighlight(e);
        self.removeInternalArrow()
        self.removeExternalArrow()
        e.stopImmediatePropagation()
    }

    self.visibleStrCheck = function (all_children, parentPhraseNode) {
        if (parentPhraseNode != null) {
            var visiblePhrase = []
            var children = Array.prototype.slice.call(all_children);
            children.sort(sortByID)
            NodeList.prototype.forEach = Array.prototype.forEach
            children.forEach(
                function (item) {
                    if (startsWith(item.id, "previewOverlay")) {

                    } else {
                        var pn = item.phraseNode;
                        if (pn.isMyAncestor(parentPhraseNode)) {
                            visiblePhrase.push(pn.phrase)

                        }
                    }

                });
            var visiblePhraseStr = visiblePhrase.join("_")
            //console.log("returning visibleStrCheck: " + visiblePhraseStr == parentPhraseNode.phrase)
            return visiblePhraseStr == parentPhraseNode.phrase
        } else {
            return false
        }
    }

    self.getPositionBottomLeft = function (all_children, parentPhraseNode) {
        var left = 10000
        var top = 10000

        NodeList.prototype.forEach = Array.prototype.forEach
        all_children.forEach(
            function (item) {
                if (startsWith(item.id, "previewOverlay")) {

                } else {
                    var pn = item.phraseNode;
                    if (pn.isMyAncestor(parentPhraseNode)) {
                        item.lightHighlight(0);
                        var jtdpos = item.getBottomCellCoordinate()
                        //console.log("checking descendant:" + view.phraseNode.phrase + " with left pos:" + jtdpos.left)
                        //get the bottom and left position for preview box
                        if (jtdpos.left < left) {
                            left = jtdpos.left
                            //console.log("most left so far:" + view.phraseNode.phrase)
                        }
                        if (jtdpos.top < top) {
                            top = jtdpos.top
                        }
                    } else {
                        //console.log("view:" + view.phraseNode.phrase + "is not a descendant!!")
                    }
                }
            });
        var pos = {}
        pos["top"] = top
        pos["left"] = left
        return pos
    }

    self.highlightVisibleDescendants = function (all_children, parentPhraseNode) {
        NodeList.prototype.forEach = Array.prototype.forEach
        all_children.forEach(
            function (item) {
                if (startsWith(item.id, "previewOverlay")) {
                } else {
                    var pn = item.phraseNode;
                    if (pn.isMyAncestor(parentPhraseNode)) {
                        item.lightHighlight(0);

                    } else {
                        //console.log("view:" + view.phraseNode.phrase + "is not a descendant!!")
                    }
                }
            });
    }

    self.previewParent_new = function (wordTable) {
        var parentPhraseNode = wordTable.phraseNode.parent;
        if (parentPhraseNode != null) {
            var containerDiv = wordTable.parentNode;
            var children_nl = containerDiv.childNodes;
            var children = Array.prototype.slice.call(children_nl);
            children.sort(sortByID)


            var doPreviewNode = false
            if (self.visibleStrCheck(children_nl, parentPhraseNode)) {
                //console.log("parent phrase is the same as the current visible descendents")
                //console.log(parentPhraseNode.phrase + " is the parent... and this parent is trans?" + parentPhraseNode.transient_from_top)
                while (parentPhraseNode.transient_from_top) {
                    if (parentPhraseNode.parent != null) {
                        parentPhraseNode = parentPhraseNode.parent
                        //console.log("stepping up....")
                    } else {
                        break
                    }
                }
                if (parentPhraseNode.areChildrenSwapped) {
                    console.log("should draw arrows external arrows now....")
                    doPreviewNode = false

                } else {
                    //console.log("must preview a simple node" + parentPhraseNode.phrase)
                    //TODO:figure out how to fix preview and gouptoparent in the case of first...
                    if (self.visibleStrCheck(children_nl, parentPhraseNode)) {
                        doPreviewNode = false
                    } else {
                        doPreviewNode = true
                    }
                }
            } else {
                //console.log("parent phrase is the NOT SAME as the current visible descendents")
                //console.log("show parent node now ...")
                doPreviewNode = true
            }

            if (doPreviewNode) {
                if (self.previewDiv != null) {
                    self.previewDiv.wordTable.unLightHighlight(0)
                    self.previewDiv.wordTable.unLightHighlight(2)
                    var p = self.previewDiv.parentNode
                    if (p != null) {
                        p.removeChild(self.previewDiv);
                    }
                    self.isPreviewState = false;
                    self.previewDiv = null;
                }
                self.isPreviewState = true;
                self.previewDiv = document.createElement("div")
                self.previewDiv["wordTable"] = wordTable
                self.previewDiv["previewType"] = "parent"
                //var previewSpan = document.createElement("span")
                self.previewDiv.id = "previewOverlay" + self.id.toString()
                self.lineDiv.appendChild(self.previewDiv)
                //self.previewDiv.appendChild(previewSpan)
                var parent_phrase_list = parentPhraseNode.phrase.split("_")
                var children_list = self.getVisibileDescendants(children_nl, parentPhraseNode)
                var current_phrase_list = []
                for (var i = 0; i < children_list.length; i ++) {
                    var sub = children_list[i].phraseNode.phrase.split("_")
                    for (var j = 0; j < sub.length; j ++) {
                        current_phrase_list.push(sub[j])
                    }
                }
                var o = editdistance(parent_phrase_list, current_phrase_list)
                for (var i = 0; i < o.alignments.length; i ++) {
                    var curr = o.alignments[i][0]
                    var par = o.alignments[i][1]
                    var previewSpan = document.createElement("span")
                    if (curr != "<eps>") {
                        previewSpan.innerHTML = curr
                        if (curr == par) {
                            console.log("same:" + curr + " " + par)
                            $(previewSpan).addClass("previewSame")
                        } else {
                            console.log("diff:" + curr + " " + par)
                            $(previewSpan).addClass("previewDifferent")
                        }
                        self.previewDiv.appendChild(previewSpan)
                    } else {
                        console.log(" skip <eps>")
                    }
                }
                $(self.previewDiv).addClass("previewDiv")
                //previewSpan.innerHTML = parentPhraseNode.phrase.replace(/_/g, " ")
                var elem = $(self.previewDiv);
                var pos = self.getPositionBottomLeft(children_nl, parentPhraseNode)
                elem.css(
                    {
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        zIndex: - 1
                    });
            }
        }
    }

    self.previewChildrenInternalSwapArrows = function (wordTable) {
        if (self.previewArrowsToChildren != null) {
            var p = self.previewArrowsToChildren.parentNode
            if (p != null) {
                p.removeChild(self.previewArrowsToChildren)
            }
            self.previewArrowsToChildren = null
        }

        var s1offset = wordTable.getS1Coordinate();
        var s2offset = wordTable.getS2Coordinate();

        console.log("cmon draw an arrow!!")
        //[jtd.offset().top, jtd.offset().left, this.s1.offsetHeight, this.s1.offsetWidth]
        self.previewArrowsToChildren = $(self.lineDiv).curvedArrow(
            {
                p0x: s1offset[1] + s1offset[3] / 2,
                p0y: s1offset[0],
                p1x: s2offset[1],
                p1y: s1offset[0] - 50,
                p2x: s2offset[1] + s2offset[3] / 2,
                p2y: s2offset[0],
                id: "previewOverlayArrow"
            })
        $(self.lineDiv).append(self.previewArrowsToChildren)
    }

    self.removePreviewDiv = function () {
        if (self.previewDiv != null) {
            self.previewDiv.wordTable.unLightHighlight(0)
            self.previewDiv.wordTable.unLightHighlight(2)
            var p = self.previewDiv.parentNode
            if (p != null) {
                p.removeChild(self.previewDiv);
            }
            self.isPreviewState = false;
            self.previewDiv = null;
        }
    }
    self.previewChildren = function (wordTable) {

        if (self.previewDiv != null) {
            self.previewDiv.wordTable.unLightHighlight(0)
            self.previewDiv.wordTable.unLightHighlight(2)
            var p = self.previewDiv.parentNode
            if (p != null) {
                p.removeChild(self.previewDiv);
            }
            self.isPreviewState = false;
            self.previewDiv = null;
        }

        if (wordTable.phraseNode.phraseChildren.length > 0) {
            self.isPreviewState = true;
            //createAndAddPreview(wordTable, false, self);

            self.previewDiv = document.createElement("div")
            self.previewDiv["wordTable"] = wordTable
            self.previewDiv["previewType"] = "children"
            self.previewDiv.id = "previewOverlay" + self.id.toString();
            //self.previewDiv.style.border = "1px solid black";
            console.log("previewing children arechildrenswapped:" + wordTable.phraseNode.areChildrenSwapped.toString())
            var acceptablePhraseNodes = wordTable.phraseNode.get_non_transient_children()

            var all_child_list = []
            for (var i = 0; i < acceptablePhraseNodes.length; i ++) {
                var pn = acceptablePhraseNodes[i];
                var pn_phrases_list = pn.phrase.split("_")

                for (var j = 0; j < pn_phrases_list.length; j ++) {
                    /*var previewSpan = document.createElement("span")
                    previewSpan.innerHTML = pn_phrases_list[j]
                    self.previewDiv.appendChild(previewSpan)
                    $(previewSpan).addClass("previewSame")*/
                    all_child_list.push(pn_phrases_list[j])
                }
            }
            var current_phrase_list = wordTable.phraseNode.phrase.split("_")
            var o = editdistance(all_child_list, current_phrase_list)
            for (var i = 0; i < o.alignments.length; i ++) {
                var curr = o.alignments[i][0]
                var par = o.alignments[i][1]
                var previewSpan = document.createElement("span")
                if (curr != "<eps>") {
                    previewSpan.innerHTML = curr
                    if (curr == par) {
                        console.log("same:" + curr + " " + par)
                        $(previewSpan).addClass("previewSame")
                    } else {
                        console.log("diff:" + curr + " " + par)
                        $(previewSpan).addClass("previewDifferent")
                    }
                    self.previewDiv.appendChild(previewSpan)
                } else {
                    console.log(" skip <eps>")
                }
            }
            //$("body").append(self.previewDiv);
            self.lineDiv.appendChild(self.previewDiv)
            self.isPreviewState = true;
            var elem = $(self.previewDiv);
            //var jtd = $(e.currentTarget)
            var pos = wordTable.getTopLeftCoordinate()
            console.log("mouse over box location is" + 0 + "," + 0)
            elem.css(
                {
                    position: 'absolute',
                    top: pos.top,
                    left: pos.left,
                    zIndex: - 1
                });
        } else {
            console.log("phrase node:" + wordTable.phraseNode.phrase + " has no children");
        }
    }

    self.highlightAndPreview = function (wordTable, rownum) {
        if (rownum == 0) {
            wordTable.lightHighlight(0);
            self.previewChildren(wordTable)
        } else {
            self.previewParent_new(wordTable);
        }
    }

    self.highlight = function (e) {
        var wordTable = e.target.wordTable
        console.log("highlight event: its wt is ml class:" + wordTable.id);
        self.highlightAndPreview(wordTable, e.target.rownum)
        e.stopImmediatePropagation();

    }

    self.goDownToChildren = function (wordTable) {
        var wordtables_added = []
        self.previewDiv = document.getElementById("previewOverlay" + self.id.toString())
        if (self.previewDiv != null) {
            self.previewDiv.parentNode.removeChild(self.previewDiv);
        }
        if (wordTable.phraseNode.phraseChildren.length > 0) {
            var currentid = parseInt(wordTable.id);
            var containerDiv = wordTable.parentNode;
            var acceptablePhraseNodes = wordTable.phraseNode.get_non_transient_children()

            //for (var i = 0; i < wordTable.phraseNode.phraseChildren.length; i++) {
            for (var i = 0; i < acceptablePhraseNodes.length; i ++) {
                //var pn = wordTable.phraseNode.phraseChildren[i];
                var pn = acceptablePhraseNodes[i];
                var cwt = createWordTable(currentid + i, pn, self);
                containerDiv.insertBefore(cwt, wordTable);
                wordtables_added.push(cwt)
                //containerDiv.insertAfter(cwt, wordTable);
            }
            containerDiv.removeChild(wordTable);
            self.redoIds(containerDiv);
        } else {
            console.log("phrase node:" + wordTable.phraseNode.phrase + " has no children");
        }
        return wordtables_added
    }

    self.goUpToParent_new = function (wordTable, correct_transient_from_top) {
        var wordTables_added = []
        correct_transient_from_top = correct_transient_from_top || true
        self.previewDiv = document.getElementById("previewOverlay" + self.id.toString())
        if (self.previewDiv != null) {
            self.previewDiv.parentNode.removeChild(self.previewDiv);
        }
        var pn = wordTable.phraseNode;
        pn.isMyAncestor(pn);
        var parentPhraseNode = wordTable.phraseNode.parent;
        if (parentPhraseNode != null) {
            var containerDiv = wordTable.parentNode;
            var children_nl = containerDiv.childNodes;
            var children = Array.prototype.slice.call(children_nl);
            children.sort(sortByID)

            NodeList.prototype.forEach = Array.prototype.forEach
            children.forEach(
                function (item) {
                    if (startsWith(item.id, "previewOverlay")) {

                    } else {
                        var pn = item.phraseNode;
                        if (pn.isMyAncestor(parentPhraseNode)) {
                            item.lightHighlight(0);
                            console.log("descendant is:" + pn.phrase + " inside view:" + item.id)

                        }
                    }

                });

            var execute_goto_parent = false
            if (self.visibleStrCheck(children_nl, parentPhraseNode)) {
                console.log("parent phrase is the same as the current visible descendents")
                console.log("hmmm1")
                while (parentPhraseNode.transient_from_top) {
                    if (parentPhraseNode.parent != null) {
                        parentPhraseNode = parentPhraseNode.parent
                        console.log("stepping up....")
                    } else {
                        break
                    }
                }

                console.log("new proper parent " + parentPhraseNode.phrase)
                if (self.visibleStrCheck(children_nl, parentPhraseNode)) {
                    execute_goto_parent = false
                } else {
                    execute_goto_parent = true
                }

            } else {
                console.log("parent phrase is the NOT SAME as the current visible descendents")
                console.log("hmmm 2")
                execute_goto_parent = true
            }

            if (execute_goto_parent) {
                var containerDiv = wordTable.parentNode;
                var parentWordTable = createWordTable(wordTable.id, parentPhraseNode, self);
                containerDiv.insertBefore(parentWordTable, wordTable);
                self.removeDescents(parentWordTable);
                self.redoIds(containerDiv);
                //TODO: should this always be here??
                wordTables_added.push(parentWordTable)
                if (parentWordTable.phraseNode.transient_from_top && correct_transient_from_top) {
                    console.log("added " + parentWordTable.phraseNode + " just for fun.. replacing with indi")
                    wordTables_added = self.goDownToChildren(parentWordTable)
                }
            }
        }
        return wordTables_added
    }

    self.removeDescents = function (wordTable) {
        var containerDiv = wordTable.parentNode;
        var setForRemoval = []
        NodeList.prototype.forEach = Array.prototype.forEach
        var children = containerDiv.childNodes;
        children.forEach(
            function (item) {
                if (startsWith(item.id, "previewOverlay")) {
                    console.log("ignoreding previewOverlay:" + item.id)
                } else if (item.phraseNode.isMyAncestor(wordTable.phraseNode)) {
                    setForRemoval.push(item);
                }
            });

        for (var i = 0; i < setForRemoval.length; i ++) {
            var rem = setForRemoval[i];
            //console.log(rem.phraseNode.phrase + " is being removed");
            containerDiv.removeChild(rem);
        }
    }


    self.redoIds = function (containerDiv) {
        NodeList.prototype.forEach = Array.prototype.forEach
        var children = containerDiv.childNodes;
        var i = 0;
        children.forEach(
            function (item) {
                if (startsWith(item.id, "previewOverlay")) {

                } else {
                    item.setNewId(i);
                    //view.setPhraseNode(view.phraseNode);//just for debugging
                    i ++;
                }

            });
    }


    self.unhighlight = function (e) {
        var wordTable = e.target.wordTable
        //console.log("unhilight event: its wt is ml class:" + wordTable.id);
        self.unhighlightWordTable(wordTable)
        e.stopImmediatePropagation()
    }

    self.unhighlightWordTable = function (wordTable) {
        var containerDiv = wordTable.parentNode;
        if (containerDiv != null) {
            var children = containerDiv.childNodes;
            NodeList.prototype.forEach = Array.prototype.forEach
            children.forEach(
                function (item) {
                    if (startsWith(item.id, "previewOverlay")) {

                    } else {
                        var pn = item.phraseNode;
                        item.unLightHighlight(0);
                        item.unLightHighlight(2);
                    }

                });
        }


        self.previewDiv = document.getElementById("previewOverlay" + self.id.toString())
        if (self.previewDiv != null) {
            self.previewDiv.parentNode.removeChild(self.previewDiv);
        }
    }
    self.stepclickUp = function () {
        self.previewDiv = document.getElementById("previewOverlay" + self.id.toString())
        if (self.previewDiv != null) {
            self.previewDiv.parentNode.removeChild(self.previewDiv);
        }
        //console.log("something stepclick")
        var maxnum = 0
        var maxid = - 1
        var children = self.lineDiv.childNodes;
        NodeList.prototype.forEach = Array.prototype.forEach
        children.forEach(
            function (item) {
                if (startsWith(item.id, "previewOverlay")) {

                } else {
                    var pn = item.phraseNode;
                    if (pn.num > maxnum) {
                        maxnum = pn.num;
                        maxid = item.id
                    }
                }


            });
        var wordTable = document.getElementById(maxid);
        if (wordTable != null) {
            //console.log("max num right now is" + maxnum + " with phrase " + wordTable.phraseNode.phrase)
            if (wordTable.highlighted) {
                self.goUpToParent(wordTable);
            } else {
                self.highlightAndPreview(wordTable, 2);
            }
        } else {
            console.log("word table is null..")
        }


    }

    self.stepclickDown = function () {
        //console.log("go down automated...")

        var minnum = 100000
        var minid = - 1
        var children = self.lineDiv.childNodes;
        NodeList.prototype.forEach = Array.prototype.forEach
        children.forEach(
            function (item) {
                if (startsWith(item.id, "previewOverlay")) {
                    console.log("ignore previewOverlay:" + item.id)
                } else {
                    var pn = item.phraseNode;
                    if (pn.num < minnum && pn.phraseChildren.length > 0) {
                        minnum = pn.num;
                        minid = item.id
                    }
                }


            });

        var wordTable = document.getElementById(minid);
        if (wordTable != null) {
            //console.log("min num right now is" + minnum + " with phrase " + wordTable.phraseNode.phrase)
            if (wordTable.highlighted) {
                self.goDownToChildren(wordTable)
            } else {
                self.highlightAndPreview(wordTable, 0)
            }
        } else {
            console.log("word table is null..")
        }

    }

    self.removePreviews = function () {

        if (self.previewDiv != null && self.previewDiv.parentNode != null) {
            console.log(self.id.toString() + " has a preview div type:" + self.previewDiv.previewType)
            if (self.previewDiv.previewType == "children") {
                self.stepclickDown()
            } else if (self.previewDiv.previewType == "parent") {
                self.stepclickUp()
            }
        }
    }

    self.setSliderNum = function (valnum) {
        var direction = "going forward"
        if (valnum < self.prevValNum) {
            direction = "going back"

        } else {
            direction = "going foward"
        }
        //console.log(direction)
        var zone = Math.floor(valnum / self.stepSize)
        if (self.prevZone == zone) {
            console.log("same zone.." + direction + " zone:" + zone.toString())
        } else if (self.prevZone < zone) {
            console.log("new zone.." + direction + " zone:" + zone.toString() + " prevZone:" + self.prevZone.toString())
            var zonediff = Math.abs(self.prevZone - zone)
            if (self.isPreviewState && self.prevDirection == "going back") {
                console.log("1:is a preview state.. so must undo the last preview...")

                var soa = self.undoStepClick();
                if (soa) {
                    zonediff = zonediff - 1;
                    console.log("1: a preview has been undone...")
                } else {
                    console.log("1:no preview to remove...")
                }
            } else {
                console.log("1:prevzone < zone not undoing preview... " + self.isPreviewState + " prevdi:" + self.prevDirection)
            }

            for (var s = 0; s < zonediff; s ++) {
                self.stepclickUp();
            }
            self.prevZone = zone;
            self.prevDirection = direction;
        } else {
            console.log("new zone.." + direction + " zone:" + zone.toString() + " prevZone:" + self.prevZone.toString())
            var zonediff = Math.abs(self.prevZone - zone)

            if (self.isPreviewState && self.prevDirection == "going foward") {
                console.log("2:is a preview state.. so must undo the last preview...")
                var soa = self.undoStepClick();
                if (soa) {
                    zonediff = zonediff - 1;
                    console.log("2: a preview has been undone...")
                } else {
                    console.log("2:no preview to remove...")
                }
            } else {
                console.log("2:prevzone > zone not undoing preview... " + self.isPreviewState + " prevdi:" + self.prevDirection)
            }

            for (var s = 0; s < zonediff; s ++) {
                self.stepclickDown();
            }
            self.prevZone = zone;
            self.prevDirection = direction;
        }

        self.prevValNum = valnum;

        if (valnum == 0) {
            direction = "going forward"
            self.prevDirection = direction
        }
        if (valnum == 100) {
            direction = "going back"
            self.prevDirection = direction;
        }
    }

    self.undoStepClick = function () {
        var statusOfAction = false
        var wt = null
        if (self.previewDiv != null) {
            self.previewDiv.wordTable.unLightHighlight(0)
            self.previewDiv.wordTable.unLightHighlight(2)
            wt = self.previewDiv.wordTable
            var p = self.previewDiv.parentNode
            if (p != null) {
                p.removeChild(self.previewDiv);
            }
            self.previewDiv = null
            self.isPreviewState = false
            statusOfAction = true;
        }
        if (wt != null) {
            self.unhighlightWordTable(wt, 0)
        }
        return statusOfAction
    }


}