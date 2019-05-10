import { mount, createLocalVue } from '@vue/test-utils'
import TrixEdit from '@/components/TrixEdit.vue'

const localVue = createLocalVue()
localVue.config.ignoredElements = ['trix-editor']

describe('TrixEdit', () => {
  describe('value prop', () => {
    it('renders text when value is set', () => {
      const wrapper = mount(TrixEdit, {
        localVue,
        propsData: {
          value: 'This is a test'
        },
        attachToDocument: true,
      })

      expect(wrapper.emitted().input).toEqual('This is a test')
    })
  })
})