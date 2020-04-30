import { mount } from '@vue/test-utils'
import Button from '@/components/AppButton.vue'

describe('AppButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Button)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
