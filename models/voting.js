const voting = {
  pepperoni: 0,
  cheese: 0,
  hawaiian: 0
}

class Voting{
  static async tallyVotes(){
    return voting
  }
  static async recordVotes(pizzaName){
    if(voting[pizzaName] || voting[pizzaName] === 0){
      ++voting[pizzaName]
    }
    return Voting.tallyVotes()
  }
}

module.exports = Voting