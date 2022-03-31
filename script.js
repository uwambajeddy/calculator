
 function insert(num) {
     document.form.textview.value += num;
 }

 function sqr() {
     document.form.textview.value = Math.pow(document.form.textview.value, 2);
 }

 function sqrrt() {
     document.form.textview.value = Math.sqrt(document.form.textview.value);
 }

 function sin() {
     document.form.textview.value = Math.sin(document.form.textview.value * Math.PI / 180);
 }

 function cos() {
     document.form.textview.value = Math.cos(document.form.textview.value * Math.PI / 180);
 }

 function tan() {
     document.form.textview.value = Math.tan(document.form.textview.value * Math.PI / 180);
 }

 function equal() {
     var exp = document.form.textview.value;
     if (exp) {
         document.form.textview.value = eval(exp);
     }
 }

 function clean() {
     document.form.textview.value = "";
 }

 function back() {
     var exp = document.form.textview.value;
     document.form.textview.value = exp.substring(0, exp.length - 1);

 }