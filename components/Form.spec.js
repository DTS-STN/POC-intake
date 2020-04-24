import { mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Form)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
