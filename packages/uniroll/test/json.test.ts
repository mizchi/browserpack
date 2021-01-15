import "isomorphic-unfetch";
import { bundle } from "../src/bundle";

const files = {
  "/foo.json": '{ "foo": 1 }',
  "/index.tsx": "import foo from './foo';\nconsole.log('hello', foo)",
};

test("build", async () => {
  try {
    const warned = [];
    const bundled = await bundle({
      files,
      input: "/index.tsx",
      rollupOptions: {
        onwarn(warnings, defaultHandler) {
          warned.push(warnings);
          defaultHandler(warnings);
        },
      },
    });
    expect(warned.length).toBe(0);
    const out = await bundled.generate({ format: "es" });
    expect(out.output[0]).toMatchSnapshot();
  } catch (err) {
    console.log(err);
    throw Error("uniroll build failed");
  }
});
