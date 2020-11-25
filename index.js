import KeepActive from "./keep";
export default class VueKeep {
  constructor() {
    // console.log(options);
  }
}
VueKeep.install = vue => {
  vue.component("KeepActive", KeepActive);
};
