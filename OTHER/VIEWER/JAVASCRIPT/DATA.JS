
    function ImageInfo(p, noImg) {
        this.path = p;
        this.noImage = noImg;
    }

    function ReportInfo(p) {
        this.path = p;
        this.filename = p.replace(/^.*[\\\/]/, '');
    }

    function SeriesInfo(number, mod, images, description, protocol) {
        this.seriesNumber = number;
        this.modality = mod;
        this.imageCount = images;
        this.seriesDescription = description;
        this.seriesProtocol = protocol;
        this.imageList = new Array();
    }

    function StudyInfo(date, time, modalities, bodyparts, images, description) {
        this.studyDate = date;
        this.studyTime = time;
        this.modalitiesInStudy = modalities;
        this.bodypartsInStudy = bodyparts;
        this.studyImageCount = images;
        this.studyDescription = description;
        this.reportList = new Array();
        this.seriesList = new Array();
    }

    function PatientInfo(name, kana, alphabet, birthDate, sex) {
        var wkName = "";

        if(!isNullOrEmpty(name))
            wkName = name;
        else if(!isNullOrEmpty(kana))
            wkName = kana;
        else if(!isNullOrEmpty(alphabet))
            wkName = alphabet;
        else
            wkName = "(no name)";

        this.patientName = wkName.split('^').join(' ');
        this.patientBirthDate = birthDate;
        this.patientSex = sex;
        this.studyList = new Array();
    }
    
    var patientList = [];
    {
    var patientInfo = {};
    
    patientInfo = new PatientInfo('KHEM RAJ NEUPANE', '', 'KHEM RAJ NEUPANE','24 Jan. 1979', 'M');
    
    patientInfo.studyList.push(new StudyInfo('23 Jul. 2023', '11:59:19AM', 'MR', 'SPINE', '260', 'MRI WHOLE SPINE SCR WITH LS SPINE'));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('101', 'MR', '10', 'SURVEY_SAG', 'SURVEY_SAG'));
        
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000000.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000001.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000002.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000003.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000004.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000005.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000006.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000007.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000008.jpg', ''));
    
    patientInfo.studyList[0].seriesList[0].imageList.push(new ImageInfo('JPEG/000009.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('103', 'MR', '5', 'MobiView SURVEY_SAG', 'MobiView SURVEY_SAG'));
        
    patientInfo.studyList[0].seriesList[1].imageList.push(new ImageInfo('JPEG/000010.jpg', ''));
    
    patientInfo.studyList[0].seriesList[1].imageList.push(new ImageInfo('JPEG/000011.jpg', ''));
    
    patientInfo.studyList[0].seriesList[1].imageList.push(new ImageInfo('JPEG/000012.jpg', ''));
    
    patientInfo.studyList[0].seriesList[1].imageList.push(new ImageInfo('JPEG/000013.jpg', ''));
    
    patientInfo.studyList[0].seriesList[1].imageList.push(new ImageInfo('JPEG/000014.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('201', 'MR', '10', 'SURVEY_COR', 'SURVEY_COR'));
        
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000015.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000016.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000017.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000018.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000019.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000020.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000021.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000022.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000023.jpg', ''));
    
    patientInfo.studyList[0].seriesList[2].imageList.push(new ImageInfo('JPEG/000024.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('203', 'MR', '5', 'MobiView SURVEY_COR', 'MobiView SURVEY_COR'));
        
    patientInfo.studyList[0].seriesList[3].imageList.push(new ImageInfo('JPEG/000025.jpg', ''));
    
    patientInfo.studyList[0].seriesList[3].imageList.push(new ImageInfo('JPEG/000026.jpg', ''));
    
    patientInfo.studyList[0].seriesList[3].imageList.push(new ImageInfo('JPEG/000027.jpg', ''));
    
    patientInfo.studyList[0].seriesList[3].imageList.push(new ImageInfo('JPEG/000028.jpg', ''));
    
    patientInfo.studyList[0].seriesList[3].imageList.push(new ImageInfo('JPEG/000029.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('301', 'MR', '15', 'T2W_TSE', 'T2W_TSE CLEAR'));
        
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000030.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000031.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000032.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000033.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000034.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000035.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000036.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000037.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000038.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000039.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000040.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000041.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000042.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000043.jpg', ''));
    
    patientInfo.studyList[0].seriesList[4].imageList.push(new ImageInfo('JPEG/000044.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('302', 'MR', '15', 'T2W_TSE', 'T2W_TSE CLEAR'));
        
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000045.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000046.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000047.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000048.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000049.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000050.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000051.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000052.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000053.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000054.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000055.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000056.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000057.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000058.jpg', ''));
    
    patientInfo.studyList[0].seriesList[5].imageList.push(new ImageInfo('JPEG/000059.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('401', 'MR', '20', 'T2W_SPAIR', 'T2W_SPAIR SENSE'));
        
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000060.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000061.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000062.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000063.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000064.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000065.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000066.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000067.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000068.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000069.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000070.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000071.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000072.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000073.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000074.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000075.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000076.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000077.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000078.jpg', ''));
    
    patientInfo.studyList[0].seriesList[6].imageList.push(new ImageInfo('JPEG/000079.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('501', 'MR', '15', 'T1W_TSE', 'T1W_TSE SENSE'));
        
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000080.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000081.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000082.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000083.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000084.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000085.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000086.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000087.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000088.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000089.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000090.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000091.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000092.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000093.jpg', ''));
    
    patientInfo.studyList[0].seriesList[7].imageList.push(new ImageInfo('JPEG/000094.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('502', 'MR', '15', 'eT1W_TSE SENSE', 'eT1W_TSE SENSE'));
        
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000095.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000096.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000097.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000098.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000099.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000100.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000101.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000102.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000103.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000104.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000105.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000106.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000107.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000108.jpg', ''));
    
    patientInfo.studyList[0].seriesList[8].imageList.push(new ImageInfo('JPEG/000109.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('601', 'MR', '15', 'STIR_longTE', 'STIR_longTE SENSE'));
        
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000110.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000111.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000112.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000113.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000114.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000115.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000116.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000117.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000118.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000119.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000120.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000121.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000122.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000123.jpg', ''));
    
    patientInfo.studyList[0].seriesList[9].imageList.push(new ImageInfo('JPEG/000124.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('602', 'MR', '15', 'eSTIR_longTE SENSE', 'eSTIR_longTE SENSE'));
        
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000125.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000126.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000127.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000128.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000129.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000130.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000131.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000132.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000133.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000134.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000135.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000136.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000137.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000138.jpg', ''));
    
    patientInfo.studyList[0].seriesList[10].imageList.push(new ImageInfo('JPEG/000139.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('701', 'MR', '30', 'T2W_TSE_DRIVE_HR', 'T2W_TSE_DRIVE_HR CLEAR'));
        
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000140.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000141.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000142.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000143.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000144.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000145.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000146.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000147.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000148.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000149.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000150.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000151.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000152.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000153.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000154.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000155.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000156.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000157.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000158.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000159.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000160.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000161.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000162.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000163.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000164.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000165.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000166.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000167.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000168.jpg', ''));
    
    patientInfo.studyList[0].seriesList[11].imageList.push(new ImageInfo('JPEG/000169.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('702', 'MR', '30', 'eT2W_TSE_DRIVE_HR CLEAR', 'eT2W_TSE_DRIVE_HR CLEAR'));
        
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000170.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000171.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000172.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000173.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000174.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000175.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000176.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000177.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000178.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000179.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000180.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000181.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000182.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000183.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000184.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000185.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000186.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000187.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000188.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000189.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000190.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000191.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000192.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000193.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000194.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000195.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000196.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000197.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000198.jpg', ''));
    
    patientInfo.studyList[0].seriesList[12].imageList.push(new ImageInfo('JPEG/000199.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('801', 'MR', '30', 'T1W_TSE', 'T1W_TSE SENSE'));
        
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000200.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000201.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000202.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000203.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000204.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000205.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000206.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000207.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000208.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000209.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000210.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000211.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000212.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000213.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000214.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000215.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000216.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000217.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000218.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000219.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000220.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000221.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000222.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000223.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000224.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000225.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000226.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000227.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000228.jpg', ''));
    
    patientInfo.studyList[0].seriesList[13].imageList.push(new ImageInfo('JPEG/000229.jpg', ''));
    
    patientInfo.studyList[0].seriesList.push(new SeriesInfo('802', 'MR', '30', 'eT1W_TSE SENSE', 'eT1W_TSE SENSE'));
        
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000230.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000231.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000232.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000233.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000234.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000235.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000236.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000237.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000238.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000239.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000240.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000241.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000242.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000243.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000244.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000245.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000246.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000247.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000248.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000249.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000250.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000251.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000252.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000253.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000254.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000255.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000256.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000257.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000258.jpg', ''));
    
    patientInfo.studyList[0].seriesList[14].imageList.push(new ImageInfo('JPEG/000259.jpg', ''));
    
    patientList.push(patientInfo);
  }function ReportListElement(currentPatient, currentStudy) {
      var linkElement;
      for (var i = 0; i < patientList[currentPatient - 1].studyList[currentStudy - 1].reportList.length; ++i) {
        if (patientList[currentPatient - 1].studyList[currentStudy - 1].reportList[i].path != '') {
          linkElement = _doc.createElement('a');
          linkElement.target = '_blank';
          linkElement.innerHTML = patientList[currentPatient - 1].studyList[currentStudy - 1].reportList[i].filename;
          linkElement.href = '../../OTHER/VIEWER/' + patientList[currentPatient - 1].studyList[currentStudy - 1].reportList[i].path;
        }
      }
      return linkElement;
    }