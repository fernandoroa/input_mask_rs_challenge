
## Input Mask challenge

Solution for a challenge of the Rocketseat's Launchbase JS course  

## Source

Part of the challenges on the link (original - portuguese):  
https://github.com/rocketseat-education/bootcamp-launchbase-desafios-06/blob/master/desafios/06-1-mini-desafios.md

***Begin of translation:"***
###  Input masks

*Implement two input masks:*

- Percentage number with at least two places after the comma and a maximum of 4 (Use the NumberFormat from the Intl library);

- CPF (xxx.xxx.xxx-xx).

***"End of translation***

### How to run

* Have `node` installed
* clone this repository
* **CPF**: In the system console, run `node cpf_format.js`. Implementation in `<input>` not shown.
* **Percentage**: The NumberFormat implementation didn't work in the `<input>` field, so,
inputmask.js from https://github.com/RobinHerbots/Inputmask/blob/5.x/dist/inputmask.js was used instead;
look at `percent.txt` for a summary of the working implementation.