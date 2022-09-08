export function validEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function validPhoneNumber(phoneNmer: string) {
  const regex = RegExp(/^[0]?[9][0-9]{9}$/);

  return regex.test(phoneNmer);
}

export function validChargeAmount(amount: string) {
  const chargeAmount = amount.replaceAll(",", "");
  if (Number(chargeAmount) >= 10000 && Number(chargeAmount) <= 900000)
    return true;
  else {
    return false;
  }
}
