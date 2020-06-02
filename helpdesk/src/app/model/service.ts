export default class Service {

  public name: string;
  public price: number;
  public image: string;
  public novelty: boolean;

  constructor(
    name,
    price,
    image,
    novelty
  ) {
    this.image = image;
    this.price = price;
    this.novelty = novelty;
    this.name = name;
  }
}
