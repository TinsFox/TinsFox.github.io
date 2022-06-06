# this 指向

```js
var o = {
  a: 12,
  b: {
    a: 14,
    c: {
      a: 15,
      d: function () {
        console.log(this.a);
        function e() {
          console.log(this.a);
          f();
        }
        e();
        function f() {
          console.log(this.a);
        }
        g = () => {
          console.log(this.a);
        };
        g();
      },
    },
  },
};
o.b.c.d();
```

12
123
