import Collection from "../models/Collection";

export default abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(itsParent: Element, model: T): void;

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");

    // for (let model of this.collection.models) {
    //   const itemParent = document.createElement("div");
    //   this.renderItem(itemParent, model);
    //   templateElement.content.append(itemParent);
    // }

    // this.renderItem()
    const itemParent = document.createElement("div");
    itemParent.innerHTML = `<h1>${this.collection.models.length}</h1>`;
    templateElement.content.append(itemParent);
    this.parent.append(templateElement.content);
  }
}
