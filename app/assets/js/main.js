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
//        $("#" + options.transcriptContainerID).append('<div id="' + options.sharebutton + '" style="background-image: url(\'data:image/png;base64,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\');position: absolute;width: 48px;height: 50px;display:none;cursor: pointer;"></div>');
//        $("#" + options.transcriptContainerID).append('<div id="' + options.editbutton + '" style="width: 40px;height: 40px;position: absolute;top: 262px;left: 672.5px;display:none;cursor:pointer;background-image: url(\'data:image/png;base64,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\');" data-active="true"></div>');


        var dataset = [];
        var tagsdisplay = [];
        var editTagArray = [];
        var currentEditIndex = -1;
        var lastEditIndex = 0;
        var editModeArryIndex = 0;
        var videoele = document.getElementById(videoid);
        var scrollparent = $("#" + options.transcriptContainerID);
        var x = 0;
        var pid = 'p1';
//        var editbutton = $("#" + options.editbutton);
        var okbutton = "";
        var editelemetid = "";
        var mousestate1 = false;
        var mousestate2 = false;
        var inputele = $("#" + options.inputcontent);
        var editModeBtn = $('#' + options.editModebtn);

        var video_status = 'onplay';
        var tag_duplicate = true;
        var current_status = 'all';
        var videoEndon = 0;
        var nexttime = -1;
        var playMode = "normalMode";
        var playBackSpeed = 1;
        var intervalRewind;
        var editModeTags = [];
        var nextEditindex = 1
        var playbackStatus = false;
        var modifierKeys = [9, 20, 16, 17, 91, 18, 32, 92, 93, 8, 192, 186, 45, 36, 33, 46, 34, 35, 27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 145, 19, 144]

        $(videoele).on("timeupdate", function (event) {

            event.stopPropagation();

            var time = parseInt(this.currentTime * 1000);
            var flag = false;

            if (time >= videoEndon) {
                videoele.pause();
                videoEndon = videoele.duration * 1000;
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

            if (playMode == "editMode") {
                if (flag) {
                    var playfrom = -1;
                    var playto = -1;
//                    console.log(editTagArray);
                    if (editTagArray.length > 0) {
                        var editArrayL = editTagArray.length;

                        if (currentEditIndex < editArrayL && videoele.currentTime > (editTagArray[lastEditIndex].endTime / 1000)) {
                            if (currentEditIndex < (editArrayL - 1)) {
                                currentEditIndex += 1;
                            }

//                            console.log('editTagArray=' + currentEditIndex);

                            for (var y = x - 1; y < dataset.length; y++) {
//                                console.log(currentEditIndex);
                                if (dataset[y].elementid == editTagArray[currentEditIndex].id && editTagArray[currentEditIndex].allow == 1) {
                                    playfrom = editTagArray[currentEditIndex].startTime;
                                    lastEditIndex = currentEditIndex;
                                    videoele.currentTime = playfrom / 1000;

                                    adjust(playfrom);




                                    break;
                                }
                            }
                        }

                        if (videoele.currentTime > (editTagArray[editArrayL - 1].endTime / 1000)) {
                            videoele.pause();
                        }



//                        playto = editTagArray[currentEditIndex].endTime;



                    }
                }

            }



            var eleid = dataset[x - 1] ? dataset[x - 1].elementid : null;

            if (current_status == 'all' && eleid) {
                if (flag) {
                    if (playbackStatus == false) {
                        $("#" + eleid).addClass("onmovecolor");
                        if ($("#" + eleid).parent().parent().attr('id') != pid) {
                            pid = $("#" + eleid).parent().parent().attr('id');

                            scrollingdiv(scrollparent, $("#" + pid));
                        }

                    }

                    flag = false;

                }

            } else if (eleid) {
                if (flag) {
                    if (nexttime == -1) {
                        nexttime = x;
                    }
                    if (playbackStatus == false) {
                        $("#" + eleid).addClass("onmovecolor");
                        if ($("#" + eleid).parent().parent().attr('id') != pid) {
                            pid = $("#" + eleid).parent().parent().attr('id');

                            scrollingdiv(scrollparent, $("#" + pid));
                        }
                    }

                    if (x != nexttime) {
                        nexttime = x;
                        if (!(dataset[x - 1].tags.indexOf(current_status) > -1)) {
                            for (var z = x; z < dataset.length; ++z) {
                                if (dataset[z].tags.indexOf(current_status) > -1) {
                                    var nextid = dataset[z].elementid;
                                    if (nextid) {
                                        var skipingto = parseInt($('#' + nextid).attr('data-m'));
                                        videoele.currentTime = skipingto / 1000;
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




        var editcontent = "";
        var keyspressed = {}
        $(window).on('keydown', function (e) {

            var apos;
            var videoPosition = videoele.currentTime;
            var startTime = 0;
            var playBackRate = 1;
            var rewindSpeed = 0.1;
            console.log(e.which);

            //playBackRate
            if (options.maxPlayBackRate) {
                playBackRate = options.maxPlayBackRate;
            } else {
                playBackRate = 3;
            }

            //rewind Speed
            if (options.maxPlayBackRate) {
                rewindSpeed = options.maxRewindRate;
            } else {
                rewindSpeed = 0.1;
            }



            if (e.which == 186 && (keyspressed[e.which] == true || keyspressed[e.which] == false) && Object.keys(keyspressed).length == 1) {
                keyspressed[e.which] = false;
            } else {
                keyspressed[e.which] = true;
            }
//            
//            keyspressed[e.which] = true;




            if (Object.keys(keyspressed).length > 0) {
                apos = keyspressed[222];
            } else {
                apos = false;
            }

            //pause button(`) click
            if (e.which == 192) {
                videoele.playbackRate = 1.0;
                clearTimeout(intervalRewind);
                videoele.pause();
            }


            //play button(;) click
            if (e.which == 186 && keyspressed[e.which] == true && Object.keys(keyspressed).length == 1) {
                console.log("in");
                if (playMode == 'editMode') {
                    var skipBefore = "";
                    if ($('#' + options.inputcontent).length == 1) {
                        var replacecontent = $('#' + options.inputcontent).val();
                        skipBefore = $('#' + options.inputcontent).parent().attr('id');
                        $('#' + $('#' + options.inputcontent).parent().attr('id')).html(replacecontent);

                        addClassForEdited(skipBefore);
                        goBeforeEditedWord(skipBefore);


                    } else {

                        if (videoPosition > 1.5) {
                            startTime = videoPosition - 1.5;
                            videoele.playbackRate = 1.0;
                            clearTimeout(intervalRewind);
                            videoele.currentTime = startTime;
                            adjust(startTime * 1000);
                            videoele.play();


                        } else {
                            videoele.currentTime = 0;
                            adjust(0);
                            videoele.play();
                        }

                    }




                } else {

                    if (videoPosition > 1.5) {
                        startTime = videoPosition - 1.5;
                        videoele.playbackRate = 1.0;
                        clearTimeout(intervalRewind);
                        videoele.currentTime = startTime;
                        adjust(startTime * 1000);
                        videoele.play();


                    } else {
                        videoele.currentTime = 0;
                        adjust(0);
                        videoele.play();
                    }
                }

            }

            var nextskip = videoele.currentTime;
            //skip to the next editable true word when press tab
//            if (e.which == 9) {
//                e.preventDefault();


//
//
//                if (playMode == 'editMode') {
//                    if (currentEditIndex == -1) {
//                        lastEditIndex = 0;
//                        nextEditindex = 1
//                    } else {
//                        lastEditIndex = currentEditIndex;
//
//                        for (var a = currentEditIndex + 1; a < editTagArray.length; a++) {
//                            if (editTagArray[a].allow == 1) {
//                                nextEditindex = a;
//
//
////                                console.log('nextEditindex='+nextEditindex);
//                                break;
//                            }
//                        }
//
//
//
//                    }
//
//
//                    if (nextEditindex < editTagArray.length) {
//
//                        nextskip = editTagArray[nextEditindex].startTime;
//                        videoele.currentTime = (nextskip / 1000);
//                        adjust(nextskip);
//                    }
//
//
//                }
//
//
//                if ($('#' + options.inputcontent).length == 1) {
//                    var replacecontent = $('#' + options.inputcontent).val();
//
//                    $('#' + $('#' + options.inputcontent).parent().attr('id')).html(replacecontent);
//                }



//            }


            //skip back
            if (e.shiftKey && Object.keys(keyspressed).length == 1) {
//                e.preventDefault();
                console.log($(e.target).attr('id'));

                if ($(e.target).attr('id') != options.inputcontent) {
                    if (playMode == 'editMode') {
                        if (currentEditIndex < 1) {
                            lastEditIndex = 0;
                            nextEditindex = 0
                        } else {


                            for (var a = currentEditIndex - 1; a < editTagArray.length; a--) {
                                if (editTagArray[a].allow == 1) {
                                    nextEditindex = a;
                                    lastEditIndex = a;

//                                console.log('nextEditindex='+nextEditindex);
                                    break;
                                }
                            }


                        }

                        if (nextEditindex >= 0) {
                            nextskip = editTagArray[nextEditindex].startTime;
                            currentEditIndex = nextEditindex;
                            videoele.currentTime = (nextskip / 1000);
                            adjust(nextskip);
                        }

                        if ($('#' + options.inputcontent).length == 1) {
                            var replacecontent = $('#' + options.inputcontent).val();

                            $('#' + $('#' + options.inputcontent).parent().attr('id')).html(replacecontent);
                        }

                    }

                }


            }



            //edit word 
            var eventTarget = $(e.target).attr('id');
            var newdata = "";
            //edit mode inputs
            if (e.which == 13) {

                if (eventTarget == options.inputcontent) {

                    newdata = $('#' + eventTarget).val();
                    addClassForEdited($('#' + eventTarget).parent().attr('id'));
                    $('#' + $('#' + eventTarget).parent().attr('id')).html(newdata);

//                    editbutton.data('active', 'true');


                }
            }



            //windows
            if (navigator.platform.toUpperCase().indexOf('WIN') >= 0) {
                //increase playbackRate
                //forward
//                if (e.ctrlKey && e.shiftKey) {
                if (e.ctrlKey && e.which == 186 && Object.keys(keyspressed).length == 2) {
                    videoele.play();
                    if (videoele.playbackRate < playBackRate) {
                        videoele.playbackRate++;
                        playbackStatus = true;
//                        console.log("playbackRate=" + videoele.playbackRate);
                    }
                }


                //rewind


                if (e.ctrlKey && apos == true) {

                    intervalRewind = setTimeout(function () {
                        videoele.playbackRate = 1.0;

                        if (videoele.currentTime == 0) {
//                            clearInterval(intervalRewind);
                            clearTimeout(intervalRewind);
                            if (playMode == 'editMode') {
                                resetEditModePosition();

//                                videoele.currentTime = editTagArray[0].startTime / 1000;
//                                adjust(editTagArray[0].startTime);
                            }
                            videoele.play();
                        }
                        else {
                            videoele.currentTime += -rewindSpeed;
//                            adjust(videoele.currentTime * 1000);
                        }
                    }, 30);
                } else {

                }


            }


            //Mac
            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {


                // increase plabackRate for mac
//                if (e.metaKey && e.shiftKey) {
                if (e.metaKey == true && keyspressed[186] == true && Object.keys(keyspressed).length == 2) {
                    e.preventDefault();
                    videoele.play();
                    if (videoele.playbackRate < playBackRate) {
                        videoele.playbackRate++;
                        playbackStatus = true;
                        console.log("playbackRate=" + videoele.playbackRate);
                    }
                }


                //rewind for mac
                //(keyspressed[91] == true || keyspressed[224] == true || keyspressed[93] == true)
                if (e.metaKey && apos == true) {
                    intervalRewind = setTimeout(function () {
                        videoele.playbackRate = 1.0;
                        if (videoele.currentTime == 0) {
//                            clearInterval(intervalRewind);
                            clearTimeout(intervalRewind);
                            if (playMode == 'editMode') {
                                resetEditModePosition();
//                                videoele.currentTime = editTagArray[0].startTime / 1000;
//                                adjust(editTagArray[0].startTime);

                            }
                            console.log("athule");
                            videoele.play();
                        }
                        else {
                            videoele.currentTime += -rewindSpeed;
//                            adjust(videoele.currentTime * 1000);
                        }
                    }, 30);
                }

            }



            var wordWidth
            //add input for edit word
//            if (!(e.shiftKey || e.ctrlKey || apos == true || e.metaKey || e.which == 192 || e.which == 186 || e.which == 9 || e.which == 13 || e.which == 32 || e.which == 8 || modifierKeyCheck(e.which)==true)) {
            if (!(e.shiftKey || e.ctrlKey || apos == true || e.metaKey || e.which == 13 || modifierKeyCheck(e.which) == true)) {
                if (playMode == 'editMode') {
                    videoele.pause();
                    var word = $('#' + editTagArray[lastEditIndex].id);
                    var bool = ($('#' + options.inputcontent).length > 0);
                    wordWidth = word.width() + 10;




                    if (bool) {

                    } else {
//                        var editcontent = $('#' + editTagArray[lastEditIndex].id).html();
                        editcontent = $('#' + editTagArray[lastEditIndex].id).html();
                        $('#' + editTagArray[lastEditIndex].id).empty();
                        setTimeout(function () {
                            $('#' + editTagArray[lastEditIndex].id).html('<input id="' + options.inputcontent + '" type="text" placeholder="edit" value="' + editcontent + '" style="width:' + wordWidth + 'px;line-height: 1.7em;font-family: Lato,Arial,sans-serif;  font-size: 18px;"/>');
                            $("#" + options.inputcontent).focus();
                            $("#" + options.inputcontent)[0].select();
                        }, 50);

//                        $('#' + editTagArray[lastEditIndex].id).html('<input id="' + options.inputcontent + '" type="text" placeholder="edit" value="' + editcontent + '" style="width:' + wordWidth + 'px;line-height: 1.7em;font-family: Lato,Arial,sans-serif;  font-size: 18px;"/>');
//
//                        $("#" + options.inputcontent).focus();
                    }
                }




            }

            if (e.which == 27 && Object.keys(keyspressed).length == 1) {
                if (editcontent.length > 0 && $("#" + options.inputcontent).length == 1) {

                    $('#' + $('#' + options.inputcontent).parent().attr('id')).html(editcontent);


                }
            }


//            if (e.which == 32) {
            if (e.which == 9) {

                e.preventDefault();
                if (playMode == 'editMode') {
                    videoele.pause();
                    var tar = $(e.target).attr('id');
                    var tarparent = $(e.target).parent().attr('id')
                    if (tar = options.inputcontent) {
                        newdata = $('#' + eventTarget).val();

                        $('#' + tar).parent().empty();
                        $('#' + tarparent).html(newdata);
                        if (editcontent != newdata) {
                            addClassForEdited(tarparent);
                        }



                        for (var a = 0; a < editTagArray.length; a++) {
                            if (tarparent == editTagArray[a].id && (a + 1) < editTagArray.length) {


                                editcontent = $('#' + editTagArray[a + 1].id).html();

                                wordWidth = $('#' + editTagArray[a + 1].id).width() + 10;
                                $('#' + editTagArray[a + 1].id).empty();
                                console.log('gg=' + $('#' + options.inputcontent).length < 1);
                                if ($('#' + options.inputcontent).length < 1) {
                                    $('#' + editTagArray[a + 1].id).html('<input id="' + options.inputcontent + '" type="text" placeholder="edit" value="' + editcontent + '" style="width:' + wordWidth + 'px;line-height: 1.7em;font-family: Lato,Arial,sans-serif;  font-size: 18px;"/>');
                                }


//                                $("#" + options.inputcontent).parent().focus();
                                $("#" + options.inputcontent).focus();

                                setTimeout(function () {
                                    console.log("got focus");
                                    $("#" + options.inputcontent).focus();
                                    $("#" + options.inputcontent)[0].select();
                                }, 20);

                                lastEditIndex = a + 1;
                                currentEditIndex = a + 1;
                                resetEditModePosition();
                                break;
                            } else {
                                if ($('#' + options.inputcontent).length == 0 && !tarparent) {


                                    if (editTagArray[a].startTime > (videoele.currentTime * 1000)) {
                                        videoele.currentTime = editTagArray[a].startTime / 1000;
                                        lastEditIndex = a + 1;
                                        currentEditIndex = a + 1;
                                        resetEditModePosition();

                                        break;
                                    }

                                }
                            }
                        }

                    }


                }


            }




        });



        function  modifierKeyCheck(keyStrock) {


            for (var a = 0; a < modifierKeys.length; a++) {
                if (keyStrock == modifierKeys[a]) {
                    return true;
                }
            }

            return false;
        }


        function goBeforeEditedWord(id) {
            var skipidTime = '';
            for (var a = 0; a < dataset.length; a++) {
                if (id == dataset[a].elementid) {
                    skipidTime = dataset[a - 1].start;
                    break;
                }
            }


            if (skipidTime != null && skipidTime >= 0) {
                videoele.playbackRate = 1.0;
                clearInterval(intervalRewind);
                console.log("skipBefore=" + skipidTime);
                videoele.currentTime = skipidTime / 1000;
                adjust(skipidTime);

                videoele.play();
            }






        }


        function resetEditModePosition() {
            var currentPalyPosition = videoele.currentTime;
            for (var a = 0; a < editTagArray.length; a++) {
                if (editTagArray[a].endTime > (currentPalyPosition * 1000) && editTagArray[a].allow == 1) {
                    if (a == 0) {
                        lastEditIndex = 0;
                        currentEditIndex = -1;

                    } else {
                        lastEditIndex = a;
                        currentEditIndex = a;

                    }

                    break;

                    //off the time boundry situation
                } else if (editTagArray[a].endTime < (currentPalyPosition * 1000)
//                        && editTagArray[a + 1].startTime > (currentPalyPosition * 1000) && editTagArray[a].allow==1) {
                        && editTagArray[nextStartPosition(a)].startTime > (currentPalyPosition * 1000) && editTagArray[a].allow == 1) {

                    lastEditIndex = a;
                    currentEditIndex = a;
                    break;
                }


            }
        }



        $(document).on('keyup', function (e) {

            var startTimeKeyUp = 0;

            //release playBackRate
            if (keyspressed[186] == true && keyspressed[186] == true && Object.keys(keyspressed).length == 2) {
                videoele.playbackRate = 1.0;
//                console.log('playbackRate' + videoele.playbackRate);
                playbackStatus = false;
//                console.log('playbackStatus=' + playbackStatus);
            }

            //release rewind for Windows       
            if (navigator.platform.toUpperCase().indexOf('WIN') >= 0) {
            
            if (keyspressed[17] == true && keyspressed[222] == true && Object.keys(keyspressed).length == 2) {
                videoele.playbackRate = 1.0;



                if (playMode == 'editMode') {
                    if (videoele.currentTime <editTagArray[0].startTime) {
                        videoele.currentTime = editTagArray[0].startTime / 1000;
                        console.log("onna awa");
                        adjust(editTagArray[0].startTime);
                    }

                    resetEditModePosition();


                }


                if (videoele.currentTime > 1.5) {
                    startTimeKeyUp = videoele.currentTime - 1.5;
                    videoele.playbackRate = 1.0;
//                    clearInterval(intervalRewind);
                    clearTimeout(intervalRewind);
//                    console.log('keyup play' + startTimeKeyUp);
                    videoele.currentTime = startTimeKeyUp;
                    adjust(startTimeKeyUp * 1000);
                    videoele.play();


                } else {
                    videoele.currentTime = 0;
                    adjust(0);
                    videoele.play();
                }
            }
        }


            //Mac
            if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {

                //release rewind for MAC   
                //(keyspressed[91] == true || keyspressed[224] == true)
                if ((keyspressed[91] == true || keyspressed[224] == true || keyspressed[93] == true) && keyspressed[222] == true && Object.keys(keyspressed).length == 2) {
                    videoele.playbackRate = 1.0;
                    playbackStatus = false;


                    if (playMode == 'editMode') {
                        if (videoele.currentTime <editTagArray[0].startTime) {
                        videoele.currentTime = editTagArray[0].startTime / 1000;
                        console.log("onna awa mac");
                        adjust(editTagArray[0].startTime);
                    }
                        resetEditModePosition();
                    }


                    if (videoele.currentTime > 1.5) {
                        startTimeKeyUp = videoele.currentTime - 1.5;
                        videoele.playbackRate = 1.0;
//                    clearInterval(intervalRewind);
                        clearTimeout(intervalRewind);
                        console.log('keyup play' + startTimeKeyUp)
                        videoele.currentTime = startTimeKeyUp;
                        adjust(startTimeKeyUp * 1000);
                        videoele.play();


                    } else {
                        videoele.currentTime = 0;
                        adjust(0);
                        videoele.play();
                    }
                }


            }




            keyspressed = {};


        });



        //return the next allow=1 index in editTagArray
        //use for find next skip point in playMode=editMode
        function nextStartPosition(from) {
            for (var a = from + 1; a < editTagArray.length; a++) {
                if (editTagArray[a].allow == 1) {
                    return a;
                    break;
                }
            }
        }




        $("body").delegate(".normalcolor", "click", function () {
            var idval = $(this).attr("id");
            var po = 10;
            for (var i = 0; i < dataset.length; i++) {
                var datael = dataset[i];
                var eleid = datael.elementid;
                if (idval == eleid) {
                    po = datael.start / 1000;
//                    console.log('element to play=' + po);
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


            videoEndon = videoele.duration * 1000;
            var timeline = window.location.hash.replace('#', '').split('-');
            if (timeline.length == 2) {
                videoEndon = parseInt(timeline[1]);
                var videostart = parseInt(timeline[0]);
                videoele.currentTime = videostart / 1000;
            }



            taglistDisplay('#' + options.tagcontainer);
            videoele.play();

        }



        //store all necessary data when the transcript is ready
        $('#' + options.transcriptContainerID).ready(function () {

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

                var editmodeOptions = {};
                if ($(elem1).data("editable") == 'true' || $(elem1).data("editable") == true) {
                    if ($(elem1).hasClass('editModetext') == true) {
                        $(elem1).removeClass('editModetext');
                        $(elem1).removeClass('editModetext');
                    }


                    editmodeOptions = {
                        id: i + "id",
                        time: starttime,
                    }
                    editModeArry(editmodeOptions);
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

        });


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

//            $('#' + options.sharebutton).css("display", "none");


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
            else {
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

//                showCoords(e);
                document.getElementById(videoid).pause();

                if ($(document.getSelection().getRangeAt(0).endContainer.parentNode).parent().parent().parent().parent().parent().parent().attr('id') == options.transcriptContainerID) {
//                    document.getElementById(options.sharebutton).style.display = "block";
//                   
                } else {
//                    document.getElementById(options.sharebutton).style.display = "none";
//                    
                }

                var tx = t.toString().replace(/\s{2,}/g, ' ').replace(/$/g, '').replace(/&/g, ' ').replace(/;/g, '').replace(/#/g, ' ');
                var dataattr = $(document.getSelection().getRangeAt(0).startContainer.parentNode).attr('data-m');
                var dataattr2 = $(document.getSelection().getRangeAt(0).endContainer.parentNode).attr('data-m');
                var shareurl = window.location.href.replace(/#.*/, '') + '%23' + dataattr;
                var url = 'https://twitter.com/share?text=' + tx + '&url=' + shareurl + '-' + dataattr2;
//                popupcall(url);


            } else {
//                document.getElementById(options.sharebutton).style.display = "none";
//            
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



        $('body').delegate('#' + options.tagcontainer + ' ul li a', 'click', function () {

            nexttime = -1;
            var vxcout = 0;
            var st1, ed0;
            $('#' + options.tagcontainer + ' ul li a').removeClass("active_cls");
            $(this).addClass("active_cls");
            current_status = $.trim($(this).html());
            if (current_status != 'all') {
                for (var y = 0; y < dataset.length; y++) {
                    if (dataset[y].tags != null && dataset[y].tags != "") {
                        if (dataset[y].tags.indexOf(current_status) > -1) {
                            if (vxcout == 0) {
                                st1 = dataset[y].elementid;
                            }
                            ++vxcout;
                            ed0 = dataset[y].elementid;
                        }
                    }
                }

                var tagStartTime = parseInt($('#' + st1).attr('data-m'));
                videoEndon = parseInt($('#' + ed0).attr('data-m'));
                videoele.currentTime = tagStartTime / 1000;
                adjust(tagStartTime);
            } else {
                var tagStartTime = 0;
                videoEndon = videoele.duration * 1000;
                videoele.currentTime = 0;
                adjust(tagStartTime);
            }
            videoele.play();
        });





        var lastEndTime = 0;
        // store editMode element data in editTagArray
        function editModeArry(options) {
            var editStartTime = options.time - 3000;
            var editEndTime = options.time + 3000;

            if (editStartTime < 0) {
                editStartTime = 0;
            }

            var editObj = {
                id: options.id,
                startTime: editStartTime,
                endTime: editEndTime,
                allow: 0
            };

//            editModeTags.push(editObj);

            //checking the time gap between startTime and endTime  
            if (editTagArray.length > 0) {

//                if (editTagArray[editModeArryIndex].endTime > editObj.startTime) {

                if (lastEndTime > editObj.startTime) {
                    editTagArray[editModeArryIndex].endTime = editObj.endTime;
                    editTagArray.push(editObj);


                } else {
                    editObj.allow = 1;
                    lastEndTime = editObj.endTime;
                    editTagArray.push(editObj);
//                    editModeArryIndex += 1;
                    editModeArryIndex = editTagArray.length - 1;
//                    console.log("editObj.allow = 1   ......" + editTagArray[editModeArryIndex].id);
                }
            } else {
                lastEndTime = editObj.endTime;
                editObj.allow = 1;
                editTagArray.push(editObj);
//                console.log(editTagArray[0].id);
            }

//            console.log(editTagArray);

        }

        videoele.onloadeddata = function () {

            if (playMode == 'editMode') {
                videoele.currentTime = editTagArray[0].startTime / 1000;
                adjust(editTagArray[0].startTime);
            }



        };

        //this is change playMode function
        editModeBtn.on('click', function () {

            if (playMode == 'normalMode') {
                playMode = 'editMode';
                $(this).html("Enable Normal Mode");


                videoele.currentTime = editTagArray[0].startTime / 1000;
                adjust(editTagArray[0].startTime);

                var counter = 0;
                $("#" + options.transcriptContainerID + " p a").each(function (i) {

                    var elem1 = $("#" + options.transcriptContainerID).find("a")[counter];

                    if ($(elem1).data("editable") == 'true' || $(elem1).data("editable") == true) {

                        if ($(elem1).hasClass('editModetext') == true) {
                            $(elem1).removeClass('editModetext');
                            $(elem1).addClass('editModetext');
                        } else {
                            $(elem1).addClass('editModetext');
                        }
                    }
                    counter += 1;

                });
                lastEditIndex = 0;
                currentEditIndex = -1;

            } else if (playMode == 'editMode') {
                playMode = 'normalMode';
                $(this).html("Enable Edit Mode");



                var counter = 0;
                $("#" + options.transcriptContainerID + " p a").each(function (i) {

                    var elem1 = $("#" + options.transcriptContainerID).find("a")[counter];

                    if ($(elem1).data("editable") == 'true' || $(elem1).data("editable") == true) {

                        if ($(elem1).hasClass('editModetext') == true) {
                            $(elem1).removeClass('editModetext');

                        }

                        if ($(elem1).hasClass('onmovecolor') == true) {
                            $(elem1).removeClass('onmovecolor');

                        }

                        if ($(elem1).hasClass('editedColor') == true) {
                            $(elem1).removeClass('editedColor');

                        }


                        if ($(elem1).css('background').indexOf('rgcb(71, 201, 255)') >= 0) {
                            $(elem1).css('background', none);

                        }


                    }
                    counter += 1;

                });

                if ($('#' + options.inputcontent).length == 1) {
                    var replacecontent = $('#' + options.inputcontent).val();

                    $('#' + $('#' + options.inputcontent).parent().attr('id')).html(replacecontent);
                }


            }


//            console.log(playMode);
            videoele.play();
        });






        $("#" + videoid).on('play', function () {
            videoele.playbackRate = 1.0;
//            clearInterval(intervalRewind);
            clearTimeout(intervalRewind)

            if (playMode == 'editMode') {

                if ($('#' + options.inputcontent).length == 1) {
                    var replacecontent = $('#' + options.inputcontent).val();
                    var skipid = $('#' + options.inputcontent).parent().attr('id');
                    $('#' + $('#' + options.inputcontent).parent().attr('id')).html(replacecontent);

                    addClassForEdited(skipid);

                    goBeforeEditedWord(skipid);

                }
            }

        });



        function addClassForEdited(id) {

            if ($('#' + id).hasClass('edited')) {
                $('#' + id).removeClass('edited');
                $('#' + id).addClass('edited');

            } else {
                $('#' + id).addClass('edited');
            }

            $('#' + id).addClass('editedColor');


        }

        $("#" + videoid).on('pause', function () {
            videoele.playbackRate = 1.0;
//            clearInterval(intervalRewind);
            clearTimeout(intervalRewind)
        });
        $("#" + videoid).on('stop', function () {
            videoele.playbackRate = 1.0;
//            clearInterval(intervalRewind);
            clearTimeout(intervalRewind)
        });



    }).success(function () {

        whenreadyfunction();
    });
}
