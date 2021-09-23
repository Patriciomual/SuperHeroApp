import { createLocalVue, shallowMount, RouterLinkStub  } from '@vue/test-utils'
import defaultComponent from '@/layouts/default.vue'

describe('defaultComponent', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(defaultComponent, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('is a Vue instance', () => {
    //expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.drawer).toBe(false) 
    const button = wrapper.findComponent({name : 'v-btn'}) 
    button.trigger('click') 
    expect(wrapper.vm.drawer).toBe(false) 
  })
})

