// The entry file of your WebAssembly module.

export class Math {
  static add(a: i32, b: i32): i32 {
    return a + b;
  }

  static subtract(a: i32, b: i32): i32 {
    return a - b;
  }

  static multiply(a: i32, b: i32): i32 {
    return a * b;
  }

  static divider(a: i32, b: i32): f32 {
    return a / b;
  }
}
