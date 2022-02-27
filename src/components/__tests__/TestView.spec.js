import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import TestView from "../../views/TestView.vue";

describe("TestView", () => {
  it("renders properly", () => {
    const wrapper = mount(TestView, {});
    expect(wrapper.exists()).toBeTruthy();
  });
});
