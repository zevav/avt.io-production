function startTranscriptionService(options, whenreadyfunction) {
    $.get(options.transcript, function (data) {
        var str = "";
        var videoid = options.videoelementID;

        for (var i = 0; i < options.video.length; i++) {
            ele = options.video[i];
            str += "<source src='" + ele.vi + "' type='" + ele.type + "'>";
        }
        ;
        str = str + "Your browser does not support the video tag.";
        $("#" + videoid).html(str);
        $("#" + options.transcriptContainerID).html(data);
        $("#" + options.transcriptContainerID).append('<div id="mark" style="background-image: url(\'data:image/png;base64,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\');position: absolute;width: 48px;height: 50px;display:none;cursor: pointer;"></div>');



        var dataset = [];
        var tagsdisplay = [];
        var videoele = document.getElementById(videoid);
        var scrollparent = $("#" + options.transcriptContainerID);
        var x = 0;
        var pid = 'p1';

        var video_status = 'onplay';
        var tag_duplicate = true;
        var current_status = 'all';
        var videoEndon = 0;
        var nexttime = -1;




        $(videoele).on("timeupdate", function (event) {
            event.stopPropagation();

            var time = parseInt(this.currentTime * 1000);
            var flag = false;

            if(time >= videoEndon){
                videoele.pause();
                videoEndon = videoele.duration *1000;
                window.location.hash = '';
            }
            for (var i = x; i < dataset.length; i++) {
                var datael = dataset[i];
                if ((datael.start <= time)) {
                    if (i > 0) {
                        var datae2 = dataset[i - 1];
                        $("#" + datae2.elementid).removeClass("onmovecolor");
                    }
                    ++x;
                    flag = true;
                }
            }

            var eleid = dataset[x - 1] ? dataset[x - 1].elementid : null;
        
            if (current_status == 'all' && eleid) {
                if (flag) {

                    $("#" + eleid).addClass("onmovecolor");
                    if ($("#" + eleid).parent().parent().attr('id') != pid) {
                        pid = $("#" + eleid).parent().parent().attr('id');
                        scrollingdiv(scrollparent, $("#" + pid));
                    }
                    flag = false;
                }

            } else if(eleid){
                if (flag) {
                   if(nexttime ==-1){ nexttime = x; }

                    $("#" + eleid).addClass("onmovecolor");
                    if ($("#" + eleid).parent().parent().attr('id') != pid) {
                        pid = $("#" + eleid).parent().parent().attr('id');
                        scrollingdiv(scrollparent, $("#" + pid));
                    }
                
                    if(x != nexttime){ nexttime = x; 
                        if (!(dataset[x-1].tags.indexOf(current_status) > -1)) {           
                            for(var z = x; z < dataset.length; ++z){
                                if(dataset[z].tags.indexOf(current_status) > -1){
                                    var nextid =  dataset[z].elementid; 
                                    if(nextid){
                                        var skipingto = parseInt($('#' + nextid).attr('data-m'));
                                        videoele.currentTime =  skipingto/ 1000;
                                        adjust(skipingto);
                                    }        
                                    break;
                                }
                            }
                        }
                    }
                
                    flag = false;
                }
            }
        });

        $("body").delegate(".normalcolor", "click", function () {
            var idval = $(this).attr("id");
            var po = 10;
            for (var i = 0; i < dataset.length; i++) {
                var datael = dataset[i];
                var eleid = datael.elementid;
                if (idval == eleid) {
                    po = datael.start / 1000;
                    console.log('element to play=' + po);
                    videoele.currentTime = datael.start / 1000;
                    adjust(datael.start);
                    break;
                }
            }
        });

        function adjust(time) {
            var lastval = 0;
            for (var i = 0; i < dataset.length; i++) {
                var datael = dataset[i];
                var eleid = datael.elementid;
                if ((datael.start <= time)) {
                    $("#" + eleid).removeClass("onmovecolor");
                    lastval = i;
                } else {
                    $("#" + eleid).removeClass("onmovecolor");
                }
            }
            x = lastval;
        }


        function scrollingdiv(parent, movingelement) {
            parent.animate({
                scrollTop: movingelement.parent().scrollTop() + movingelement.offset().top - movingelement.parent().offset().top
            }, {
                duration: 500,
                specialEasing: {
                    width: 'linear',
                    height: 'easeOutBounce'
                },
                complete: function (e) {
                    //console.log("animation completed");
                }
            });
        }


        videoele.onloadedmetadata = function () {

            var counter = 0;

            $("#" + options.transcriptContainerID + " p").each(function (i) {
                $(this).attr("id", "p" + i);
            });

            $("#" + options.transcriptContainerID + " p a").each(function (i) {
                var len = $("#" + options.transcriptContainerID).find("a").length;
                var elem1 = $("#" + options.transcriptContainerID).find("a")[counter];
                var elem2 = $("#" + options.transcriptContainerID).find("a")[counter + 1];
                $(this).attr("id", i + "id");
                $(this).addClass("normalcolor");

                var starttime = parseInt($(elem1).data("m"));
                var endtime = parseInt($(elem2).data("m"));
                var dataTags = $(elem1).data("tags");

                if (dataTags != null && dataTags != '') {
                    var datatagarray = dataTags.split(',');
                    tagsstore(datatagarray);
                } else {
                    dataTags = '';
                }
                if (starttime == endtime) {
                    endtime = videoele.duration;
                }

                var eledata = {
                    elementid: i + "id",
                    start: starttime,
                    end: endtime,
                    tags: dataTags
                }

                dataset.push(eledata);
                counter += 1;
            });
            
            videoEndon = videoele.duration * 1000;
            var timeline = window.location.hash.replace('#', '').split('-');
            if(timeline.length == 2){
                videoEndon = parseInt(timeline[1]);
                var videostart = parseInt(timeline[0]);
                videoele.currentTime = videostart / 1000;
            }
            

            taglistDisplay('#' + options.tagcontainer);
            videoele.play();
        }

        //if scroll hide share button
        $("#" + options.transcriptContainerID).scroll(function () {

            //deselect the hilighted text
            if (window.getSelection) {
                if (window.getSelection().empty) {  // Chrome
                    window.getSelection().empty();
                } else if (window.getSelection().removeAllRanges) {  // Firefox
                    window.getSelection().removeAllRanges();
                }
            } else if (document.selection) {  // IE?
                document.selection.empty();
            }

            $('#' + options.sharebutton).css("display", "none");
        });

        //share button position
        function showCoords(event) {

            document.getElementById('')
            var marker = $('#' + options.sharebutton).height();
            var markerwidth = $('#' + options.sharebutton).width();
            var ps = document.getSelection().getRangeAt(0).getBoundingClientRect();
            document.getElementById(options.sharebutton).style.top = (ps.top - marker + $(window).scrollTop()) + 'px';
            document.getElementById(options.sharebutton).style.left = (ps.left + (ps.width / 2) - (markerwidth / 2)) + 'px';
        }

        //get the first node of the selection
        function getSelectedNode()
        {
            if (document.selection)
                return document.selection.createRange().parentElement();
            else
            {
                var selection = window.getSelection();
                if (selection.rangeCount > 0)
                    return selection.getRangeAt(0).startContainer.parentNode;
            }
        }

        //get selected text and display twitter post popup
        function gText(e) {
            var t = '';
            t = (document.all) ? document.selection.createRange().text : document.getSelection();

            if (t.toString().length > 0) {
                showCoords(e);
                document.getElementById(videoid).pause();

                if ($(document.getSelection().getRangeAt(0).endContainer.parentNode).parent().parent().parent().parent().parent().parent().attr('id') == options.transcriptContainerID) {
                    document.getElementById(options.sharebutton).style.display = "block";
                } else {
                    document.getElementById(options.sharebutton).style.display = "none";
                }

                var tx = t.toString().replace(/\s{2,}/g, ' ').replace(/$/g, '').replace(/&/g, ' ').replace(/;/g, '').replace(/#/g, ' ');
                var dataattr = $(document.getSelection().getRangeAt(0).startContainer.parentNode).attr('data-m');
                var dataattr2 = $(document.getSelection().getRangeAt(0).endContainer.parentNode).attr('data-m');
                var shareurl = window.location.href.replace(/#.*/, '') + '%23' + dataattr;
                var url = 'https://twitter.com/share?text=' + tx + '&url=' + shareurl + '-' + dataattr2;
                popupcall(url);

            } else {
                document.getElementById('mark').style.display = "none";
            }

        }

        document.onmouseup = gText;

        if (!document.all)
            document.captureEvents(Event.MOUSEUP);


        //popup call
        function popupcall(url) {
            $('body').delegate('#' + options.sharebutton, 'click', function () {
                var left = (window.innerWidth / 2) - (600 / 2),
                top = (window.innerHeight / 2) - (300 / 2),
                popup = window.open(url, "twitter post", "width=600, height=300, top=" + top + ", left=" + left);

            });
        }


        //store every unique tay for display
        function tagsstore(tags) {
            var status = true;
            var tagarray = tags;

            if (tag_duplicate == true) {
                tagsdisplay.push(tagarray[0]);
                tag_duplicate = false;
            }

            for (var i = 0; i < tagarray.length; i++) {
                status = true;
                for (var j = 0; j < tagsdisplay.length; j++) {
                    var varFromMainLoop = tagarray[i];
                    var varFromSecLoop = tagsdisplay[j];
                    if (varFromMainLoop == varFromSecLoop) {
                        status = false;
                    }
                }
                if (status) {
                    tagsdisplay.push(tagarray[i]);

                }
            }
        }


        function taglistDisplay(container) {
            var liststring = "<ul>";
            for (var x in tagsdisplay) {
                liststring += "<li><a href='#'>" + tagsdisplay[x] + "</a></li>";
            }
            liststring += "<li><a href='#'>all</a></li>";
            liststring += "</ul>";
            $(container).append(liststring);
        }



        $('body').delegate('#' + options.tagcontainer+' ul li a', 'click', function () {

            nexttime = -1;
            var vxcout = 0;
            var st1,ed0;
			$('#' + options.tagcontainer+' ul li a').removeClass("active_cls");
			$(this).addClass("active_cls");
            current_status = $.trim($(this).html());
            if(current_status != 'all'){
                for (var y = 0; y < dataset.length; y++) {
                    if (dataset[y].tags != null && dataset[y].tags != "") {
                        if(dataset[y].tags.indexOf(current_status) > -1){
                            if(vxcout == 0){
                                st1 = dataset[y].elementid;
                            }
                            ++vxcout;
                            ed0 = dataset[y].elementid;
                        }
                    }
                }

                var tagStartTime = parseInt($('#' + st1).attr('data-m'));
                videoEndon = parseInt($('#' + ed0).attr('data-m'));
                videoele.currentTime =  tagStartTime / 1000;
                adjust(tagStartTime);
            }else{
                var tagStartTime = 0;
                videoEndon = videoele.duration * 1000;
                videoele.currentTime =  0;
                adjust(tagStartTime);
            }
            videoele.play();
        });

    }).success(function () {

        whenreadyfunction();
    });
}
