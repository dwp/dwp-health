var express = require('express')
var router = express.Router()
var path = require('path')
var tog = require('../../../../lib/tog.js')
var staffData = require('../../../../app/views/assess/v7/staff-data.js')
var staffDataHoliday = require('../../../../app/views/assess/v7/staff-data-holiday.js')
var staffData2 = require('../../../../app/views/assess/v7/staff-data-2.js')
var slotsData = require('../../../../app/views/assess/v7/slots-data.js')
console.log(path)

router.get('*', function (req, res, next) {
  // path is only available with the proper value within this sub-module/router.
  res.locals.path = req.baseUrl.substr(1)
  // create some other useful path variables.
  var bits = req.params[0].substr(1).split('/')
  res.locals.path1 = res.locals.path + "/" + bits[0]
  res.locals.path2 = res.locals.path + "/" + bits[0] + "/" + bits[1]
  res.locals.stage = req.cookies.stage || 1;
  res.locals.query = req.query;
  res.locals.staff = staffData;
  next()
})

router.get('/capacity/manage-centre/capacity', function(req, res, next){

  res.locals.staffTotals = {}
  res.locals.staffTotals.available = staffData.filter(function(obj){
    if(obj.scrutinyPaperwork && obj.days[req.query.day].scrutiny){
      return false;
    } else {
      return obj.days[req.query.day].available
    }
  }).length;

  var totalAppointments = 0;

  slotsData[req.query.day].map(day => totalAppointments = totalAppointments + day.usedSlots);
  res.locals.totalAppointments = totalAppointments;
  res.locals.slots = slotsData[req.query.day];
  res.locals.totalSlots = slotsData[req.query.day].length;
  
  next();
});

router.get('/capacity/manage-centre/capacity-holiday', function(req, res, next){
  res.locals.staff = staffDataHoliday;
  res.locals.staffTotals = {}
  res.locals.staffTotals.available = staffDataHoliday.filter(function(obj){
    if(obj.scrutinyPaperwork && obj.days[req.query.day].scrutiny){
      return false;
    } else {
      return obj.days[req.query.day].available
    }
  }).length;

  var totalAppointments = 0;

  slotsData[req.query.day].map(day => totalAppointments = totalAppointments + day.usedSlots);
  res.locals.totalAppointments = totalAppointments;
  res.locals.slots = slotsData[req.query.day];
  res.locals.totalSlots = slotsData[req.query.day].length;
  
  next();
});

router.get('/capacity/manage-centre/capacity-2', function(req, res, next){
  res.locals.staff = staffData2;
  res.locals.staffTotals = {}
  res.locals.staffTotals.available = staffData2.filter(function(obj){
    if(obj.scrutinyPaperwork && obj.days[req.query.day].scrutiny){
      return false;
    } else {
      return obj.days[req.query.day].available
    }
  }).length;

  var totalAppointments = 0;

  slotsData[req.query.day].map(day => totalAppointments = totalAppointments + day.usedSlots);
  res.locals.totalAppointments = totalAppointments;
  res.locals.slots = slotsData[req.query.day];
  res.locals.totalSlots = slotsData[req.query.day].length;
  
  next();
});

router.get('/miarussell/*', function (req, res, next) {
  res.locals.firstname = "Mia"
  next()
})


router.get('/cookies/', function (req, res, next) {
  res.send(tog(req.cookies));
})

module.exports = router
