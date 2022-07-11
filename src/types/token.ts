export interface ITokenInterface {
  name: string;
  decimal: number;
  address: string;
  imageUrl?: string;
}

type TokenParams = {
  name: string;
  decimal: number;
  address: string;
  imageUrl?: string;
};

export class Token implements ITokenInterface {
  name: string;
  decimal: number;
  address: string;
  imageUrl?: string;

  constructor({ name, decimal, address, imageUrl }: TokenParams) {
    this.address = address;
    this.name = name;
    this.decimal = decimal;
    this.imageUrl = imageUrl;
  }
}
