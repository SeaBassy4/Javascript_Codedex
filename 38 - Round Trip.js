let departTripTicket = {
  name: "Sebastian",
  from:  "Hermosillo, Mexico",
  to: "Darwin, Australia",
  businessClass: false,
  leaveTime: 2,
  arriveTime: 18,
  upgrade(){
      if(departTripTicket.businessClass == false){
        departTripTicket.businessClass == true;
        console.log("Your ticket has been upgraded to Business Class!")
      }else{
        console.log("Your ticket is already Business Class")
      }
  },
  flightTime(){
    console.log("Your estimated flight time will be: " + (
      departTripTicket.arriveTime - departTripTicket.leaveTime
    ))
  }
}

let returnTripTicket = {
  name: "Sebastian",
  from:  "Darwin, Australia",
  to: "Hermosillo, Mexico",
  businessClass: true,
  leaveTime: 5,
  arriveTime: 23,
  upgrade(){
      if(returnTripTicket.businessClass == false){
        returnTripTicket.businessClass == true;
        console.log("Your ticket has been upgraded to Business Class!")
      }else{
        console.log("Your ticket is already Business Class")
      }
  },
  flightTime(){
    console.log("Your estimated flight time will be: " + (
      returnTripTicket.arriveTime - returnTripTicket.leaveTime
    ))
  }
}




console.log("DEPARTING TRIP: ")
departTripTicket.upgrade();
departTripTicket.flightTime();
console.log("")
console.log("RETURN TRIP: ")
returnTripTicket.upgrade();
returnTripTicket.flightTime();