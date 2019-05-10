import { mount, createLocalVue } from '@vue/test-utils'
import TrixEdit from '@/components/TrixEdit.vue'

const localVue = createLocalVue()
localVue.config.ignoredElements = ['trix-editor']

describe('TrixEdit', () => {
  describe('value prop', () => {
    it('renders text when value is set', async () => {
      const wrapper = mount(TrixEdit, {
        localVue,
        propsData: {
          value: 'This is a test'
        },
        attachToDocument: true,
      })

      const inputData = await new Promise(r => wrapper.vm.$on('input', r))
      expect(inputData).toContain('This is a test')
    })
  })
})