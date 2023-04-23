import { shallowMount } from "@vue/test-utils";
import ShowCarousel from "@/components/ShowCarousel.vue";

describe("ShowCarousel.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ShowCarousel, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
