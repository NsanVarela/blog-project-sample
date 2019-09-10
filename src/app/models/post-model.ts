export class Post {
  // tslint:disable-next-line: variable-name
  public created_at: Date;
  constructor(public title: string, public content: string, public loveIt: number) {
    this.created_at = new Date();
  }
}
