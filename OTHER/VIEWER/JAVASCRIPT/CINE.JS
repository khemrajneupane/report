var imageDir = '' ;
var currentPatient = '';
var currentStudy = 0;
var currentSeries = 0;
var imageIndex = 1;
var timerID = null;

var TIMEOUT = 66;

var G_ReportList = [];


//----------------------------------------------------------------------------
function initCine() {
    var vars = getUrlVars();
    imageDir = makeImageDir(vars['pa'], vars['st'], vars['se']);
	currentPatient = parseInt(vars['pa']);
    currentStudy = parseInt(vars['st']);
    currentSeries = parseInt(vars['se']);
    imageIndex = parseInt(vars['im']);

    //---------------
	//患者情報取得
    //---------------
	//患者の配列番号
	document.getElementById('patient_no').value = currentPatient;   //-1しない事
	//患者名
	document.getElementById('patient_name').innerText = patientList[currentPatient - 1].patientName;
    document.getElementById('patient_name').setAttribute('title', patientList[currentPatient - 1].patientName);
	//性別
	document.getElementById('patient_sex').innerText = patientList[currentPatient - 1].patientSex;
    //生年月日
	document.getElementById('patient_birth').innerText = patientList[currentPatient - 1].patientBirthDate;
    //---------------
	//検査情報取得
    //---------------
	var table = document.getElementById("study_table_id");
	//検査日時
    table.rows[1].cells[0].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].studyDate + ' ' + patientList[currentPatient - 1].studyList[currentStudy - 1].studyTime;
    //モダリティ
    table.rows[1].cells[1].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].modalitiesInStudy;
    table.rows[1].cells[1].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].modalitiesInStudy);
    //部位
    table.rows[1].cells[2].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].bodypartsInStudy;
    table.rows[1].cells[2].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].bodypartsInStudy);
    //枚数
    table.rows[1].cells[3].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].studyImageCount;
    //検査記述
    table.rows[1].cells[4].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].studyDescription;
    table.rows[1].cells[4].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].studyDescription);
    //レポート
    if(patientList[currentPatient - 1].studyList[currentStudy - 1].reportList.length > 0){
        table.rows[1].cells[5].innerHTML = "<a class='study_rep_value pointer' onclick='reportListShow(currentPatient, currentStudy)'>" + M_reportListExist + "</a>";
    }
    //---------------
    //シリーズ情報取得
    //---------------
	var table = document.getElementById("series_table_id");
    //シリーズNo
    table.rows[1].cells[0].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesNumber;
    table.rows[1].cells[0].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesNumber);
    //モダリティ@シリーズ
    table.rows[1].cells[1].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].modality;
    table.rows[1].cells[1].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].modality);
    //枚数@シリーズ
    table.rows[1].cells[2].innerText = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageCount;
    //プロトコル名
    table.rows[1].cells[3].innerHTML = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesProtocol;
    table.rows[1].cells[3].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesProtocol);
    //シリーズ記述
    table.rows[1].cells[4].innerHTML = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesDescription;
    table.rows[1].cells[4].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesDescription);
    //---------------
    //サムネイル情報取得とテーブルへ追加
    //---------------
    createThumbnail(false);
    //---------------
    //サムネイル表示
    //---------------
	makeLeftThumbList(vars['pa'], vars['st'], false);
	hideThumbList(currentStudy);
    selectSeries(currentStudy, currentSeries);
    //---------------
    //イメージ表示
    //---------------
    displayImg();
}

//----------------------------------------------------------------------------
function startTimer() {
    var numberOfImages = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageList.length;
    if (numberOfImages > 1 && null == timerID) {
        timerID = window.setInterval(timerCallback, TIMEOUT);
    }
}

//----------------------------------------------------------------------------
function timerCallback() {
    nextImg();
}

//----------------------------------------------------------------------------
function nextImg() {
    imageIndex = imageIndex + 1;
    var numberOfImages = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageList.length;
    if (imageIndex > numberOfImages) {
        imageIndex = 1;
    }
    displayImg();
}

//----------------------------------------------------------------------------
function displayImg() {
    setContentSize();
    
    var imgDiv = document.getElementById('imDiv');
    var height = document.getElementById('image_frame').clientHeight;
    var width  = document.getElementById('image_frame').clientWidth;
    var scaleSize = (height < width ? height : width);
    imgDiv.style.cssText = "height:" + scaleSize + "px;" + "width:" + scaleSize + "px;" + "margin:auto;text-align:center;"; 
   
    var imageElement = document.getElementById('image');
	var noImage = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageList[imageIndex - 1].noImage;
	if(noImage == '1') {
		var imgDivHeight = document.getElementById('imDiv').clientHeight;
		var imgTop = (imgDivHeight - 64) / 2;
    	imageElement.src = makeImagePath(currentPatient - 1, currentStudy - 1, currentSeries - 1, imageIndex - 1);
		imageElement.style.cssText = "height:64px;width:64px;" +  "margin-top:" + imgTop + "px;";
	}
	else {
    	imageElement.src = makeImagePath(currentPatient - 1, currentStudy - 1, currentSeries - 1, imageIndex - 1);
    	setImageSize(imageElement)
	}
}

//----------------------------------------------------------------------------
function stopTimer() {
    if ( null != timerID) {
        window.clearInterval(timerID);
        timerID = null ;
    }
}

//----------------------------------------------------------------------------
function previousImg() {
    imageIndex = imageIndex - 1 ;
    if (imageIndex < 1) {
        imageIndex = 1 ;
    }
    displayImg();
}

//----------------------------------------------------------------------------
function nextImg() {
    imageIndex = imageIndex + 1;
    var numberOfImages = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageList.length;
    if (imageIndex > numberOfImages) {
        imageIndex = 1;
    }
    displayImg();
}

//----------------------------------------------------------------------------
function previousSeries() {
    var vars = getUrlVars();
    var numberOfSeries = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList.length;
    if (currentSeries > 1 && currentSeries <= numberOfSeries) {
        showSeriesCine(vars['pa'], vars['st'], currentSeries - 1, 1);
    }
}

//----------------------------------------------------------------------------
function nextSeries() {
    var vars = getUrlVars();
    var numberOfSeries = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList.length;
    if (currentSeries >= 1 && currentSeries < numberOfSeries) {
        showSeriesCine(vars['pa'], vars['st'], currentSeries + 1, 1);
    }
}

//----------------------------------------------------------------------------
function doTile(element) {
    var im = 0;
    if (element.id == 'image') {
        im = imageIndex;
    }
    var vars = getUrlVars();
    window.location.href = 'TILE.HTM?pa=' + vars['pa'] + '&st=' + vars['st']
        + '&se=' + vars['se'] + '&im=' + im;
}

// シリーズ呼び出し(seriesNoは実際のシリーズNoでなく何個目のシリーズか
//----------------------------------------------------------------------------
function showSeries(patientNo, studyNo, seriesNo, imageNo, pdfPath) {
    window.location.href = 'mCINE.HTM?pa=' + patientNo + '&st=' + studyNo
        + '&se=' + seriesNo + '&im=' + imageNo;
}

//----------------------------------------------------------------------------
function setContentSize() {
    var wkClientHeight = document.documentElement.clientHeight >= 600 ? document.documentElement.clientHeight : 600;
    var wkClientWidth  = document.documentElement.clientWidth  >= 800 ? document.documentElement.clientWidth  : 800;
    setWidth(wkClientHeight, wkClientWidth);
    setHeight(wkClientHeight, wkClientWidth);
}

//----------------------------------------------------------------------------
function setWidth(pwClientHeight, pwClientWidth) {
    var wkMag = pwClientWidth / 800;
    document.getElementById('patient_table').style.cssText = 'width:' + 780 * wkMag + 'px;';
    document.getElementById('link_table').style.cssText = 'width:' + 780 * wkMag + 'px;';
    var detail_table = document.querySelectorAll('.detail_table');
    for(var i = 0; i < detail_table.length; i++)
    {
        detail_table.item(i).style.cssText = 'width:' + 780 * wkMag + 'px;';
    }
    document.getElementById('tool_table').style.cssText = 'width:' + 780 * wkMag + 'px;';
    document.getElementById('thumbnail_image_table').style.cssText = 'width:' + 780 * wkMag + 'px;';
    document.getElementById('comment').style.cssText = 'width:' + 780 * wkMag + 'px;';
}

//----------------------------------------------------------------------------
function setHeight(pwClientHeight, pwClientWidth) {
    var wk_image_frame_height = 400 + (pwClientHeight - 600);
    var wk_image_frame_width  = 620 + (pwClientWidth  - 800);
    
    if(wk_image_frame_width > 1000) {
        wk_image_frame_width = 1000;
    }
    
    document.getElementById('image_frame').style.cssText = 'height:' + wk_image_frame_height + 'px;' + 'width:' + wk_image_frame_width + 'px;';
    document.getElementById('series_thumbnail').style.cssText = 'height:' + wk_image_frame_height + 'px;';
}

//----------------------------------------------------------------------------
function setImageSize(imageElement) {
    var img = new Image();
    
    img.onload = function(){
        var imgDivHeight = document.getElementById('imDiv').clientHeight;
        var imgDivWidth  = document.getElementById('imDiv').clientWidth;
       
        //原画像が横 >= 縦の場合
        if(img.width >= img.height){
            //横の倍率を取得
            var scale = imgDivWidth / img.width;
            //画像サイズ設定
            var imWidth  = imgDivWidth;
            var imHeight = img.height * scale;
            //画像位置設定
            var imgTop = (imgDivHeight - imHeight) / 2;
            var imgLeft = 0;
        }
        //原画像が横＜縦の場合
        else if(img.width < img.height){
            //縦の倍率を取得
            var scale = imgDivHeight / img.height;
            //画像サイズ設定
            var imWidth  = img.width * scale;
            var imHeight = imgDivHeight;
            //画像位置設定
            var imgTop = 0;
            var imgLeft = (imgDivWidth - imWidth) / 2;
        }
        imageElement.style.cssText = "height:" + imHeight  +  "px;" + "width:" + imWidth + "px;" +  "margin-top:" + imgTop + "px;"  + "margin-left:" + imgLeft + "px;";
    }

    img.src = makeImagePath(currentPatient - 1, currentStudy - 1, currentSeries - 1, imageIndex - 1);
}

//----------------------------------------------------------------------------
var handleResize = function(pwClientHeight, pwClientWidth){
   $(window).one("resize", function() {
      displayImg();
      setTimeout("handleResize()",10);
   });
}
handleResize();

//----------------------------------------------------------------------------
$(function(){
    var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $('#image_frame').on(mousewheelevent,function(e){
        e.preventDefault();
        var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
        if (delta < 0){
            nextImg();
        } else {
            previousImg();
        }
    });
});

// img.srcのロードエラー時の共通関数
//----------------------------------------------------------------------------
function imageLoadErrorForCine(parent, img, size) {
	var parentHeight = parent.clientHeight;
	var parentWidth = parent.clientWidth;
	var imgTop = (parentHeight - 64) / 2;
	var imgLeft = (parentWidth - 64) / 2;
	img.style.cssText = 'height:' + size + 'px;' + 'width:' + size + 'px;' +  "margin-top:" + imgTop + "px;";
	img.width = size;
	img.height= size;
	img.src='../../OTHER/VIEWER/IMAGE/noData' + size + 'px.bmp';
}

// img.srcのロードエラー時の共通関数（サムネイル用）
//----------------------------------------------------------------------------
function imageLoadErrorForCineThumb(parent, img, size) {
	var parentHeight = parent.clientHeight;
	var parentWidth = parent.clientWidth;
	var imgTop = (parentHeight - 64) / 2;
	var imgLeft = (parentWidth - 64) / 2;
	img.style.cssText = 'height:' + size + 'px;' + 'width:' + size + 'px;' +  "margin-top:" + imgTop + "px;" + "margin-left:" + imgLeft + "px;";
	img.width = size;
	img.height= size;
	img.src='../../OTHER/VIEWER/IMAGE/noData' + size + 'px.bmp';
}
