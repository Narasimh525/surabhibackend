var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var request = require('request');
var app = express();
var multer  = require('multer')
var upload = multer()
const csv = require('csv-parser');
var https = require('https');
const path = require("path");
//var request1 = require('request').defaults({ encoding: null });

var rimraf = require("rimraf");
var cron = require('node-cron');
const download = require('image-downloader');
const fs = require('fs');
const { database } = require("./connectionnew");
var FileReader = require('filereader') , fileReader = new FileReader();
var FileAPI = require('file-api') , File = FileAPI.File , FileList = FileAPI.FileList , FileReader = FileAPI.FileReader;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var nodemailer = require('nodemailer');

const requestIp = require('request-ip');
const { response } = require("express");


app.use(cors());
app.use(bodyParser.json());



app.get('/automation',(req,res)=>{



function muzzleimage1()
{
var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = dd + ':' + mm + ':' + yyyy;
  var spawn = require("child_process").spawn; 
  dataary=[];
 farmerIDarray=[];
 cattleIdArray = [];
 arraylength=0;
 
 
 const arrayOfFiles = fs.readdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/")
 var folderlength=(arrayOfFiles.length)-1;
 
 
 console.log(folderlength);
   try {
 
        database.ref(`Files/data/cattles`).once("value", (snap) => {
          const data = snap.val();
          const cattleKeys = Object.keys(data);
          
          //var status='no';
          cattleKeys.forEach((key) => {
   
   cattleIdArray.push(data[key]);
             
          });
         const orginalarr = cattleIdArray.filter(character => {
 if(typeof character.timestamp==="string"){  
         return character.timestamp.includes(today);
 }
            
          });
          console.log(orginalarr.length);
           
 
          
          orginalarr.forEach((key,index)=>{
 
           var rownumber=index+1;
           var muzzleimage1=key['photos'][1]['url'];
            var muzzleimage2=key['photos'][2]['url'];
            var muzzleimage3=key['photos'][3]['url'];
 console.log(muzzleimage1);
 if(folderlength.toString().length=="3"){
 var folderlen="0";
 } else {
 var folderlen="";
 }
 console.log(folderlen);
 var dynamicfoldername=folderlength+rownumber;
 
 
 if (!fs.existsSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/"+folderlen+dynamicfoldername)){
     fs.mkdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/"+folderlen+dynamicfoldername);
 }
 if(!fs.existsSync("/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/train/"+folderlen+dynamicfoldername)){
 fs.mkdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/train/"+folderlen+dynamicfoldername);
 
 }
 
            if(key['farmerID']!=null){
 
            
 
 options = {
   url: muzzleimage1,
   dest: '/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/'+folderlen+dynamicfoldername+"/"+dynamicfoldername+'_1.jpg'      // will be saved to /path/to/dest/photo.jpg
 }
  
 download.image(options)
   .then(({ filename }) => {
     console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
   })
   .catch((err) => console.error(err))
   
 
   options1 = {
    url: muzzleimage2,
    dest: '/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/'+folderlen+dynamicfoldername+"/"+dynamicfoldername+'_2.jpg'      // will be saved to /path/to/dest/photo.jpg
  }
   
  download.image(options1)
    .then(({ filename }) => {
      console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
    })
    .catch((err) => console.error(err))





 var process = spawn('python3', ['/home/jupyter/mydata1/dvaraiffcotokio/train/fullcrop_muzzle.py','/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_1.jpg', '/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/train/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_1.jpg']);
  process.stdout.on('data', function (data) {
 
 console.log(data.toString('utf8'));
 });
 
  process.stderr.on('data', function (data) {
                 console.log(data.toString('utf8'));
 });
 

 var process1 = spawn('python3', ['/home/jupyter/mydata1/dvaraiffcotokio/train/fullcrop_muzzle.py','/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_2.jpg', '/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/train/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_2.jpg']);
 process1.stdout.on('data', function (data) {

console.log(data.toString('utf8'));
});

 process1.stderr.on('data', function (data) {
                console.log(data.toString('utf8'));
});





 fs.appendFile('/home/jupyter/mydata1/dvaraiffcotokio/folders.txt', '\n'+folderlen+dynamicfoldername+"---"+key['timestamp'], (err) => {
     if (err) throw err;
     console.log('File updated');
 });
 
         }
           })
 
          /*return res.status(201).json({
            status: "success",
            cattleIdArray,
          });*/
 
 
        });
      } catch (err) {
        console.log(err);
       /* return res.status(401).json({
          status: "failed",
        });*/
      }
 


}

//muzzleimage1();

function muzzleimage3()
{
var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = dd + ':' + mm + ':' + yyyy;

  var spawn = require("child_process").spawn; 
  dataary=[];
 farmerIDarray=[];
 cattleIdArray = [];
 arraylength=0;
 
 
 const arrayOfFiles = fs.readdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/")
 var folderlength=(arrayOfFiles.length)-1;
 
 
 console.log(folderlength);
   try {
 
        database.ref(`Files/data/cattles`).once("value", (snap) => {
          const data = snap.val();
          const cattleKeys = Object.keys(data);
          
          //var status='no';
          cattleKeys.forEach((key) => {
   
   cattleIdArray.push(data[key]);
             
          });
         const orginalarr = cattleIdArray.filter(character => {
 if(typeof character.timestamp==="string"){  
         return character.timestamp.includes(today);
 }
            
          });
          console.log(orginalarr.length);
           
 
          if(orginalarr.length>0) {
                      orginalarr.forEach((key,index)=>{
 
           var rownumber=index+1;
           var muzzleimage1=key['photos'][1]['url'];
            var muzzleimage2=key['photos'][2]['url'];
            var muzzleimage3=key['photos'][3]['url'];
 console.log(muzzleimage3);
 if(folderlength.toString().length=="3"){
 var folderlen="0";
 } else {
 var folderlen="";
 }
 console.log(folderlen);
 var dynamicfoldername=folderlength+rownumber;
 
 
 if (!fs.existsSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/"+folderlen+dynamicfoldername)){
     fs.mkdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/"+folderlen+dynamicfoldername);
 }
 if(!fs.existsSync("/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/test/"+folderlen+dynamicfoldername)){
 fs.mkdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/test/"+folderlen+dynamicfoldername);
 
 }
 
            if(key['farmerID']!=null){
 
            
 
 options = {
   url: muzzleimage3,
   dest: '/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/'+folderlen+dynamicfoldername+"/"+dynamicfoldername+'_3.jpg'      // will be saved to /path/to/dest/photo.jpg
 }
  
 download.image(options)
   .then(({ filename }) => {
     console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
   })
   .catch((err) => console.error(err))
   
 
 var process = spawn('python3', ['/home/jupyter/mydata1/dvaraiffcotokio/train/fullcrop_muzzle.py','/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_3.jpg', '/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/test/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_3.jpg']);
  process.stdout.on('data', function (data) {
 
 console.log(data.toString('utf8'));
 });
 
  process.stderr.on('data', function (data) {
                 console.log(data.toString('utf8'));
 });
 /*
 fs.appendFile('/home/jupyter/mydata1/dvaraiffcotokio/folders.txt', '\n'+folderlen+dynamicfoldername+"---"+key['timestamp'], (err) => {
     if (err) throw err;
     console.log('File updated');
 });*/
 
         }
           })
          }
 
          /*return res.status(201).json({
            status: "success",
            cattleIdArray,
          });*/
 
 
        });
      } catch (err) {
        console.log(err);
       /* return res.status(401).json({
          status: "failed",
        });*/
      }
 


}



//muzzleimage3();


function generatedailyreport(){

var spawn = require("child_process").spawn; 

var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = dd + ':' + mm + ':' + yyyy;
  const csvWriter = createCsvWriter({
    path: '/home/jupyter/mydata1/dvaraiffcotokio/ISA/reports/iffco_tokio_stats_Dec'+dd+'.csv',
    header: [
      {id: 'sno', title: 'S No'},
      {id: 'timestamp', title: 'Timestamp'},
      {id: 'agentnumber', title: 'Agent Number'},
      {id: 'farmerid', title: 'Farmer ID'},
      {id: 'farmername', title: 'Farmer Name'},
      {id: 'farmermobilenumber', title: 'Farmer Mobile Number'},
      {id: 'RFIDno', title: 'RFID No'},
      {id: 'muzzleimage', title: 'Muzzle_Image'},
      {id:'muzzle_type',title:'Muzzle_Type'},
      {id:'muzzle_score',title:'Muzzle_Score'}
      
    ]
  });
  dataarray=[];
  dataarray1=[];
farmerIDarray=[];
cattleIdArray = [];
cattleIdArray1 = [];
arraylength=0;
  try {

    database.ref(`Files/data/farmers/`).once("value", (snap) => {
      const data = snap.val();
      //console.log(data);
      const cattleKeys=Object.keys(data);
      cattleKeys.forEach((key) => {
        farmerIDarray.push(key);
        arraylength=farmerIDarray.length;
      })
      //console.log(cattleKeys);
    });


       database.ref(`Files/data/cattles`).once("value", (snap) => {
         const data = snap.val();
         const cattleKeys = Object.keys(data);
         
         var status='no';
         cattleKeys.forEach((key) => {
  
         cattleIdArray.push(data[key]);
            
         });
         const orginalarr = cattleIdArray.filter(character => {
          
          if(typeof character.timestamp=='string'){
            cattleIdArray1.push(character);
          return character.timestamp.includes(today);
          }
           
         });
         console.log(orginalarr.length);
        var filteredarraylength=orginalarr.length;
         if(orginalarr.length>0) {
         orginalarr.forEach((key,index)=>{

          var rownumber=index+1;
          var muzzleimage1=key['photos'][1]['url'];
           var muzzleimage2=key['photos'][2]['url'];
           var muzzleimage3=key['photos'][3]['url'];

           if(key['farmerID']!=null){

           database.ref(`Files/data/farmers/`+key['farmerID']).once("value", (snap) => {
            const data1 = snap.val();
            var images={sno:rownumber};

            for(var z=1;z<=3;z++){
              console.log(rownumber);
            var images={sno:rownumber,timestamp:key['timestamp'],agentnumber:data1['agentMobileNumber'],farmerid:"'"+key['farmerID']+"'",farmername:data1['farmerName'],farmermobilenumber:data1['mobileNumber'],RFIDno:key['cowIDORPetName'],muzzleimage:rownumber+"_"+z+".jpg"}
            dataarray1.push(images);
            
            }
                  // console.log(images);
              dataarray.push(images);
              //console.log(dataarray.length);
              var cattlearrlength=(cattleIdArray.length)-1;
              //console.log("arrlenght---"+cattlearrlength)
              if(filteredarraylength==dataarray.length)
              {
                csvWriter
                .writeRecords(dataarray1)
                .then(()=>{ console.log('The CSV file was written successfully')



var process = spawn('python3', ['/home/jupyter/mydata1/dvaraiffcotokio/ISA/ISA_daily_stats.py','/home/jupyter/mydata1/dvaraiffcotokio/ISA/reports/iffco_tokio_stats_Dec5.csv']);
  process.stdout.on('data', function (data) {
 
 console.log(data.toString('utf8'));
 });
 
  process.stderr.on('data', function (data) {
                 console.log(data.toString('utf8'));
 });



/*
 var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gopi123abi@gmail.com',
      pass: 'welcomegopi3'
    }
  });   
  var mailOptions = {
     from: 'gopi123abi@gmail.com',
     to: 'gopi.t@dvara.com',
     subject: 'Daily Report',
     text: 'Daily Report1',
attachments: [{   // utf-8 string as an attachment
            filename: '/home/jupyter/mydata1/dvaraiffcotokio/ISA/reports/iffco_tokio_stats_Dec5.csv',
            content: 'Daily Report'
        }], 
  }
   
  mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
  });
*/

setTimeout(dailyreportemail, 15000);



});
                

              }
          
          
          });
        }


          
          })
        }
//console.log(dataarray.length);


         /*return res.status(201).json({
           status: "success",
           cattleIdArray,
         });*/


       });
     } catch (err) {
       console.log(err);
       /*return res.status(401).json({
         status: "failed",
       });*/
     }



}

generatedailyreport();



function dailyreportemail(){


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = dd + ':' + mm + ':' + yyyy;
  var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dvaraedairy2020@gmail.com',
      pass: 'Welcome@2120'
    }
  });   
  var mailOptions = {
     from: 'dvaraedairy2020@gmail.com',
     to: 'gopi.t@dvara.com',
     subject: 'Daily Report',
     text: 'Daily Report1',
attachments: [{   // utf-8 string as an attachment
filename:'iffco_tokio_stats_Dec'+dd+'.csv',            
path: '/home/jupyter/mydata1/dvaraiffcotokio/ISA/reports/iffco_tokio_stats_Dec'+dd+'.csv'
            
        }], 
  }
   
  mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
  });

}




});



app.get('/downlod',function(req,res){

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


download('https://www.google.com/images/srpr/logo3w.png', '/home/jupyter/google.png', function(){
  console.log('done');
});

});



app.get('/getinsurancerecordsbyday',(req,res)=>{
       try {
            database.ref(`Files/data/cattles`).once("value", (snap) => {
              const data = snap.val();
              const cattleKeys = Object.keys(data);
              const cattleIdArray = [];

              cattleKeys.forEach((key) => {
               if(data[key]['photos'][1]['url']!=""){
                cattleIdArray.push(data[key]);
                  }
              });
              const orginalarr = cattleIdArray.filter(character => {
                if(typeof character.timestamp==="string"){
               return character.timestamp.includes('04:12:2020');
                }
                
              });
              orginalarr.forEach((key,index)=>{

                var rownumber=index+1;
                var muzzleimage1=key['photos'][1]['url'];
                var muzzleimage2=key['photos'][2]['url'];
                var muzzleimage3=key['photos'][3]['url'];
console.log(rownumber+"---"+key['farmerID']+"---"+key['timestamp']);

options = {
  url: muzzleimage3,
  dest: '/home/jupyter/mydata1/dvaraiffcotokio/ISA/dec4_data/'+key['cowIDORPetName']+'_'+rownumber+'_3.jpg'      // will be saved to /path/to/dest/photo.jpg
}
 
download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
  })
  .catch((err) => console.error(err))

              })



              return res.status(201).json({
                status: "success",
                cattleIdArray,
              });
            });
          } catch (err) {
            console.log(err);
            return res.status(401).json({
              status: "failed",
            });
          }
});


app.get('/iffcotokioautomation',(req,res)=>{
 var spawn = require("child_process").spawn; 
 dataary=[];
farmerIDarray=[];
cattleIdArray = [];
arraylength=0;
//var folderlength="";
/*
function isDirEmpty(dirname) {
    return fs.promises.readdir(dirname).then(files => {
        return files.length !== 0;
    });
}

console.log(isDirEmpty("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/"));
*/


const arrayOfFiles = fs.readdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/train/")
var folderlength=(arrayOfFiles.length)-1;
//console.log(folderlength);

/*if(folderlength.toString().length=="3")
{
folderlength="0"+folderlength;
} else {
folderlength=folderlength;
}
*/

console.log(folderlength);
  try {

//console.log(folderlength-1);


       database.ref(`Files/data/cattles`).once("value", (snap) => {
         const data = snap.val();
         const cattleKeys = Object.keys(data);
         
         //var status='no';
         cattleKeys.forEach((key) => {
  
  cattleIdArray.push(data[key]);
            
         });
        const orginalarr = cattleIdArray.filter(character => {
if(typeof character.timestamp==="string"){  
        return character.timestamp.includes('01:12:2020');
}
           
         });
         console.log(orginalarr.length);
          

         
         orginalarr.forEach((key,index)=>{

          var rownumber=index+1;
          var muzzleimage1=key['photos'][1]['url'];
           var muzzleimage2=key['photos'][2]['url'];
           var muzzleimage3=key['photos'][3]['url'];
console.log(muzzleimage3);
if(folderlength.toString().length=="3"){
var folderlen="0";
} else {
var folderlen="";
}
console.log(folderlen);
var dynamicfoldername=folderlength+rownumber;


if (!fs.existsSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/"+folderlen+dynamicfoldername)){
    fs.mkdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/"+folderlen+dynamicfoldername);
}
if(!fs.existsSync("/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/test/"+folderlen+dynamicfoldername)){
fs.mkdirSync("/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/test/"+folderlen+dynamicfoldername);

}

           if(key['farmerID']!=null){

           

options = {
  url: muzzleimage3,
  dest: '/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/'+folderlen+dynamicfoldername+"/"+dynamicfoldername+'_3.jpg'      // will be saved to /path/to/dest/photo.jpg
}
 
download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
  })
  .catch((err) => console.error(err))
  

var process = spawn('python3', ['/home/jupyter/mydata1/dvaraiffcotokio/train/fullcrop_muzzle.py','/home/jupyter/mydata1/dvaraiffcotokio/data/semi_crop/test/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_3.jpg', '/home/jupyter/mydata1/dvaraiffcotokio/data/full_crop/test/'+folderlen+dynamicfoldername+'/'+dynamicfoldername+'_3.jpg']);
 process.stdout.on('data', function (data) {

console.log(data.toString('utf8'));
});

 process.stderr.on('data', function (data) {
                console.log(data.toString('utf8'));
});

fs.appendFile('/home/jupyter/mydata1/dvaraiffcotokio/folders.txt', '\n'+folderlen+dynamicfoldername+"---"+key['timestamp'], (err) => {
    if (err) throw err;
    console.log('The lyrics were updated!');
});

        }
          })

         return res.status(201).json({
           status: "success",
           cattleIdArray,
         });


       });
     } catch (err) {
       console.log(err);
       return res.status(401).json({
         status: "failed",
       });
     }






});









app.get('/getinsurancerecords',(req,res)=>{

  dataarray=[];
farmerIDarray=[];
cattleIdArray = [];
arraylength=0;
  try {



       database.ref(`Files/data/cattles`).once("value", (snap) => {
         const data = snap.val();
         const cattleKeys = Object.keys(data);
         
         var status='no';
         cattleKeys.forEach((key) => {
  
  cattleIdArray.push(data[key]);
            
         });
         /*const orginalarr = cattleIdArray.filter(character => {
          return character.timestamp.includes('16:11:2020');
           
         });*/
         //console.log(cattleIdArray.length);
         
         cattleIdArray.forEach((key,index)=>{

          var rownumber=index+1;
          var muzzleimage1=key['photos'][1]['url'];
           var muzzleimage2=key['photos'][2]['url'];
           var muzzleimage3=key['photos'][3]['url'];

           if(key['farmerID']!=null){

           

options = {
  url: muzzleimage3,
  dest: '/home/jupyter/mydata1/dvaraiffcotokio/test/'+rownumber+'_3.jpg'      // will be saved to /path/to/dest/photo.jpg
}
 
download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
  })
  .catch((err) => console.error(err))
  


           /*   dataarray.push(images);
              console.log(dataarray.length);
              var cattlearrlength=(cattleIdArray.length)-1;
              if(cattlearrlength==dataarray.length)
              {
              
              } 
          });*/
        }
          })

         return res.status(201).json({
           status: "success",
           cattleIdArray,
         });


       });
     } catch (err) {
       console.log(err);
       return res.status(401).json({
         status: "failed",
       });
     }


});













app.get('/getinsurancerecordsold',async(req,res)=>{
 

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};




       try {
            await database.ref(`Files/data/cattles`).once("value", (snap) => {
              const data = snap.val();
              const cattleKeys = Object.keys(data);
              const cattleIdArray = [];
              cattleKeys.forEach((key) => {
                  if(typeof data[key].timestamp==="string"){
                cattleIdArray.push(data[key]);
                  }
              });
              const orginalarr = cattleIdArray.filter(character => {
               return character.timestamp.includes('16:11:2020');
                
              });

              cattleIdArray.forEach((key,index)=>{

var rownumber=index+1;
//console.log(rownumber);

               var muzzleimage1=key['photos'][1]['url'];
                var muzzleimage2=key['photos'][2]['url'];
                var muzzleimage3=key['photos'][3]['url'];

download(muzzleimage3, '/home/dvaraedairy2020/dvaraiffcotokio/'+key['cattleIDUniqueKey']+'_'+rownumber+'_3.jpg', function(){
  console.log('done');
});




              })



              return res.status(201).json({
                status: "success",
                cattleIdArray,
              });
            });
          } catch (err) {
            console.log(err);
            return res.status(401).json({
              status: "failed",
            });
          }
        });






app.post('/profile', upload.none(), function (req, res, next) {
  // req.body contains the text fields
  var farmername=req.body.farmername;
  console.log(farmername);
})



app.post('/croptrainedimages',function(req,res){

var referenceid=req.body.trainedid;

var spawn = require("child_process").spawn;

  database.ref(`Files/data/muzzle/`+referenceid).once("value", (snap) => {
  var results=snap.val();
   database.ref(`Files/data/cattles/`+results).once("value", (snap) => {
var cattleresults=snap.val();
var results=cattleresults['photos'][1]['label'];


    var process = spawn('python',["/home/jupyter/Rakesh/Muzzle_Match/VGG/Auto_Full_Crop/fullcrop_muzzle.py", 
                            cattleresults['photos'][1]['url'], 
                            '/var/www/html/crop_'+referenceid+'_1'] );

 process.stdout.on('data', function(data) { 
      return res.send(data.toString()); 
    } )  



//return res.status(200).json({results});
  })
})



});



app.post('/getfile',function(req,res){


var foldername=req.body.foldername;
var filename=req.body.filename;
console.log(foldername);
console.log(filename);

/*
request1.get('/home/dvaraedairy2020/production/20201025/1603618317599.jpg', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
        console.log(data);
    }
})*/


/*
(async function() {
    let blob = await fetch("/home/dvaraedairy2020/production/20201025/1603618317599.jpg").then(r => r.blob());
    let dataUrl = await new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
console.log(dataUrl);   

 // now do something with `dataUrl`
})();*/

function previewFile() {
  //const preview = document.querySelector('img');
  const file = "/home/dvaraedairy2020/production/"+foldername+"/"+filename;
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    res.status(200).json({url:reader.result});
  }, false);

  if (file) {
    reader.readAsDataURL(new File(file));
  }
}

previewFile();



/*
fileReader.setNodeChunkedEncoding(true || false);
fileReader.readAsDataURL(new File('/home/dvaraedairy2020/production/'+foldername+'/'+filename));
 
// non-standard alias of `addEventListener` listening to non-standard `data` event
/*fileReader.on('data', function (data) {
 // console.log("chunkSize:", data.length);
});*/
 
// `onload` as listener
/*fileReader.addEventListener('load', function (ev) {
  res.status(200).json({url:ev.target.result});
});
 
// `onloadend` as property
fileReader.on('end', function () {
console.log("Success");
})
*/
/*toDataURL('https://pbs.twimg.com/profile_images/558329813782376448/H2cb-84q_400x400.jpeg', function (dataUrl) {
console.log(dataUrl)
    })*/


//console.log( publicip.v4());
//var base64url=getDataUrl("/home/dvaraedairy2020/production/20201025/1603618317599.jpg");
//console.log(base64url);
/*
request.get('/home/dvaraedairy2020/production/20201025/1603618317599.jpg', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
        console.log(data);
    }
});*/


});




app.post("/filtercsvdata",function(req,res){
  const clientIp = requestIp.getClientIp(req); 
  console.log(clientIp); 
  request(`http://api.ipapi.com/`+clientIp+`?access_key=188d866004417a0868000ed358d64675`,(error,response,body)=>{
    console.log(response);
    console.log(error);
    console.log(body);
  });
  var postdata=req.body.postdate;
  var postdata1 = reverseInPlace(req.body.postdate)
var agentmobilenumber=req.body.agentmobilenumber;
var where="";

console.log(agentmobilenumber);
console.log(postdata);
  var dataPath = req.body.dropdownValue == "iffcotokio" ? './iffcotokioLog.csv' : './surabhiLog.csv'
var arr=[];
var orginalarr=[];
  fs.createReadStream(dataPath)
  .pipe(csv())
  .on('data', (row) => {
  //  console.log(row);
  arr.push(row);
     //res.status(200).json(row);
  })
  .on('end', () => {
    //console.log(arr);
    //var results=JSON.parse(JSON.stringify(arr));

    const orginalarr = arr.filter(function(character) {
//console.log(character.Timestamp);
//console.log(where);
if((typeof character.Timestamp==='string')&&(agentmobilenumber=="")){
      return character.Timestamp.includes(postdata) || character.Timestamp.includes(postdata1);
}

if((typeof character.Timestamp==='string') && (agentmobilenumber!=""))
{
return (character.Timestamp.includes(postdata) || character.Timestamp.includes(postdata)) && character['Agent Mobile Number']===agentmobilenumber;
}
});


   //arr.filter((x)=>x.Timestamp >= "2020-10-29");
//console.log(result);
res.status(200).json({orginalarr});
  //  console.log('CSV file successfully processed');
  });
});


app.get("/readcsvdata",function(req,res){

console.log("test");
var arr=[];
  fs.createReadStream('./surabhiLog.csv')
  .pipe(csv())
  .on('data', (row) => {
  //  console.log(row);
  arr.push(row);
     //res.status(200).json(row);
  })
  .on('end', () => {
    //console.log(arr);
    //var results=JSON.parse(JSON.stringify(arr));
//console.log(arr);
    res.status(200).json({arr});
  //  console.log('CSV file successfully processed');
  });
});

app.post('/api/sms1/',upload.none(),function(req,res){

  var farmername=req.body.farmername;
  var cowname=req.body.cowname;
  var date=req.body.date;
  var vetnarian_name=req.body.vetnarian_name;
  var semen_name=req.body.semen_name;
  var mobilenumber=req.body.mobilenumber;

console.log(req.body.farmername);

//var message1="திரு. Farmer name அவர்களே உங்களுடைய Cow name/ID மாட்டிற்கு Date அன்று Veterinarian/AIT name அவர்களால் Semen name காளையின் சினை ஊசி போடப்பட்டு உள்ளது .";
var message="திரு."+farmername+" அவர்களே உங்களுடைய "+ cowname+  " மாட்டிற்கு "+date+" அன்று "+vetnarian_name+" அவர்களால் "+semen_name+" காளையின் சினை ஊசி போடப்பட்டு உள்ளது.";
var jsonobject={apikey: 'NsgJzdRYnidZhE3l',senderid:'BIGSMS',number:mobilenumber,message:message,format:'json',unicode:2};

  request({
    url: 'http://msg.mtalkz.com/V2/http-api-post.php',
    method: 'POST',
    json: {apikey: 'NsgJzdRYnidZhE3l',senderid:'BIGSMS',number:mobilenumber,message:message,format:'json',unicode:2}
  }, function(error, response, body){
    console.log(body);
  if(body['status']=='OK'){
    return res.status(201).json({
      status: "success",
       msg:body
    });
  } else {

    return res.status(201).json({
      status: "failure",
       msg:body,
       jsonobject:jsonobject
    });
  }

});

})




app.post('/api/rollidmatch/',async(req,res)=>{
  var referenceid=req.body.rollid;
  await database.ref(`Files/data/muzzle/`+referenceid).once("value", (snap) => {
  var results=snap.val();
   database.ref(`Files/data/cattles/`+results).once("value", (snap) => {
var cattleresults=snap.val();
return res.status(200).json({cattleresults});
  })
})
})





app.post('/api/referenceidmatch/',async(req,res)=>{
  var referenceid=req.body.referenceid;

//console.log(referenceid);
  await database.ref(`Files/data/muzzle/`+referenceid).once("value", (snap) => {

  var results=snap.val();
//  console.log(results);
   database.ref(`Files/data/cattles/`+results).once("value", (snap) => {
var cattleresults=snap.val();
//console.log(cattleresults);
return res.status(200).json({cattleresults});
  })

})

})


app.get('/removedir',async(req,res)=>{

for(var i=2002;i<=2200;i++){

rimraf("/home/jupyter/Data/Muzzle_Images/Manual_Semi_Crop/test/"+i, function () { console.log("done"); });
}


});



app.get('/createtrain',async(req,res)=>{

////   /home/jupyter/Data/Muzzle_Images/Manual_Semi_Crop/train

for(var i=2201;i<=3095;i++){

if (!fs.existsSync("/home/jupyter/Data/Muzzle_Images/Manual_Semi_Crop/test/"+i)){
    fs.mkdirSync("/home/jupyter/Data/Muzzle_Images/Manual_Semi_Crop/test/"+i);
}

}

});

app.get('/createfiles',async(req,res)=>{
 // var referenceid=req.body.referenceid;

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

var z=0;
for(var i=2432;i<=3095;i++){

//2431/


//console.log(i);
  await database.ref(`Files/data/muzzle/`+i).once("value", (snap) => {
//console.log(i);
  var results=snap.val();
//  console.log(results);
   database.ref(`Files/data/cattles/`+results).once("value", (snap) => {
var cattleresults=snap.val();
var muzzleimage1=cattleresults.photos[1]['url'];
var muzzleimage2=cattleresults.photos[2]['url'];
var muzzleimage3=cattleresults.photos[3]['url'];
//console.log(i);
 z=z+1;
var foldername=parseInt(i-1);
//console.log(foldername+"_"+z+".jpg");
download(muzzleimage3, '/home/jupyter/Data/Muzzle_Images/Manual_Semi_Crop/test/'+foldername+"/"+foldername+"_3.jpg", function(){
  console.log('done');
});


//console.log(z+"--"+muzzleimage1+"--"+muzzleimage2+"--"+muzzleimage3);
//return res.status(200).json({cattleresults});
  })

})
}

})





app.get('/api/sms/',async(req,res)=>{

await database.ref(`data/+919999999999/farmers/9976416080`).once("value", (snap) => {

var results=snap.val();
//console.log(results);


var farmername=results['name'];
var whatsappNumber=results['whtsappNumber'];

//const cattleKeys = Object.keys(results);
//console.log(cattleKeys);
//console.log(results['cattle']);
const cattleKeys = Object.keys(results['cattle']);
console.log(cattleKeys);
const cattleIdArray = [];
cattleKeys.forEach((key) => {
  //cattleIdArray.push(results[key]);
//  console.log(key);
var aitproperties=Object.keys(results['cattle'][key]);

aitproperties.forEach((key1) => {

  //console.log(results['cattle'][key][key1]['cattleID']);






});


});

return res.status(201).json({
  status: "success",

});

})

})

app.listen(process.env.PORT || 4937, () => {
  console.log("Server running on port 4937");
});
//https.createServer(options, app).listen(4937);

function reverseInPlace(str) {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  for (var i = 0; i < words.length; i++) {
     result += words[i].split('-').reverse().join('-') + " ";
  }
  return result
}