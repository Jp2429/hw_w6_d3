const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    // const journeyArray = []
    // this.journeys.forEach((journey) =>  {
    //   journeyArray.push(journey.startLocation)
  
    // })
    // return journeyArray


    //Better way of doing it
    return this.journeys.map((journey)=>{
      return journey.startLocation
    })
  };

Traveller.prototype.getJourneyEndLocations = function () {
  // const endArray = []
  //   this.journeys.forEach((journey) =>  {
  //     endArray.push(journey.endLocation)
  
  //   })
  //   return endArray

  // Bettter way of doing it
  return this.journeys.map((journey)=>{
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const byTransport = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return byTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyDistance = this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
  return journeyDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // let journeyDistanceArray = []
  // const totalDistance = this.journeys.forEach((journey) => {
  //   journeyDistanceArray.push(journey.distance)
  // })
  // const total = journeyDistanceArray.reduce((runningTotal, currentValue) => {
  //   return runningTotal + currentValue
  // }, 0)


  //Better way of doing it
  const total=this.journeys.reduce((runningTotal,journey)=>{
    return runningTotal+journey.distance
  },0)
  return total
};

//Pleased with this

Traveller.prototype.getUniqueModesOfTransport = function () {
  // let jArray=[]
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
  // const uniqueTransport=this.journeys.forEach((journey)=>{
  //   jArray.push(journey.transport)
  // })
  const uniqueTransport=this.journeys.map((journey)=>{
    return journey.transport
  })
  
  var unique = uniqueTransport.filter( onlyUnique );

  return unique;
};


module.exports = Traveller;
