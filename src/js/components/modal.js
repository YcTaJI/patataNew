import motorcycles from "../data/motorcycles";
import {years} from "../_functions";

//const beforeBrandSelectModal = document.querySelector('#other-brand-modal');
//const beforeYearsSelectModal = document.querySelector('#other-years-modal');
//const brandSelectModal = document.querySelector('.modal select[name="brand"]');
//const modelSelectModal = document.querySelector('.modal select[name="model"]');
//const engineSelectModal = document.querySelector('.modal select[name="engine"]');

/*
class BrandListModal {
  constructor(brand, beforeSelector, ind) {
    this.brand = brand;
    this.before = beforeSelector;
    this.ind = ind;
  }

  render() {
    const element = document.createElement('option');
    element.setAttribute('value', `${this.ind}`);
    element.innerText = this.brand;
    this.before.before(element);
  }
}

motorcycles.map((element, i) => {
  new BrandListModal(element.brand, beforeBrandSelectModal, i).render();
});


class ModelListModal {
  constructor(model, parentSelector) {
    this.model = model;
    this.parent = parentSelector;
  }

  render() {
    const element = document.createElement('option');
    element.setAttribute('value', `${this.model}`);
    element.innerText = this.model;
    this.parent.append(element);
  }
}
*/

/*
brandSelectModal.addEventListener('change', ({currentTarget}) => {
  indexModel = +currentTarget.value;
  const modelObj = motorcycles[indexModel]?.model;

  modelSelectModal.innerHTML = `
      <option hidden selected disabled>Модель</option>
      <option value="Другая марка">Другая модель</option>
  `;
  for (const key in modelObj) {
    new ModelListModal(key, modelSelectModal).render();
  }
  engineSelectModal.innerHTML = `
      <option hidden selected disabled value="">Тип двигателя</option>
      <option value="Другой тип">Другой тип</option>
  `;
});*/


/*
modelSelectModal.addEventListener('change', ({currentTarget}) => {
  const typeArr = motorcycles[indexModel]?.model[currentTarget.value];
  engineSelectModal.innerHTML = `
      <option hidden selected disabled value="">Тип двигателя</option>
      <option value="Другой тип">Другой тип</option>
  `;
  typeArr?.map(el => {
    new ModelListModal(el, engineSelectModal).render();
  });
});
*/
