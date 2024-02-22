function initViewer() {
    var thumbs = document.querySelectorAll('.thumbnail_image');
    var i;
    for(i = 0; i < thumbs.length; i++) {
        onLoadImage(thumbs[i], 128, 128);
    }
    setWidth();
    setHeight();
}

function callReadme() {
    window.open('../../README.TXT');
    event.cancelBubble = true;
    return false;
}

function callUsage() {
    window.open(M_callUsagePath);
    event.cancelBubble = true;
    return false;
}

function setWidth() {
    var wkMag = document.documentElement.clientWidth / 800;
    if(wkMag < 1.0) {
        wkMag = 1.0;
    }
    document.getElementById('hospital_table').style.cssText = 'width:' + 780 * wkMag + 'px;';
    document.getElementById('hospital_name').style.cssText = 'width:' + 750 * wkMag + 'px;';
    document.getElementById('link_table').style.cssText = 'width:' + 780 * wkMag + 'px;';
    var patient_tables = document.querySelectorAll('.patient_table');
    for(var i = 0; i < patient_tables.length; i++)
    {
        patient_tables.item(i).style.cssText = 'width:' + 780 * wkMag + 'px;';
    }
    var study_tables = document.querySelectorAll('.study_table');
    for(var i = 0; i < study_tables.length; i++)
    {
        study_tables.item(i).style.cssText = 'width:' + 780 * wkMag + 'px;';
    }
    document.getElementById('hospital_footer_table').style.cssText = 'width:' + 780 * wkMag + 'px;';
}

function setHeight() {

}

var handleResize = function(){
   $(window).one("resize", function() {
      setWidth();
      setHeight();
      setTimeout("handleResize()",10);
   });
}
handleResize();
