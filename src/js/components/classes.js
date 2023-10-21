// список названия категорий
export class Lists {
  constructor(text, tag, elemInsert, anyValue, anyText) {
    this.text = text;
    this.tag = tag;
    this.elemInsert = elemInsert;
    this.anyValue = anyValue
    this.anyText = anyText
  }

  renderCategoryTitles() {
    const element = document.createElement(`${this.tag}`);
    element.classList.add(`${this.anyValue}`);
    element.innerText = this.text;
    this.elemInsert.append(element);
  }
  renderCategory() {
    const element = document.createElement(`${this.tag}`);
    element.classList.add(`${this.anyValue}`);
    element.innerHTML = `
       <p>${this.text}</p>
       <b>${this.anyText} ₽</b>
      `;
    this.elemInsert.append(element);
  }
  renderBrands() {
    const element = document.createElement(`${this.tag}`);
    element.setAttribute('value', `${this.anyValue}-${this.text}`);
    element.innerText = this.text;
    this.elemInsert.before(element);
  }
  renderYears() {
    const element = document.createElement(`${this.tag}`);
    element.setAttribute('value', `${this.text}`);
    element.innerText = this.text;
    this.elemInsert.before(element);
  }
  renderModel() {
    const element = document.createElement(`${this.tag}`);
    element.setAttribute('value', `${this.text}`);
    element.innerText = this.text;
    this.elemInsert.append(element);
  }
}
















