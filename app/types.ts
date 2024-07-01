export interface ZipCode {
  message?: string;
  results: Address[];
  status:  number;
}

export interface Address {
  address1: string;
  address2: string;
  address3: string;
  kana1:    string;
  kana2:    string;
  kana3:    string;
  prefcode: string;
  zipcode:  string;
}
