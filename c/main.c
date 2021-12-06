#include <stdio.h>
#include <emscripten.h>
#include <math.h>

EMSCRIPTEN_KEEPALIVE
float c_add(float a, float b)
{
  return a + b;
}

EMSCRIPTEN_KEEPALIVE
float c_print()
{
  return 0;
}

// EMSCRIPTEN_KEEPALIVE
// int auth()
// {
//   struct Auth
//   {
//     char[] token;
//     char[] refresh;
//   };

//   Auth.token = "";
//   Auth.refresh = "";
// }

EMSCRIPTEN_KEEPALIVE
int c_pow2(int a)
{
  return pow(a, 2);
}