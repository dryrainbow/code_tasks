// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

const re = /^(?:https?:\/\/)?(?:www.)?(.*)\./
function domainName(url){
   let res = re.exec(url)
   return res[1]
}

console.log(domainName('google.com'))