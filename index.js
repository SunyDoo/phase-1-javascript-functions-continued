function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = function (par1 = "*") {
    return function (par2="special") {    
           return `You are ${par1}${par2}${par1}!`      
    };
 }
