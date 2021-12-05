// let wasmExports = null;

// let wasmMemory = new WebAssembly.Memory({
//   initial: 245,
//   maximum: 256
// });

// let wasmTable = new WebAssembly.Table({
//   initial: 1,
//   maximum: 1,
//   element: "anyfunc"
// });

// let asmLibraryArg = {
//   __handle_stack_overflow: () => {},
//   emscripten_resize_heap: () => {},
//   __lock: () => {},
//   __unlock: () => {},
//   memory: wasmMemory,
//   table: wasmTable
// };

// var info = {
//   env: asmLibraryArg,
//   wasi_snapshot_preview1: asmLibraryArg
// };

// async function loadWasm() {
//   let response = await fetch("./out/main.wasm");
//   let bytes = await response.arrayBuffer();
//   let wasmObj = await WebAssembly.instantiate(bytes, info);
//   wasmExports = wasmObj.instance.exports;
// }

// loadWasm();

export default async function load_c_wasm() {
  const webAssemblyResponse = await fetch("./c/out/main.wasm");
  const buffer = await webAssemblyResponse.arrayBuffer();
  const {
    instance: { exports }
  } = await WebAssembly.instantiate(buffer);

  console.log(exports);

  return exports;
}
