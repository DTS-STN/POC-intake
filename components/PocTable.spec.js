import { mount } from '@vue/test-utils'
import PocTable from '@/components/PocTable.vue'

describe('PocTable', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PocTable)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
