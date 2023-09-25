// scripts.js
const Mask = {
  apply(input, func) {
    setTimeout(function () {
      input.value = Mask[func](input.value);
    }, 1);
  },
  formatCPF(value) {
    const cpf_regex = /(?<first>\d{3})(?<second>\d{3})(?<third>\d{3})(?<forth>\d{2})/;
    let groups = value.match(cpf_regex).groups;
    return `${groups.first}.${groups.second}.${groups.third}-${groups.forth}`
  }
};

// demo
let cpf_digits = {value : '06551379543'}
console.log("demo of how the input mask behaves:")
console.log(`Processing ${cpf_digits.value} to xxx.xxx.xxx-xx`)
console.log(Mask['formatCPF'](cpf_digits.value))

/*
// file.html or .njk
<input
type="text"
name="cpf"
placeholder="CPF"
onkeydown="Mask.apply(this, 'formatCPF')"
>
<script src="/scripts.js"></script>
*/