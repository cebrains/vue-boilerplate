<template>
	<div class="loading" :class="['loading--' + type, 'loading--' + color]">
    <span class="loading__spinner" :class="['loading__spinner--' + type, 'loading__spinner--' + color]">
      <i v-if="type === 'spinner'" v-for="(item,index) in 12" :key="index"/>
    </span>
  </div>
</template>
<style scoped>
	@-webkit-keyframes loading {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

@keyframes loading {
  from {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}

.loading {
  font-size: 0;
  line-height: 0;
  z-index: 0;
  position: relative
}

.loading--circle {
  width: 16px;
  height: 16px;
  vertical-align: middle
}

.loading--gradient-circle, .loading--spinner {
  width: 25px;
  height: 25px;
}

.loading__spinner {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
  display: inline-block;
  -webkit-animation: loading .8s linear infinite;
  animation: loading .8s linear infinite
}

.loading__spinner--circle {
  border-radius: 100%;
  border: 3px solid transparent;
  box-sizing: border-box
}

.loading__spinner--circle.loading__spinner--black {
  border-color: #c9c9c9;
  border-top-color: #666
}

.loading__spinner--circle.loading__spinner--white {
  border-color: rgba(0, 0, 0, .1);
  border-top-color: rgba(255, 255, 255, .7)
}

.loading__spinner--circle.loading__spinner--black {
  border-color: #c9c9c9;
  border-top-color: #666
}

.loading__spinner--circle.loading__spinner--white {
  border-color: rgba(0, 0, 0, .1);
  border-top-color: rgba(255, 255, 255, .7)
}

.loading__spinner--gradient-circle {
  background-size: contain
}

.loading__spinner--gradient-circle.loading__spinner--black {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAzFBMVEUAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u6urq7u7u7u7u7u7u7u7u7u7u7u7u7u7u6urq7u7u7u7u7u7u6urq6urq6urq7u7u6urq7u7u3t7e6urq7u7u7u7vBwcG7u7u7u7u6urq7u7u7u7u7u7vBwcG6urq8vLy8vLy6urq8vLy7u7u8vLy7u7u8vLzBwcG8vLy/v7+6urq6urq8vLy9vb27u7u8vLy5ubm0tLS7u7u7u7u6urq5ubm+vr68vLy5ubmzs7O6urq7u7vfbONCAAAAQ3RSTlMAt+HAsdv57bvSnPH1q8/Lxcigo6boberZIBav5JkG1VdGQWA2EYUbwo+AqGc9OSkLMP15dVKWik4lXJJ9ZUpxLi0mvPhQuAAAA2hJREFUSMeN0+t66UAYhuGPpIqmrEabSrRDEEFlY19KpZz/Oa1vNpKxiXj87HX3nZGA64XeaPmsVB8eKn11YHgh3J3TqZXq9QdanvbxkVdH1l20uyg1m03EdYqFfnv7qPnZVC+VKEbJtplFjL2r3k1q9SoljA3zZYGRYo9lN916/UqlconRCvyYt9Psusot5fVmjNnuG1KWcZWSYbVKtYSxc/z09EkurVOucixufbKMIUaK+EmxLnbLLwxznTysM0zTlPPtzQuWaGqTZU5jrJVP7fofw5iM61ewhljbydb/hwlOMfaynPtmGJr+/Kd5cmiWnViryC1ioX+60r2IpyNOdgta4T15W4Z9xNK2Pr54a3P8m9aopdVANKZQ2l7DlUbUsl1eG3g/itLHhC+m/Hra+Xh3UphM+mJYkXHRhJT2H/Eu4okHtJ7C47wLqbU1DrHD4aAC5hRl3IIbGTIu0Ld0XqRa8AXcTJkUEIromzKguChwdBv7BQn3AUiuKELdg4wah6RCCF0Oi2x8nIXbBykbWrlcvK2SLEweJTyFmYSnkFlNwjoMckl2Nu5I+AV0CUfZWL50Hr4k7GbjvYQfQc3lVPywwmwcSrgADTXpbiyCVxWH+Ud1s7F5gsvScnTHspZYDZYxbTTakF1VflRGI2l3x7KR4BHMJVzLxk6oHK1CYEy/7mdRlGWJ5QR9YU0C5FlqljlsWZazq2pa1Qjpg+0d5Re2zxg2Xde1MAej+FdQ1vA2dk2mOSf0JF8MvrJq9s1DB6uViXEPtKmMa1G6DYMYI3eAFsQQ0xduqh1Hf0Gw34t/QIA1TLCu64sg5czd7nj89xcIbAEviClWLn9evbfb9v1uF7dxnfIQRIaMsdnqYtZvtz1fbCNeWcmfyjL9/FwstnuZWv73r21THXMCceMz/DMYDFtj0yHEcfdeqzVnGA/OcBQEIUj96jFldrns9Tab2cwwRtvOutX6Ro0HP25bcNLoNsZppvm2CaeRDafcUjzcTAXuIGYHF9uXzzLcHHcpRnuOvwX2AwIXkQ7H3CKexpidGw/OeMoPz2a7GdiFlKIB7lJ7xDuBhUbsQGrO9hKPBEZtRwRutd+xQ6PdXGDPgaxW2yWziHcMi0v7FtxT6G05nsXY3hO4O7LyvjsjY2ds13MvclPkf8Vf5hfphvSUAAAAAElFTkSuQmCC)
}

.loading__spinner--gradient-circle.loading__spinner--white {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMA4b+398/H3LCf18P7u6Ka69Mv8svvpkCs6G2AqeVeJpaQIFdGsodnOFEYchEEeyo1CHZjHDsVDYtOSk3XTGIAAANESURBVEjHldRtV6pAFIbhLaZHUtHQpIMlL5KgQkgIWP7//3X2DDOxUxDP3bdal8/MtJZQX5L5mxdl/vinNxw4ppHA3YUr7enx8Q+rw3vrDPz8Lnqwe0gxgt/+/n3TgnaqPbE4ZjHKMDZ9z27SfNPr9S4sJvB0Otk122zYw+hyhy5jHa/Jrua9WoyV9hkza2m0nM+lRowJLKzAMzu5tqE6Z5joP/V4puRXu5O+xE8MS00xp5hyub3sYz8cI8vSCvzwMPlt132CuaZ3pofmek9tMBz2eZXun7aBWxRusHUefzCTPK+yebfE8z5arp1DRN4jU6WVerqrLjzEyLaqw0WH7jOGUjTSQKRzWuE11OST3dHDaGRAmaMow2p7HEBtRmcmZ1lDMaxQPHahIeuNWDm9UcqGvAM0ZlT0fD6/AxaOKV7DjUyBzwyPcvzNdoxaZsPNFE5Fe/ZcFOu3cUAxPlnSHYvQbqCll3PVQwIHSRnW27BxJnmw7nZ/tgdRG46eCf6APcGf0JpGsApOt8prxyuC+6ARrLdjeukOvBJ8bMcWwVMYdN/xpyxpxwXBIxi8V/03XhB8bMfuiOLJoEpvx8mswjM4EWy046hP/1UmweYdy2aFfdgK+IJpUSsuCkVaJQIdmew1bj11HsaKsG4EySvB+zYc7vI83M9ns7lZFOxLm7OyhdVy4+Nxh+EHYAx/C4z0dbG8jY+uW/GEPQEyQRcLzbt5aMuyXPTlBwDrU0CWpsXNtohjhsV6CKxYrvLsXeOFdV2XHH0CvKVYRa6qqt2wHR4OqBGXXG7EnPJUbFJ776ORBYzHgicgMoVGyfDk072aDQwjQ62LcRyWhROyi9l2akWE5sHXt+cZRoDbgpM/64KiVZm1ndNyrbthFIU7K1uvtyXOArEdF0D6RlrtOs7ptFkuPz73pumnqxXTDP9s5/CrVOw2YpxmmG9fPkn0wawcdjbMUix1hjqGywrU3PJhgn2C+XYcwVVRyu2E2UssNfLMgto8vnuN5TTfPkJDumOLGzOMluO01F/84CE0VqTMOtxSLG+tJ3Ary8RDCytxKnDGZ2/zdFOLsxzuqch8tL+wZyVwd5GVfa183zTT1dbQjxHU9g9qQcv7AjvQsgAAAABJRU5ErkJggg==)
}

.loading__spinner--spinner {
  color: #c9c9c9;
  -webkit-animation-timing-function: steps(12);
  animation-timing-function: steps(12)
}

.loading__spinner--spinner i {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute
}

.loading__spinner--spinner i::before {
  width: 2px;
  height: 25%;
  content: ' ';
  display: block;
  margin: 0 auto;
  border-radius: 40%;
  background-color: currentColor
}

.loading__spinner--spinner.loading__spinner--white {
  color: #fff
}

.loading__spinner--spinner i:nth-of-type(1) {
  opacity: 1;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg)
}

.loading__spinner--spinner i:nth-of-type(2) {
  opacity: .9375;
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg)
}

.loading__spinner--spinner i:nth-of-type(3) {
  opacity: .875;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg)
}

.loading__spinner--spinner i:nth-of-type(4) {
  opacity: .8125;
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg)
}


.loading__spinner--spinner i:nth-of-type(5) {
  opacity: .75;
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg)
}

.loading__spinner--spinner i:nth-of-type(6) {
  opacity: .6875;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg)
}

.loading__spinner--spinner i:nth-of-type(7) {
  opacity: .625;
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg)
}

.loading__spinner--spinner i:nth-of-type(8) {
  opacity: .5625;
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg)
}

.loading__spinner--spinner i:nth-of-type(9) {
  opacity: .5;
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg)
}

.loading__spinner--spinner i:nth-of-type(10) {
  opacity: .4375;
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg)
}

.loading__spinner--spinner i:nth-of-type(11) {
  opacity: .375;
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg)
}
.loading__spinner--spinner i:nth-of-type(12) {
  opacity: .3125;
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg)
}
</style>

<script>
export default {
  name: 'loader',
  props: {
    type: {
      type: String,
      default: 'gradient-circle'
    },
    color: {
      type: String,
      default: 'white'
    }
  }
};
</script>
