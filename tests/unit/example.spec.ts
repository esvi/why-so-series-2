import { shallowMount } from "@vue/test-utils";
import CarouselShows from "@/components/CarouselShows.vue";

describe("CarouselShows.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(CarouselShows, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
