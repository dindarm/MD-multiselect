<template>
  <div class="container">
    <div class="row">
      <div class="col-4 p-3">
        <input class="form-control mb-5" :value="selOption.name" />
        <MdMultiselect :options="options" v-model:single="selOption" trackBy="id">
          <template v-slot:singleLabel="slotProps">
            <div>
              {{ slotProps.value.name }}
            </div>
          </template>

          <template v-slot:option="slotProps">
            <div class=" my-1 p-1 d-flex">
              <div>
                <img class="rounded-circle me-3"
                  :src="'https://i.pravatar.cc/30?u=a042581f4e2902670' + slotProps.option.id+ slotProps.option.name" />
              </div>
              <div>
                {{ slotProps.option.name }}
              </div>
            </div>
          </template>
        </MdMultiselect>
        {{selOption}}

        <MdMultiselect :options="options2" v-model:single="selOption2" trackBy="id">
          <template v-slot:singleLabel="slotProps">
            <div>
              {{ slotProps.value.name }}
            </div>
          </template>

          <template v-slot:option="slotProps">
            <div class=" my-1 p-1 d-flex align-item-center">
              <div>
                <img class="rounded-circle me-3"
                  :src="'https://i.pravatar.cc/30?u=a042581f4e2902670' + slotProps.option.id+ slotProps.option.name" />
              </div>
              <div>
                {{ slotProps.option.name }}
              </div>
            </div>
          </template>
        </MdMultiselect>
        {{selOption2}}
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import MdMultiselect from './components/MdMultiselect/MdMultiselect.vue'
import { defineComponent,
  ref } from 'vue'

export default defineComponent({
  name: 'App',

  setup () {
      type testOptions = {
        id: number,
        name: string
      }

      const optis: testOptions[] = [{
        id: 1,
        name: 'A'
      },
      {
        id: 2,
        name: 'B'
      }, {
        id: 3,
        name: 'C'
      },
      {
        id: 4,
        name: 'D'
      },
      {
        id: 5,
        name: 'E'
      },
      {
        id: 6,
        name: 'F'
      }, {
        id: 7,
        name: 'G'
      },
      {
        id: 8,
        name: 'H'
      },
      {
        id: 9,
        name: 'I'
      }
      ]

      const options = ref(optis)

      const optis2: testOptions[] = [{
        id: 1,
        name: 'A'
      },
      {
        id: 2,
        name: 'B'
      }, {
        id: 3,
        name: 'C'
      },
      {
        id: 4,
        name: 'D'
      },
      {
        id: 5,
        name: 'E'
      },
      {
        id: 6,
        name: 'F'
      }, {
        id: 7,
        name: 'G'
      },
      {
        id: 8,
        name: 'H'
      },
      {
        id: 9,
        name: 'I'
      }
      ]

      const options2 = ref(optis2)

      const initSelOpt: testOptions = {
        id: 3,
        name: 'C'
      }

      const selOption = ref(initSelOpt)

      const initSelOpt2: testOptions = {
        id: 9,
        name: 'I'
      }

      const selOption2 = ref(initSelOpt2)

      return {
        options,
        selOption,
        options2,
        selOption2
      }
  },

  components: {
    MdMultiselect

  }

})

</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
