import KeepActive from "./keep";
export default class VueKeep {
  constructor(options) {
    console.log(options);
  }
}
VueKeep.install = vue => {
  vue.component("KeepActive", KeepActive);
};
