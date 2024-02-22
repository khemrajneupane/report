var imageDir = '';
var currentPatient = 0;
var currentSeries = 0;
var currentPage = 0;
var NUMBER_OF_CELLS = 9;
var selectImage = 0;
var selectSeriesImgCnt = 0;
var numberOfPages = 0;

//----------------------------------------------------------------------------
function initTile()  {
    var vars = getUrlVars();
    imageDir = makeImageDir(vars['pa'], vars['st'], vars['se'], vars['im']);
    currentPatient = parseInt(vars['pa']);
    currentStudy = parseInt(vars['st']);
    currentSeries = parseInt(vars['se']);

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
    var wkSelectSeriesImgCnt = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageCount;
    selectSeriesImgCnt = isNaN(wkSelectSeriesImgCnt) ? 0 : parseInt(wkSelectSeriesImgCnt);
    //プロトコル名
    table.rows[1].cells[3].innerHTML = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesProtocol;
    table.rows[1].cells[3].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesProtocol);
    //シリーズ記述
    table.rows[1].cells[4].innerHTML = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesDescription;
    table.rows[1].cells[4].setAttribute('title', patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].seriesDescription);
    //---------------
    //サムネイル情報取得とテーブルへ追加
    //---------------
    createThumbnail(true);
    //---------------
    //サムネイル表示
    //---------------
    makeLeftThumbList(vars['pa'], vars['st'], true);
	hideThumbList(currentStudy);
    selectSeries(currentStudy, currentSeries);
    //---------------
    //イメージ表示
    //---------------
    selectImage = 0;
    if (parseInt(vars['im']) != 0) {
        selectImage = parseInt(vars['im']);
        currentPage = calcPage(selectImage - 1);
    }
    displayPage();
}

//----------------------------------------------------------------------------
function previousPage() {
    if (currentPage > 0) {
        currentPage = currentPage - 1;
        displayPage();
    }
}

//----------------------------------------------------------------------------
function nextPage() {
    if (currentPage < (numberOfPages - 1)) {
        currentPage = currentPage + 1;
        displayPage();
    }
}

//----------------------------------------------------------------------------
function calcPage(imageIndex) {
    return Math.floor(imageIndex / NUMBER_OF_CELLS);
}

//----------------------------------------------------------------------------
function displayPage() {

    setContentSize();

    var imgIdx = currentPage * NUMBER_OF_CELLS;

    var selectImageIdx = 0;
    if (selectImage != 0) {
        selectImageIdx = selectImage - (currentPage * NUMBER_OF_CELLS);
    }

    var numberOfImages = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageList.length;
    var count = 1;
    while (count <= NUMBER_OF_CELLS) {
        var img = document.getElementById('im' + count);
        var imgDiv = document.getElementById('imDiv' + count);
        
        var height = document.getElementById('image_frame').clientHeight;
        var width  = document.getElementById('image_frame').clientWidth;
        var scaleSize = (height < width ? height : width) / 3 - 5;
        imgDiv.style.cssText = "height:" + scaleSize + "px;" + "width:" + scaleSize + "px;" + "position:relative;"; 

        if (imgIdx < numberOfImages) {
	        var noImage = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[currentSeries - 1].imageList[imgIdx].noImage;
	        if(noImage == '1') {
				var imgDivHeight = imgDiv.clientHeight;
				var imgDivWidth = imgDiv.clientWidth;
				var imgTop = (imgDivHeight - 64) / 2;
				var imgLeft = (imgDivWidth - 64) / 2;
				img.style.cssText = "height:64px;width:64px;" +  "margin-top:" + imgTop + "px;" + "margin-left:" + imgLeft + "px;";
	 			img.src = makeImagePath(currentPatient - 1, currentStudy - 1, currentSeries - 1, imgIdx);
			}
			else {
	            if (count == selectImageIdx) {
					document.getElementById('td' + count).style.borderColor = '#ff0000';
	            }
	            else {
					document.getElementById('td' + count).style.borderColor = 'transparent';
	            }
	 			img.src = makeImagePath(currentPatient - 1, currentStudy - 1, currentSeries - 1, imgIdx);
	            removeClass(img, "cursor_pointer");
	            addClass(img, "cursor_pointer");
		        setImageSize(img);
			}
            imgIdx++;
        }
        else {
            document.getElementById('td' + count).style.backgroundColor = 'black';
            //document.getElementById('td' + count).style.backgroundColor = '#eeeeee';
            img.src = "../../other/viewer/image/blank.jpg";
            removeClass(img, "cursor_pointer");
	        setImageSize(img);
        }

        count++;
    }

    document.getElementById('prevPageBtn').disabled = (0 == currentPage);
    document.getElementById('nextPageBtn').disabled = (numberOfImages <= imgIdx);

    numberOfPages = Math.floor(numberOfImages/NUMBER_OF_CELLS);
    if(numberOfImages % NUMBER_OF_CELLS > 0)
        ++numberOfPages;
        
    document.getElementById('page_number').innerText = M_pageString + (1 + currentPage) + '/' + numberOfPages;

    var firstImg = currentPage * NUMBER_OF_CELLS + 1;
    var lastImg = firstImg + NUMBER_OF_CELLS;
    if (lastImg > numberOfImages) {
        lastImg = numberOfImages;
    }
}

//----------------------------------------------------------------------------
function nextSeries() {
    var vars = getUrlVars();
    var numberOfSeries = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList.length;
    if (currentSeries >= 1 && currentSeries < numberOfSeries) {
        window.location.href = 'TILE.HTM?pa=' + vars['pa'] + '&st='
            + vars['st'] + '&se=' + (currentSeries + 1) + '&im=0';
    }
}

//----------------------------------------------------------------------------
function previousSeries() {
    var vars = getUrlVars();
    var numberOfSeries = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList.length;
    if (currentSeries > 1 && currentSeries <= numberOfSeries) {
        window.location.href = 'TILE.HTM?pa=' + vars['pa'] + '&st='
            + vars['st'] + '&se=' + (currentSeries - 1) + '&im=0';
    }
}

//----------------------------------------------------------------------------
function doStack() {
    var vars = getUrlVars();
//    showSeriesCine(vars['pa'], vars['st'], vars['se'], 1);
    window.location.href = 'CINE.HTM?pa=' + vars['pa'] + '&st=' + vars['st']
        + '&se=' + vars['se'] + '&im=' + 1;
}

//----------------------------------------------------------------------------
function onClickImage(imageNumber) {
    var imageIndex = currentPage * NUMBER_OF_CELLS + imageNumber;
    if (imageIndex > selectSeriesImgCnt) return;

    var vars = getUrlVars();
//    showSeriesCine(vars['pa'], vars['st'], vars['se'], imageIndex);
    window.location.href = 'CINE.HTM?pa=' + vars['pa'] + '&st=' + vars['st']
        + '&se=' + vars['se'] + '&im=' + imageIndex;   
}

//----------------------------------------------------------------------------
function setContentSize() {
    var wkClientHeight = document.documentElement.clientHeight >= 600 ? document.documentElement.clientHeight:600;
    var wkClientWidth  = document.documentElement.clientWidth  >= 800 ? document.documentElement.clientWidth :800;
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
function setImageSize (imageElement) {
    var img = new Image();
    
    img.onload = function(){
        var height = document.getElementById('image_frame').clientHeight;
        var width  = document.getElementById('image_frame').clientWidth;
        var scaleSize = (height < width ? height : width) / 3 - 5;

        var imgTop  =  (scaleSize - scaleSize * (img.height / 512)) / 2;
        var imgLeft =  (scaleSize - scaleSize * (img.width  / 512)) / 2;

        imageElement.style.cssText = "max-height:100%;max-width:100%;height:auto;width:auto;" + "position:absolute;" + "top:" + imgTop + "px;"  + "left:" + imgLeft + "px;";
    }

    img.src = imageElement.src;
}

//----------------------------------------------------------------------------
var handleResize = function(){
   $(window).one("resize", function() {
      displayPage();
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
            nextPage();
        } else {
            previousPage();
        }
    });
});

// img.srcのロードエラー時の共通関数
//----------------------------------------------------------------------------
function imageLoadErrorForTile(parent, img, size) {
	var parentHeight = parent.clientHeight;
	var parentWidth = parent.clientWidth;
	var imgTop = (parentHeight - 64) / 2;
	var imgLeft = (parentWidth - 64) / 2;
	img.style.cssText = 'height:' + size + 'px;' + 'width:' + size + 'px;' +  "margin-top:" + imgTop + "px;" + "margin-left:" + imgLeft + "px;";
	img.width = size;
	img.height= size;
	img.src='../../OTHER/VIEWER/IMAGE/noData' + size + 'px.bmp';
}
