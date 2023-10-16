document.querySelector('button').addEventListener('click', function(){
    const words = {
       algorithm:'Tsara abu daki-daki.',
       payload:'wani kayan aki neh da zaka iya amfani da shi lokacin (Hacking).',
       exploit:'Shi ne tools din da zaka amfani da shi.',
       crash:'program ya tsaya da aiki.',
       bit:'Karamin abu guda daya, shine kamar harafi daya misali \'A\'.',
       byte:'Shi Yafi \'bit\' girma, shi kamar kalma daya ne. misali \'suna\'.',
       hacking:'Kutse.',
       flowchart:'Zane ne wanda zaka sauke wa kanka aiki, ta hanyar rarraba shi gida-gida.',
       looping:'Maimata abu.',
       compromise:'Bayyanar asiri ko Asirin abu ya bayyana.',
       hash:'Wadan su key neh sirri.',
       breach:'',
       default:'Asalin abu ko na Asali.',
       malware:'Nau\'in virus ce wacce ke aiki batare da sanin mutum ba.',
       trojanhorse:'Nau\'in virus ce wacce ke aiki batare da sanin mutum ba.',
       cpu:'Kwakwalwar Computer.',
       ram:'Wani karamin memory ne a computer, dake rike bayanai na dan wani lokaci.',
       mouse: 'Abinda ake motsa arrow da shi',
       motherboard:'Gangar jiki ce a computer wacce ke dauke da dukwani abu a computer.',
       anonymous:'Boyayye',
       array:'Array kamar kwantaina ce a programming, mai iya daukar kowanne irin variable.',
       method:'Aiki ne',
       function:'Aiki neh',
       inheritance:'Wani abu ya gaji wani abu.',
       polymorphism:'',
       encapsulation:'',
       class:'Kamar blueprint ne. blueprint kuma zane ne.',
       blueprint:'Zanen abu kafin a gina shi. misali kamar zanen Gida.',
       protocol:'Hanyoyi ne da zasu sada ka da wani abu a bangaren website.',
       client:'mai amfani da wani abu. misali kamar browser.',
       computer:'Na\'ura mai lissafi',
       keyboard:'Malatsan computer.',
       monitor:'Screen din computer.',
       network:'Alaka.',
       networking:'Kulla aure ko alaka tsakanin abu guda biyu.',
       cache:'Karamin memory ne mai da bayanai na browser.',
       file:'Wani abu da zaka iya adana bayanai.',
       data:'duk wani abu. misali audio, video, document etc..',
       folder:'Ma\'adana',
       value:'abinda aka shigar, kamar number ce a cikin variable',
       variable:'Kwantaina',
       encription:'Saka wa abu tsaro, ta hanyar amfani da wani siddabaru.',
       format:'ma\'ana ta farko: Goge komai daga farko har karshe. ma\'ana ta biyu: Tsari.',
       constant:'Duk abinda baya chanzawa',
       k:'K na nufin constant, ma\'ana Duk abinda baya chanzawa',
       hardware:'Duk abinda ido ke iya gani, hannu ya taba.',
       confidentiality: 'Abinda wani bai kamata ya gani ba sai da izini',
       intergrity: 'Abinda wani bai kamata ya chanza ba sai da izini',
       availability: 'Yazama user yana da ikon amfani da shi.'
   
    };
    let word = document.getElementById('search').value.toLowerCase();
    if (word == "" || word == null){
        document.getElementById('demo1').innerText = 'Please Enter word';
    }else if(!words[word]){ 
        document.getElementById('demo1').innerText = word + ' not found in Hausa Dictionary';
    }else {
        document.getElementById('demo1').innerText = words[word];
    }
})
