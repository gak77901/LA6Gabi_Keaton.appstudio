
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let names = ""

btnSubmit.onclick=function(){
  names = inptName.value
  if (members.includes(names)) {
  lblName.value = names + ", you are already a member."
} else { 
  members.push(names)
  lblName.value = names + ", you have been added to the membership roster."
  }
}
