var TOTAL_SERIES = 4;
var NUMBER_OF_IMAGES = [1, 100, 50, 199];
var REPORT_ROOT = '../../OTHER/VIEWER/';

//----------------------------------------------------------------------------
//IE判定
function isIE() {
    return navigator.userAgent.indexOf('msie') != -1 || navigator.userAgent.indexOf('MSIE') != -1
    || navigator.userAgent.indexOf('Trident') != -1 ? true : false;

}

//----------------------------------------------------------------------------
function isMatchBrowser() {
    var ua = window.navigator.userAgent.toLowerCase();
    var ver = window.navigator.appVersion.toLowerCase();
    var name = 'unknown';

    if (ua.indexOf("msie") != -1) {
        if (ver.indexOf("msie 6.") != -1) {
            name = 'ie6';
        } else if (ver.indexOf("msie 7.") != -1) {
            name = 'ie7';
        } else if (ver.indexOf("msie 8.") != -1) {
            name = 'ie8';
        } else if (ver.indexOf("msie 9.") != -1) {
            name = 'ie9';
        } else if (ver.indexOf("msie 10.") != -1) {
            name = 'ie10';
        } else {
            name = 'ie';
        }
    } else if (ua.indexOf('trident/7') != -1) {
        name = 'ie11';
    } else if (ua.indexOf('edge') != -1) {
        name = 'edge';
    } else if (ua.indexOf('chrome') != -1) {
        name = 'chrome';
    } else if (ua.indexOf('safari') != -1) {
        name = 'safari';
    } else if (ua.indexOf('opera') != -1) {
        name = 'opera';
    } else if (ua.indexOf('firefox') != -1) {
        name = 'firefox';
    }

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == name)
            return true;
    }

    return false;
}

//----------------------------------------------------------------------------
function isNullOrEmpty(value) 
{
    if (value == undefined
        || value == null
        || value == '') return true;
    else return false;
}

//----------------------------------------------------------------------------
function pad( number, length )
{
    var str = '' + number ;
    while ( str.length < length ) {
        str = '0' + str ;
    }
    return str ;
}

//----------------------------------------------------------------------------
function getUrlVars( )
{
    var vars = { } ;
    var parts = window.location.href.replace( /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        } ) ;
    return vars ;
}

//----------------------------------------------------------------------------
function makeImageDir( patientNo, studyNo, seriesNo )
{
    return ("../../OTHER/IMAGE/PT" + pad(patientNo, 6) + "/ST" + pad(studyNo, 6) + "/SE"
        + pad(seriesNo, 6) + "/");
}


//----------------------------------------------------------------------------
function makeImagePath( patientNo, studyNo, seriesNo, imageNo )
{
	return patientList[patientNo].studyList[studyNo].seriesList[seriesNo].imageList[imageNo].path;
}

//----------------------------------------------------------------------------
function showSeriesCine(patientNo, studyNo, seriesNo, imageNo, pdfPath) {
    window.location.href = 'CINE.HTM?pa=' + patientNo + '&st=' + studyNo
        + '&se=' + seriesNo + '&im=' + imageNo;
}

//----------------------------------------------------------------------------
function showSeriesTile(patientNo, studyNo, seriesNo, imageNo, pdfPath) {
    window.location.href = 'TILE.HTM?pa=' + patientNo + '&st=' + studyNo
        + '&se=' + seriesNo + '&im=' + imageNo;
}

//----------------------------------------------------------------------------
function onLoadImage(img, maxWidth, maxHeight) {
    var newWidth = maxWidth;
    var newHeight = maxHeight;
    if (img.width > img.height) {
        newWidth = maxWidth;
        newHeight = newWidth * (img.height / img.width);
    }
    else if (img.height > img.width) {
        newHeight = maxHeight;
        newWidth = newHeight * (img.width / img.height);    
    }
    img.width = newWidth;
    img.height = newHeight;
}

//----------------------------------------------------------------------------
function home()
{
    window.location.href = 'VIEWER.HTM';
}

//----------------------------------------------------------------------------
function createThumbnail(isTile){
	var numberOfSeries = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList.length;
	for (var i = 0; i < numberOfSeries; ++i) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.id = "thumb_"+ currentStudy  + "_" + (i+1);
        
        var thumImDiv = document.createElement('div');
        thumImDiv.className = "thumbnail_div";
        thumImDiv.id = "thumImDiv"+ currentStudy  + "_" + (i+1);
        
        var img = document.createElement('img');
        img.className = "thumbnail_image";
        img.alt = "サムネール" + currentStudy + "の"+ (i+1);
        if (isTile) {
            img.setAttribute("onclick", "showSeriesTile(" + currentPatient +  ", "+ currentStudy +", " + (i+1) +  ", 1)");
			img.setAttribute('onerror', "imageLoadErrorForTile(document.getElementById('" + thumImDiv.id + "'), this, 64)");
        }
        else {
            img.setAttribute("onclick", "showSeriesCine(" + currentPatient +  ", "+ currentStudy +", " + (i+1) +  ", 1)");
			img.setAttribute('onerror', "imageLoadErrorForCineThumb(document.getElementById('" + thumImDiv.id + "'), this, 64)");
        }

		var noImage = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[i].imageList[0].noImage;
		if(noImage == '1') {
	        img.style.cssText = "height:64px;width:64px;margin-top:18px;margin-left:18px;";
		}
		else {
	        //現画像から上下左右中央寄せのスタイルを設定する
	        setThumbnailImage(img, i);
		}
        img.src = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[i].imageList[0].path;

        thumImDiv.appendChild(img);
        td.appendChild(thumImDiv);
        tr.appendChild(td);
        document.getElementById("series_thumbs").appendChild(tr);
    }
}

//----------------------------------------------------------------------------
function setThumbnailImage(imageElement, i) {
    var img = new Image();
    img.onload = function(){
        var imgDivHeight = 100;
        var imgDivWidth  = 100;
       
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

    img.src = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList[i].imageList[0].path;
}

//----------------------------------------------------------------------------
function selectSeries(currentStudy, currentSeries)
{
    var selectedThum = '#' + 'thumb_' + currentStudy + '_' + currentSeries;
    $(selectedThum).css("background-color", "black");
    $(selectedThum).css("border-color", "#2BBCF0");
    $(selectedThum).css("border-style", "solid");
    $(selectedThum)[0].scrollIntoView(true);
}

// シネ表示、タイル表示時の左側のサムネールリストを作成
//----------------------------------------------------------------------------
function makeLeftThumbList(currentPatient, currentStudy, isTile)
{
    var table = document.getElementById('series_thumbs');
    
    var numberOfSeries = patientList[currentPatient - 1].studyList[currentStudy - 1].seriesList.length;
    for (i = 0; i < numberOfSeries; ++i) {
        var row = table.insertRow(i);
        var cell = row.insertCell(0);

        var img = document.createElement('img');
		img.setAttribute('src', makeImagePath(currentPatient - 1, currentStudy - 1, i, 0));
		img.setAttribute('onerror', 'imageLoadError(cell, this, 128)');
		img.setAttribute('onload', 'onLoadImage(this, 128, 128)');
        if (isTile) {
            img.setAttribute('onclick', 'showSeriesTile(' + currentPatient + ','
                + currentStudy + ',' + (i+1) + ',0)');
        }
        else {
            img.setAttribute('onclick', 'showSeriesCine(' + currentPatient + ','
                + currentStudy + ',' + (i+1) + ',1)');
        }
		img.style.height = "128px";
		img.style.width = "128px";

        cell.appendChild(img);
    }
}

// 選択してない検査のサムネイルを隠す

function hideThumbList(currentStudy) {
    var table = document.getElementById('series_thumbs');
    var rowCount = table.rows.length;
    var deleteIndexList = [];
    for (var i = 0; i < rowCount; ++i) {
        var thumbCol = table.rows[i].cells[0];
        var thumbId = thumbCol.id.split('_');
        if (currentStudy == thumbId[1]) continue;
        else {
            deleteIndexList.push(i);
            //table.deleteRow(i);
        }
    }

    var deleteCount = deleteIndexList.length;
    for (var i = deleteCount - 1; i >= 0; --i) {
        table.deleteRow(deleteIndexList[i]);
    }
}

// フォルダを開く
//----------------------------------------------------------------------------
function folderOpen(pathName)
{
    var title = M_folderOpen_title;
    if(!isIE()) {
        pathDialogShow(title, pathName);
    }
    else {
    	try {
    	    if( FilePath(location.pathname.replace(/\u002f/g, "\\")) ){ 
        	    pathName = FilePath.Drive + ":\\" + pathName;
        	}
    		window.open(pathName);
    	}
    	catch (e) {
    	    pathDialogShow(title, pathName);
    	}
    }
}

// ファイルの実行
//----------------------------------------------------------------------------
function runExe(shortcutPath, pathName)
{
    var title = M_runExe_title;
    if(!isIE()) {
        exePathDialogShow(title, shortcutPath);
    }
    else {
    	try {
    	    if( FilePath(location.pathname.replace(/\u002f/g, "\\")) ){ 
        	    pathName = FilePath.Drive + ":\\" + pathName;
        	}
    		location.href = pathName;
    	}
    	catch (e) {
    	    exePathDialogShow(title, shortcutPath);
    	}
    }
}

// パス表示
//----------------------------------------------------------------------------
function pathDialogShow(title, pathName)
{
	$("#folder-modal")[0].setAttribute("title", title);

    if( FilePath(location.pathname.replace(/\u002f/g, "\\")) ){ 
	    pathName = FilePath.Drive + ":\\" + pathName;
	}
	else {
	    alert(M_drive_alert);
	}
    //ファイルパス名を設定
	$('#dirName')[0].innerHTML = pathName;
	//ダイアログ表示
    $("#folder-modal").dialog({
        width: 700,       // 横幅のサイズを設定
        height:200,
        modal: true,      // モーダルダイアログにする
        resizable:false,
        // ボタン名 : 処理 を設定
        buttons: [{
            text: 'OK',
            click: function(){
                $(this).dialog("close");
            }
        }]
    });
    
	$('#dirName')[0].focus();	//テキストエリアをフォーカスする
	$('#dirName')[0].select();	//テキストエリアを全選択する
}

// 実行ファイル（ショートカット）のパス表示
//----------------------------------------------------------------------------
function exePathDialogShow(title, pathName)
{
	$("#exePath-modal")[0].setAttribute("title", title);
    //ドライブ＋パス名を生成
    if( FilePath(location.pathname.replace(/\u002f/g, "\\")) ){ 
	    pathName = FilePath.Drive + ":\\" + pathName;
	}
	else {
	    alert(M_drive_alert);
	    return;
	}
    //ファイル名取得
    FilePath(pathName);
    //フォルダ名、ファイル名を設定
	$('#exeDirName')[0].innerHTML = FilePath.Drive + ":\\" + FilePath.ParentDir;
	$('#exeFileName')[0].innerHTML = FilePath.FileName;
	//ダイアログ表示
    $("#exePath-modal").dialog({
        width: 700,       // 横幅のサイズを設定
        height:300,
        modal: true,      // モーダルダイアログにする
        resizable:false,
        // ボタン名 : 処理 を設定
        buttons: [{
            text: 'OK',
            click: function(){
                $(this).dialog("close");
            }
        }]
    });
    
	$('#exeDirName')[0].focus();	//テキストエリアをフォーカスする
	$('#exeDirName')[0].select();	//テキストエリアを全選択する
}

// ファイルのパスを引数として渡すと適当に分解
//----------------------------------------------------------------------------
function FilePath(str){
	var pattern = /(\w+):(?:\\([^\\:\*?\"<>\|]+))*(?:\\(([^:\\\*?\"<>\|]+)\.+([^:\\\*?\"<>\|]+)$))/;
	
	FilePath.result = str.match(pattern);
	if(FilePath.result){
		FilePath.FullPath = FilePath.result[0];//フルパス
		FilePath.Drive = FilePath.result[1];//ドライブ
		FilePath.ParentDir = FilePath.result[2];//親のディレクトリ
		FilePath.FileName = FilePath.result[3];//ファイル名
		FilePath.FileNameShort = FilePath.result[4];//拡張子を除いたファイル名
		FilePath.FileExt = FilePath.result[5];//拡張子
		
		return true;
	}
	return false;
}

// レポートリストを開く
//----------------------------------------------------------------------------
function reportListShow(currentPatient, currentStudy)
{
    $('#reportList').empty();

    var reportList = patientList[currentPatient - 1].studyList[currentStudy - 1].reportList;

    for (i = 0; i < reportList.length; ++i) {
        if (reportList[i].path != '') {
            var row = $('#reportList')[0].insertRow(-1);
            var cell = row.insertCell(-1);  
            var linkElement = document.createElement('a');
            linkElement.target = '_blank';
            linkElement.innerHTML = reportList[i].filename;
            linkElement.href = '../../OTHER/VIEWER/' + reportList[i].path;
            cell.appendChild(linkElement);
        }
    }
    $("#reportList-modal").dialog({
        width: 700,       // 横幅のサイズを設定
        height:400,
        modal: true,      // モーダルダイアログにする
        resizable:false,
        // ボタン名 : 処理 を設定
        buttons: [{
            text: M_reportListShow_close,
            click: function(){
                $(this).dialog("close");
            }
        }]
    });
}

// classの追加削除
//----------------------------------------------------------------------------
function addClass(el, classNameToAdd){
    el.className += ' ' + classNameToAdd;   
}

function removeClass(el, classNameToRemove){
    var elClass = ' ' + el.className + ' ';
    while(elClass.indexOf(' ' + classNameToRemove + ' ') !== -1){
         elClass = elClass.replace(' ' + classNameToRemove + ' ', '');
    }
    el.className = elClass;
}
