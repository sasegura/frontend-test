import { h } from "preact";
import Header from "../src/components/header";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from "enzyme";

describe("Initial Test of the Header", () => {
  test("Header renders 3 nav items", () => {
    const count = 1;
    const context = shallow(<Header getTotalQuantity={() => count} />);
    expect(context.find("h1").text()).toBe("Frontend-Test");
  });
});
