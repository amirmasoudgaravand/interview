/**
@function Separate three digits
**/
export function commaThreeDigits(num: string) {
  let value = num.replaceAll(",","");
  let value1 = Number(value);
  return value1.toLocaleString();
}

export function removeComma(text:string){
  return text.replaceAll(",","");
}
